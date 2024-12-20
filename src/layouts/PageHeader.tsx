import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react"
import logo from "../assets/StreamVids.png"
import { Button } from "../components/Button"
import { useState } from "react"

export function PageHeader() {
    const [showFullWidthSearch, setShowFullWidthSearch] = useState(false)
    return <div className="flex gap-10 lg:gap-20 justify-between mb-6 pt-2 mx-4">
                <div className={`gap-4 items-center flex-shrink-0 ${showFullWidthSearch ? "hidden" : "flex"}`}>
                    <Button variant="ghost" size="icon" className="bg-red-500">
                        <Menu/>
                    </Button>
                    <a href="/">
                        <img src={logo} className="h-6"/>
                    </a>
                </div>
                <form className={`flex-grow gap-4 justify-center ${showFullWidthSearch ? "flex" : "hidden md:flex"}`}>
                    {showFullWidthSearch && (<Button 
                    onClick={() => setShowFullWidthSearch(false)} 
                    type="button" 
                    variant="ghost" 
                    size="icon" 
                    className="flex-shrink-0">
                        <ArrowLeft/>
                    </Button>)}
                    <div className="flex flex-grow max-w-[600px]">
                        <input type="search" placeholder="Search" 
                        className="rounded-l-full border border-secondary-border
                        shadow-inner shadow-secondary py-1 px-4 text-lg w-full
                        focus:border-red-900 outline-none"/>
                        <Button className="py-1 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0">
                            <Search/>
                        </Button>
                    </div>
                    <Button type="button" size="icon" className="flex-shrink-0">
                        <Mic/>
                    </Button>
                </form>
                <div className={`flex-shrink-0 md:gap-2 ${showFullWidthSearch ? "hidden" : "flex"}`}>
                    <Button onClick={() => setShowFullWidthSearch(true)} variant="ghost" size="icon" className="md:hidden">
                        <Search/>
                    </Button>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Mic/>
                    </Button>
                    <Button variant="ghost" size="icon">
                        <Upload/>
                    </Button>
                    <Button variant="ghost" size="icon">
                        <Bell/>
                    </Button>
                    <Button variant="ghost" size="icon">
                        <User/>
                    </Button>
                </div>
            </div>

}