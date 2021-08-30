// Sidebar route metadata
export interface RouteInfo {
    path: string;
    title: string;
    titleAr:string;
    titleFr: string;
    icon: string;
    classMethod: string;
    badge: string;
    badgeClass: string;
    isExternalLink: boolean;
    labelTitleFr: string;
    lableTitleAr: string;
    submenu : RouteInfo[];
}
