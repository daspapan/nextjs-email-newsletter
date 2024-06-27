import { ICONS } from "@/shared/utils/icons";
import { atom } from "jotai";

export const navItems: NavItems[] = [
    {
        title: "Features"
    },
    {
        title: "Pricing"
    },
    {
        title: "Resources"
    },
    {
        title: "Docs"
    },
]

export const partners: PartnersTypes[] = [
    {
        url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=640,quality=75/www/homepage/MobileHero.png"
    },
    {
        url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=640,quality=75/www/homepage/MobileHero.png"
    },
    {
        url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=640,quality=75/www/homepage/MobileHero.png"
    },
    {
        url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=640,quality=75/www/homepage/MobileHero.png"
    }
]

export const freePlan: PlanType[] = [
    {
        title: "Up to 2,500 subscribers",
    },
    {
        title: "Unlimited sends",
    },
    {
        title: "Custom newsletter",
    },
    {
        title: "Newsletter analytics",
    },
    
]

export const GrowPlan:PlanType[] = [
    {
        title: "Up to 10,000 subscribers"
    },
    {
        title: "Custom domains"
    },
    {
        title: "API access"
    },
    {
        title: "Newsletter community"
    },
    
]


export const scalePlan: PlanType[] = [
    {
        title: "Up to 100,000 susbscribers"
    },
    {
        title: "Referal program"
    },
    {
        title: "Up to 10,000 subscribers"
    },
    {
        title: "Up to 10,000 subscribers"
    },
    
]

export const sideBarActiveItem = atom<string>("/dashboard");

export const reportFilterActiveItem = atom<string>("Overview");

export const emailEditorDefaultValue = atom<string>("");

export const settingsActiveItem = atom<string>("Profile");

export const sideBarItems: DashboardSideBarTypes[] = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: ICONS.dashboard,
    },
    {
        title: "Write",
        url: "/dashboard/write",
        icon: ICONS.write,
    },
    {
        title: "Grow",
        url: "/dashboard/grow",
        icon: ICONS.analytics,
    },
    {
        title: "Audience",
        url: "/dashboard/audience",
        icon: ICONS.audience,
    },
]


export const sideBarBottomItems: DashboardSideBarTypes[] = [
    {
        title: "Settings",
        url: "/dashboard/settings",
        icon: ICONS.settings,
    },
    {
        title: "View Site",
        url: "/",
        icon: ICONS.world,
    },
]


export const subscribersData: subscribersDataTypes[] = [
    {
        _id: "",
        email: "programmer@gmail.com",
        createdAt: "",
        source: "",
        status: ""
    },
    {
        _id: "",
        email: "support@dfafe.com",
        createdAt: "",
        source: "",
        status: ""
    }
]