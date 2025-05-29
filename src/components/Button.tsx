import type { ReactElement } from "react";

interface ButtonProps {
        varient : "primary" | "secondary";
        text : string;
        startIcon ?: ReactElement;
        onClick ?: ()=> void;
        fullWidth ?: boolean;
        loading ?: boolean;
}



const varientClasses = {
        "primary" : "bg-purple-600 text-white",
        "secondary" : "bg-purple-200 text-purple-400"
}

const defaultStyles = "flex justify-center items-center px-4 py-2 rounded-md";

export function Button({varient , text , startIcon, onClick, fullWidth, loading}  : ButtonProps) {
        return  <button 
                onClick={onClick}
                className={varientClasses[varient] + "   " + defaultStyles + 
                `${fullWidth ? " w-full justify-center items-center " : ""}  ${loading ? " opacity-50" : ""}   ` } disabled={loading}  >
                        
                        <div className="pr-2">
                                {startIcon}        
                        </div>

                        {text}
                
                </button>

}