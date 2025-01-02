import { ChevronDown, ChevronUp, Clapperboard, Clock, Home, Library, History, PlaySquare, Repeat } from "lucide-react";
import { Button, buttonStyles } from "../components/Button";
import { Children, ElementType, ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";

export function Sidebar() {
    return (
    <>
        <aside className="sticky top-0 overflow-y-auto scrollbar-hidden pb-5 flex flex-col ml-2 lg:hidden">
            <SmallSidebarItem Icon={Home} title="Home" url="/"/>
            <SmallSidebarItem Icon={Repeat} title="Shorts" url="/shorts"/>
            <SmallSidebarItem Icon={Clapperboard} title="Subscriptions" url="/subscriptions"/>
            <SmallSidebarItem Icon={Library} title="Library" url="/library"/>
        </aside>
        <aside className="w-60 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-3 flex flex-col gap-2 px-2">
            <LargeSidebarSection visibleItemCount={3}>
                <LargeSidebarItem isActive Icon={Home} title="Home" url="/" />
                <LargeSidebarItem Icon={Repeat} title="Shorts" url="/shorts" />
                <LargeSidebarItem Icon={Clapperboard} title="Subscriptions" url="/subscriptions" />
                <LargeSidebarItem Icon={Library} title="Library" url="/library" />
            </LargeSidebarSection>
            <hr />
            <LargeSidebarSection visibleItemCount={5}>
                <LargeSidebarItem Icon={Library} title="Library" url="/library" />
                <LargeSidebarItem Icon={History} title="History" url="/history" />
                <LargeSidebarItem Icon={PlaySquare} title="PlaySquare" url="/playsquare" />
                <LargeSidebarItem Icon={Clock} title="Clock" url="/clock" />
            </LargeSidebarSection>
        </aside>
    </>
     )
}

type SidebarItemProps = {
    Icon: ElementType
    title: string
    url: string
    isActive?: boolean
}

function SmallSidebarItem({Icon, title, url}: SidebarItemProps) {
    return <a href={url} className={twMerge(buttonStyles({variant: "ghost"}), "px-1 py-5 flex flex-col items-center rounded-lg gap-1")}>
            <Icon className="h-6 w-6"/>
            <div className="text-sm">{title}</div>
        </a>
}

function LargeSidebarItem({Icon, title, url, isActive=false}: SidebarItemProps) {
    return <a href={url} className={twMerge(buttonStyles({variant: "ghost"}), `w-full flex items-center rounded-lf gap-3 p-3 ${isActive ? "font-bold bg-gray-100 hover:bg-secondary" : undefined }`)}>
        <Icon className="w-6 h-6"/>
        <div className="whitespace-nowrap overflow-hidden text-ellipsis">{title}</div>
    </a>
}

type LargeSidebarSectionProps = {
    children: ReactNode
    title?: string
    visibleItemCount: number
}


function LargeSidebarSection({children, title, visibleItemCount=Number.POSITIVE_INFINITY}: LargeSidebarSectionProps){
    const [isExpanded, setIsExpanded] = useState(false)
    const childrenArray = Children.toArray(children).flat()
    const visibleChildren = isExpanded ? childrenArray : childrenArray.slice(0, visibleItemCount)
    const showExpandButton = childrenArray.length > visibleItemCount
    const ButtonIcon = isExpanded ? ChevronUp : ChevronDown

    return <div>
        {title && <div className="text-lg ml-3 mt-2 mb-1">{title}</div>}
        {visibleChildren}
        {showExpandButton && 
            <Button onClick={() => setIsExpanded(e => !e)} variant="ghost" className="w-full flex items-center rounded-lg gap-4 p-3">
                <ButtonIcon />
                <div>{isExpanded ? "Show less" : "Show more"}</div>
            </Button>
        }
    </div>
}