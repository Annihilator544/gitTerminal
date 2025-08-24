import userStore, { type State } from "../store/userInfo";
import { Input } from "../UI/input";
import PromptSegment from "./PromptSegment";

function PreviousCommands({value} : {value: string}) {
    const { name } : State = userStore();
    return (
        <div className="flex flex-col space-y-2">
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
                    disabled={true}
                    value={value}

                />
            </div>
        </div>
    )
}

export default PreviousCommands;
