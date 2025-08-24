import { useEffect, useRef, useState } from "react";
import Commands from "./Commands";
import InitialCommand from "./InitialCommand";
import PreviousCommands from "./PreviousCommand";

function Terminal(){
    const [ userInput, setUserInput ] = useState<string>("");
    const [ previousCommand, setPreviousCommand] = useState<string[]>([]);
    const currentInputRef = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        if (currentInputRef && currentInputRef.current) {
            currentInputRef.current.scrollIntoView({ behavior: "smooth" });
        }
    },[previousCommand,currentInputRef])
    function onKeyDown(value : string){
        setUserInput(value);
        setPreviousCommand((state)=> [...state, value]);
    }
    return(
        <div className="min-h-screen p-6 text-lg flex flex-col gap-4 font-mono bg-blue-950 text-white">
            <InitialCommand />
            {previousCommand.map((value:string, id:number)=>(
                <PreviousCommands key={id + value} value={value} />
            ))}
            <Commands setUserInput={(value: string)=> setUserInput(value)} onKeyDown={onKeyDown} ref={currentInputRef} />
        </div>
    )
}

export default Terminal;