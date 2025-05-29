import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { BACKEND_URL } from "../Config";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export function Signin(){
        const usernameRef = useRef<HTMLInputElement>(null);
        const passwordRef = useRef<HTMLInputElement>(null);
        const navigate = useNavigate();


        async function signin(){
                const username = usernameRef.current?.value;
                const password = passwordRef.current?.value;


                
                const response =  await axios.post(`${BACKEND_URL}/api/v1/sign-in`,{
                        username : username,
                        password : password
                });
        
                const token = response.data.token;
                localStorage.setItem("token" , token);
                navigate("/dashboard");


                alert("Signin in user");
        }; 


        return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
                <div className="bg-white  border min-w-48 p-8 rounded-2xl">
                        <div>
                                <Input placeholder="username" ref={usernameRef} />
                                <Input placeholder="password"  ref={passwordRef} />
                        </div>

                        <div className="flex justify-center pt-3">
                                <Button varient="primary" text="Sign in" fullWidth={true} loading={false} onClick={signin} />
                        </div>
                </div>
        </div>
}