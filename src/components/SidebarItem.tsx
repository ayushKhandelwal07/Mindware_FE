import type { ReactElement } from "react"


export function SidebarItems({icon , text} : {
        icon : ReactElement,
        text : string
}){
        return <div className="flex gap-2 hover:cursor-pointer hover:bg-purple-100 rounded max-w-60 transition-all duration-100">
                <div className="p-2">
                        {icon}
                </div>

                <div className="p-2">
                        {text}
                </div>
        </div>
}