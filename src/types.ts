
/**
 * types of every route method objects @param
 */
export type RouteMethod            = string;
export type RouteMetaLoader        = boolean;
export type RouteContentUrl        = string;
export type RouteContainer         = string;
export type RoutePreloader         = string;
export type RouteData              = object;
export type RouteErrorContent      = string;
export type RouteHttpUrlChange     = boolean;
export type RouteHttpUrl           = string;
export type RouteMetaUrl           = string;
export type RouteDomContent        = string;
export type RouteServerHost        = string;
export type RouteErrorHead         = string;


/**
 * Route types defined for @param
 * of all route method call.
 */
 export type Route  = {
    method:             RouteMethod,
    meta_loader:        RouteMetaLoader,
    content_url:        RouteContentUrl,
    container:          RouteContainer,
    preloader:          RoutePreloader,
    data:               RouteData,
    error_content:      RouteErrorContent,
    http_url_change:    RouteHttpUrlChange,
    http_url:           RouteHttpUrl,
}

/**
 * Navigation Options types @param
 */

type NavigationHeaderLoad = boolean;
type NavigationFooterLoad = boolean;

export type NavigationOptions  = {
    http_url?:          RouteHttpUrl,
    meta_loader?:       RouteMetaLoader,
    http_url_change?:   RouteHttpUrlChange,
    method?:            RouteMethod,
    header_load?:       NavigationHeaderLoad,
    footer_load?:       NavigationFooterLoad
}

/**
 * Tab handler Options types @param
 */
export type TabConfig = {
    tabRoute:           string,
    content_url:        string,
    preloader:          string,
    error_handler:      string
}

export type TabHandler = {
    tabSwitcher:            string,
    initialTab:             string,
    activeSwitcherClass:    string,
    activeTabClass:         string,
    tabs:                   Array<TabConfig>
}

export type TabRegister = Array<TabHandler>;