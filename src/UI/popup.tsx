import { createContext, useContext, useEffect, useRef, useState } from "react";

const ToggleContext = createContext<{ toggleShow: boolean; toggleIsShown: (isShown: boolean) => void; } | null>(null);

function Popup({ children, ...restProps }: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) {
    const [toggleShow, setToggleShow] = useState(true);
    const toggleIsShown = (isShown: boolean) => setToggleShow(!isShown);
    const divRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const div = divRef.current;
        if (div) {
            const handleClickOutside = (event: MouseEvent) => {
                if (!div.contains(event.target as Node)) {
                    toggleIsShown(false);
                }
            };
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }
    }, [divRef]);
    return (
        <div className="h-screen bg-gray-600/10" {...restProps}>
            <div ref={divRef} className="flex items-center justify-center h-full">
                <ToggleContext.Provider value={{ toggleShow, toggleIsShown }}>
                    {children}
                </ToggleContext.Provider>
            </div>
        </div>
    );
}

Popup.Title = function PopupTitle({ children, ...restProps }: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) {
    const context = useContext(ToggleContext);
    if (!context) {
        throw new Error("Popup.Title must be used within a Popup");
    }
    return (
        <h2 className="text-lg font-semibold" {...restProps}>
            {children}
        </h2>
    );
};

Popup.Description = function PopupDescription({ children, ...restProps }: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) {
    const context = useContext(ToggleContext);
    if (!context) {
        throw new Error("Popup.Description must be used within a Popup");
    }
    return (
        <h2 className="text-lg font-semibold" {...restProps}>
            {children}
        </h2>
    );
};

export default Popup;   