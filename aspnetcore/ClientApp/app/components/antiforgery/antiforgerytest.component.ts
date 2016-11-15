import {Component} from "@angular/core";
import {Http, Response, RequestOptions, Request, Headers} from "@angular/http";

let apiUrl = "http://localhost:14025/api/antiforgeryexample";

interface AntiForgeryTokenResponse
{
    requestToken: string;
    headerName: string;        
}

@Component({
    template: require("./antiforgerytest.component.html")    
})
export class AntiForgeryTestComponent {

    aftRequestToken: AntiForgeryTokenResponse;
    lastResponse: Response;

    constructor(private http: Http) {
        
    }

    getToken() {
        this.http
            .get(`${apiUrl}/getantiforgerytoken`)
            .map(r => r.json())
            .subscribe(
                token => this.aftRequestToken = token,
                err => console.log(err));

    }

    makePostWithToken() {
        if (this.aftRequestToken) {
            let options = this._buildPostOptions();

            // this is the key - adding the request token to the headers with the appropriate name
            // aspnet will match the header with the AFT cookie (cookie set when obtaining the token)
            options.headers.append(this.aftRequestToken.headerName, this.aftRequestToken.requestToken);

            this._makePostRequest(options);
        }
    }

    makePostWithoutToken() {
        this._makePostRequest(this._buildPostOptions());
    }

    computeResponseStatus() {
        return {
            good: this.lastResponse && this.lastResponse.status === 200,
            bad: this.lastResponse && this.lastResponse.status > 399
        }
    }

    private _makePostRequest(options: RequestOptions) {

        let request = new Request(options);
        this.http.request(request)
            .subscribe(r => this.lastResponse = r, error => this.lastResponse = error);
    }

    private _buildPostOptions() {
        let options = new RequestOptions();

        options.body = JSON.stringify({ id: 1, title: "Star Wars", rating: 4 });
        options.headers = new Headers();
        options.method = "POST";
        options.url = apiUrl;
        options.headers.append("Content-Type", "application/json");

        return options;
    }
}