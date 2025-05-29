import { BrainlyLogo } from "../icons/BrainIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItems } from "./SidebarItem";


export function Sidebar(){
        return <div className="h-screen bg-white border-r border-2 w-72 fixed left-0 top-0">
                <div className="flex text-2xl m-3">
                        <BrainlyLogo /> Brainly
                </div>
                
                <div className="pt-4 pl-8">
                        <SidebarItems text="Twitter" icon={<TwitterIcon />} />
                        <SidebarItems text="Youtube" icon={<YoutubeIcon />} />
                 </div>

        </div>
}