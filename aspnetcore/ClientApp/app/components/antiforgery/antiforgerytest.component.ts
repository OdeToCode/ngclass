import {Component} from "@angular/core";
import {Http, Response, RequestOptions, Request, Headers} from "@angular/http";

let apiUrl = "http://localhost:14025/api/antiforgeryexample";
let movieData = { id: 1, title: "Star Wars", rating: 4 };

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

    sendPostRequest() {
        this.http.post(apiUrl, movieData)
            .subscribe(response => this.lastResponse = response,
                       error => this.lastResponse = error);
    }

    computeResponseStatus() {
        return {
            good: this.lastResponse && this.lastResponse.status === 200,
            bad: this.lastResponse && this.lastResponse.status > 399
        }
    }
}