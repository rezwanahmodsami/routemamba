import { Route } from "./types";

const optionsTest: Route = {
    method: "POST",
    meta_loader: true,
    content_url: "/sdsd/sds.js",
    container: "#root",
    preloader: "afadsf",
    data: {},
    error_content: "sdf",
    http_url_change: false,
    http_url: ""
}

class Routemamba {
    name(){
        console.log(optionsTest)
    }
}

export const routemamba = new Routemamba();