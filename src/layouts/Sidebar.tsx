import { Clapperboard, Home, Library, Repeat, Upload } from "lucide-react";
import { buttonStyles } from "../components/Button";
import { ElementType } from "react";
import { twMerge } from "tailwind-merge";

export function Sidebar() {
    return <aside className="sticky top-0 overflow-y-auto scrollbar-hidden pb-5 flex flex-col ml-2">
        <SmallSidebarItem Icon={Home} title="Home" url="/"/>
        <SmallSidebarItem Icon={Repeat} title="Shorts" url="/shorts"/>
        <SmallSidebarItem Icon={Clapperboard} title="Subscriptions" url="/subscriptions"/>
        <SmallSidebarItem Icon={Library} title="Library" url="/library"/>
    </aside> 
}

type SmallSidebarItemProps = {
    Icon: ElementType
    title: string
    url: string
}

export function SmallSidebarItem({Icon, title, url}: SmallSidebarItemProps) {
    return <a href={url} className={twMerge(buttonStyles({variant: "ghost"}), "px-1 py-5 flex flex-col items-center rounded-lg gap-1")}>
            <Icon className="h-6 w-6"/>
            <div className="text-sm">{title}</div>
        </a>
}