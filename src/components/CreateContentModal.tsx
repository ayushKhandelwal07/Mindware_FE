import { useRef, useState } from "react";
import { CancelIcon } from "../icons/CancelIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../Config";


enum ContentType {
        Youtube = "youtube",
        Twitter = "twitter"
}  

//controlled component
export function CreateContentModal({open, onClose}) {
        const titleRef = useRef<HTMLInputElement>(null);
        const linkRef = useRef<HTMLInputElement>(null);
        const [type , setType ] = useState(ContentType.Youtube);

        // Handler for clicks on the overlay
        
        async function addContent(){  
                const title  = titleRef.current?.value;
                const link = linkRef.current?.value; 
                
                await axios.post(`${BACKEND_URL}/api/v1/content`, {
                        title : title,
                        link : link,
                        type : type
                },{
                        headers: {
                                Authorization : localStorage.getItem("token")
                        } 
                });

                onClose();
        }


        
        const handleOutsideClick = (e) => {
                // Only trigger if the click is directly on the overlay
                if (e.target === e.currentTarget) {
                        onClose();
                }
        };
        return (
                <>
                { open && (
                        <>
                                {/* Semi-transparent overlay - now clickable to close */}
                                <div 
                                        className="fixed inset-0 bg-slate-500 bg-opacity-60 z-10" 
                                        onClick={handleOutsideClick}
                                ></div>
                                
                                {/* Modal container - fully opaque */}
                                <div 
                                        className="fixed inset-0 z-20 flex items-center justify-center"
                                        onClick={handleOutsideClick}
                                >
                                        <div className="bg-white shadow-lg rounded-md p-4" onClick={(e) => e.stopPropagation()}>
                                                <div className="flex justify-end">
                                                        <div className="hover:cursor-pointer" onClick={onClose}>
                                                                <CancelIcon />
                                                        </div>
                                                </div>

                                                <div className="space-y-3 w-full">
                                                        <Input ref={titleRef} placeholder={"title"}/>
                                                        <Input ref={linkRef} placeholder={"Link"} />
                                                </div>

                                                <div className="flex justify-center mt-2 text-gray-500 font-semibold">  Title </div>

                                                <div className="flex gap-3 mt-4">
                                                        <Button text="youtube" varient={type ===  ContentType.Youtube ? "primary" : "secondary" } onClick={() => setType(ContentType.Youtube)} />
                                                        <Button text="twitter" varient={type ===  ContentType.Twitter ? "primary" : "secondary" } onClick={()=> setType(ContentType.Twitter)} />
                                                </div>

                                                <div className="flex justify-center mt-4">
                                                        <Button onClick={addContent} varient="primary" text="Submit"/>
                                                </div>
                                        </div>
                                </div>
                        </>
                )}
                </>
        );
}