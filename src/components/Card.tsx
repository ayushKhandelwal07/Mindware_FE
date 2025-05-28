import { DeleteIcon } from "../icons/DeleteIcon";
import { DocumentIcon } from "../icons/DocumentIcon";
import { ShareIcon } from "../icons/ShareIcon";

interface CardInterface{
        title : string;
        link : string;
        type: "youtube" | "twitter"

}



export function Card( {title , link , type } : CardInterface){
        return <div>
                <div className="bg-white border-2 border-slate-200 max-w-96 rounded-md p-4">

                        <div className="flex justify-between">

                                <div className="flex items-center">
                                        <div className="text-gray-500 pr-2">
                                                <DocumentIcon />
                                        </div>
                                        {title}
                                        
                                </div>

                                <div className="flex items-center gap-3">
                                        <div className="text-gray-500">
                                                <a href={link} target="_blank"></a>
                                                <ShareIcon />
                                        </div>

                                        <div className="text-gray-500">
                                                <DeleteIcon />                                        
                                        </div>

                                </div>        
                
                        </div>
                        
                        <div className="pt-4">
                                        {type === "youtube" &&  <iframe width="100%" height="200" src={link.replace("watch" , "embed")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> }

                       
                        
                                        {type === "twitter" && 
                                         <blockquote className="twitter-tweet">
                                                <a href={link.replace("x.com" , "twitter.com")}>Loading tweet...</a>
                                        </blockquote>}
                                        
                       
                        </div>

                       
                </div>


        </div>
} 