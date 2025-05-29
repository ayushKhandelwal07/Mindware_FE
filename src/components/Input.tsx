interface InputProps {
        placeholder : string;
        ref ?: any;
}


export function Input({ placeholder, ref} : InputProps ) {
        return <input ref={ref} type={"text"}  placeholder={placeholder}  className="border w-full border-purple-500 rounded-md p-2 my-2 flex"/>
}