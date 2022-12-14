import { PersistStorage, RoutesStorage } from "./Global";

import * as RoutesInitializer from "./RoutesInitializer";
import {NavigateRoute, NavigateData, NavigateOptions, RouteHttpUrl, Route, RouteHttpUrlChange, RouteMethod, RouteMetaLoader, RegisterdRoutesPages} from "./types";

export const navigate = (route_to: NavigateRoute, data: NavigateData = null, options: NavigateOptions = {}) =>{
    if (route_to != null || route_to != undefined) {
        let r: RegisterdRoutesPages = RoutesStorage.RoutesPages;
        for (let i = 0; i < r.length; i++) {
            let http_url: RouteHttpUrl = route_to;
            if (route_to.indexOf(r[i].http_url) !== -1) {
                
                let h_url: RouteHttpUrl = r[i].http_url;
                let http_url_change: RouteHttpUrlChange = true;
                let method: RouteMethod = r[i].method;
                let meta_loader: RouteMetaLoader = r[i].meta_loader;
                if (data == null) {
                    data = {};
                }

                // setting / root path to blank, so it can be define dir as  root path
                if (route_to == "/") {
                    http_url = "";
                }


                    if (options.meta_loader != undefined && typeof options.meta_loader == "boolean") {
                        meta_loader = options.meta_loader;
                    }
                    if (options.http_url_change != undefined && typeof options.http_url_change == "boolean") {
                        http_url_change = options.http_url_change;
                    }

                    if (options.method != undefined && options.method != "") {
                        method = options.method;
                    }

                    if (options.header_load != undefined && typeof options.header_load == "boolean") {
                        RoutesStorage.RoutesHeaders.forEach(h => {
                            for (let i = 0; i < h.http_url.length; i++) {
                                if (h.http_url[i] == h_url) {
                                    let Route: Route = {
                                        method: 'GET',
                                        meta_loader: false,
                                        content_url: h.content_url,
                                        container: h.container,
                                        preloader: h.preloader,
                                        data: {},
                                        error_content: h.error_content,
                                        http_url_change: false,
                                        http_url: h.http_url[i]
                                    }
                                    RoutesInitializer.route(Route);
                                    break;
                                }
                            }
                        });
                    }

                    if (options.footer_load != undefined && typeof options.footer_load == "boolean") {
                        RoutesStorage.RoutesFooters.forEach(f => {
                            for (let i = 0; i < f.http_url.length; i++) {
                                if (f.http_url[i] == h_url) {
                                    let Route: Route = {
                                        method: 'GET',
                                        meta_loader: false,
                                        content_url: f.content_url,
                                        container: f.container,
                                        preloader: f.preloader,
                                        data: {},
                                        error_content: f.error_content,
                                        http_url_change: false,
                                        http_url: f.http_url[i]
                                    }
                                    RoutesInitializer.route(Route);
                                    break;
                                }
                            }
                        });
                    }
                let Route: Route = {
                    method: method,
                    meta_loader: meta_loader,
                    content_url: r[i].content_url,
                    container: r[i].container,
                    preloader: r[i].preloader,
                    data: data,
                    error_content: r[i].error_content,
                    http_url_change: http_url_change,
                    http_url: http_url
                }

                RoutesInitializer.route(Route);
                break;
            }else if((route_to.indexOf(r[i].http_url) === -1) && i == (RoutesStorage.RoutesPages.length - 1)){
                throw new Error(`${route_to} is not a registered routes.`);
            }
        }
    }else{
        throw Error(PersistStorage.DomContent.NavigateRoutePathUndefined);
    }
}

export const pop_route = ():void =>{
    history.back();
}

export const push_route = ():void =>{
    history.go(1);
}