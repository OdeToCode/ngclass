import {Component} from "@angular/core";
import {RouteConfig, ROUTER_DIRECTIVES, OnActivate, CanActivate} 
        from "@angular/router-deprecated";

@Component({
    template: "<h3>This is info about the company</h3>"
})
class AboutCompanyComponent {
    
}

const canActivateAddress = function(next, prev) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(true), 20); 
    });
};

@Component({
    template: "<h3>This is the address of the company...</h3>"
})
@CanActivate(canActivateAddress)
class AboutAddresssComponent implements OnActivate {
    routerOnActivate(next, prev) {
        console.dir(next, prev);
    }
}

@Component({
    selector: "atm-about",
    template: require("./about.component.html"),
    directives: [ROUTER_DIRECTIVES]    
})
@RouteConfig([
    { path: "/company", component:AboutCompanyComponent, name:"Company"},
    { path: "/address", component:AboutAddresssComponent, name:"Address"}
])
export class AboutComponent {
    
}
