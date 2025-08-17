import userStore, { type Action, type State } from "../store/userInfo";
import { Button } from "../UI/button";
import { Input } from "../UI/input";
import Popup from "../UI/popup";

function UserInfoPopup() {
    const { name, updateName, hasSavedName, savedName } = userStore() as State & Action;
    return (
        !hasSavedName ? (
        <Popup>
            <Popup.Header>
                <Popup.Title>
                    Hello Welcome to Git Terminal !
                </Popup.Title>
                <Popup.Description>
                    Let's Get Started with Git, begin by entering your name for the terminal.
                </Popup.Description>
            </Popup.Header>
            <Popup.Content>
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-sm font-medium">
                        Name
                    </label>
                    <Input 
                        type="text" 
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => updateName(e.target.value)}
                        className="border border-gray-300 rounded-md p-2 mt-2 w-full" 
                    />
                </div>
            </Popup.Content>
            <Popup.Footer>
                <Popup.Close>
                    <Button
                    onClick={() => {
                        savedName(true);
                    }}
                    >
                        Save
                    </Button>
                </Popup.Close>
                <Popup.Close>
                    <Button
                        variant={"destructive"}
                    >
                        Close
                    </Button>
                </Popup.Close>
            </Popup.Footer>
        </Popup>
    ) : null
    );
}

export default UserInfoPopup;