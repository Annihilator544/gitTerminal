import { useEffect, useState, type Ref } from "react";
import userStore, { type State } from "../store/userInfo";
import { Input } from "../UI/input";
import PromptSegment from "./PromptSegment";

function Commands({setUserInput, onKeyDown, ref}: {setUserInput: (value: string) => void, onKeyDown: (value: string) => void, ref: Ref<HTMLDivElement>}) {
    const { name } : State = userStore();
    const [value, setValue] = useState<string>("");
    useEffect(()=>{
        const timeout = setTimeout(()=> {
            if(value !== "") setUserInput(value);
        },300)
        return () => clearTimeout(timeout);
    },[value])
    return (
        <div className="flex flex-col space-y-2" ref={ref}>
            <div className="ml-auto text-orange-400 font-semibold">
                Meowwwwww! What should I do next UwU ? ...
            </div>
            <div className="flex font-semibold">
                <PromptSegment
                    text={name}
                    bg="#9A348E" // plum
                    fg="white"
                    start={true}
                />
                
                <PromptSegment
                    text="~"
                    bg="#DE5D83" // blush
                    fg="white"
                />
                <Input
                    className="flex-1 h-7 border-none focus-visible:ring-0 p-0"
                    placeholder="Type your command..."
                    autoFocus={true}
                    value={value}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            onKeyDown(value);
                            setValue("");
                        }
                    }}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
        </div>
    )
}

export default Commands;
