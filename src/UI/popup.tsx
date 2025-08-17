import { createContext, useContext, useEffect, useRef, useState } from "react";

const ToggleContext = createContext<{ toggleShow: boolean; setToggleShow: (isShown: boolean) => void; } | null>(null);

function Popup({ children, ...restProps }: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) {
    const [toggleShow, setToggleShow] = useState(true);
    const divRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const div = divRef.current;
        if (div) {
            const handleClickOutside = (event: MouseEvent) => {
                if (!div.contains(event.target as Node)) {
                    setToggleShow(false);
                }
            };
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }
    }, [divRef]);
    return (
        toggleShow 
            ? (
                <>
                <div
                    data-state={toggleShow ? "open" : "closed"}
                    data-slot="popup-content" 
                    className="h-screen fixed inset-0 w-screen z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 duration-200" {...restProps}>
                    
                </div>
                <div 
                    ref={divRef} 
                    data-state={toggleShow ? "open" : "closed"}
                    data-slot="popup-content" 
                    className="flex fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] max-w-[calc(100%-2rem)] flex-col justify-between gap-4 p-6 bg-background rounded-lg border-2  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 duration-200"
                >
                    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
                        {children}
                    </ToggleContext.Provider>
                </div>
                </>
            )
            : null
    );
}

Popup.Header = function PopupHeader({ children, ...restProps }: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) {
    const context = useContext(ToggleContext);
    if (!context) {
        throw new Error("Popup.Header must be used within a Popup");
    }
    return (
        <div className="flex flex-col gap-1 " {...restProps}>
            {children}
        </div>
    );
};

Popup.Title = function PopupTitle({ children, ...restProps }: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) {
    const context = useContext(ToggleContext);
    if (!context) {
        throw new Error("Popup.Title must be used within a Popup");
    }
    return (
        <h2 className="text-lg font-semibold " {...restProps}>
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
        <p className="text-sm font-semibold" {...restProps}>
            {children}
        </p>
    );
};

Popup.Content = function PopupContent({ children, ...restProps }: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) {
    const context = useContext(ToggleContext);
    if (!context) {
        throw new Error("Popup.Content must be used within a Popup");
    }
    return (
        <div className="flex flex-col gap-1 " {...restProps}>
            {children}
        </div>
    );
};

Popup.Trigger = function PopupTrigger({ children, ...restProps }: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) {
    const context = useContext(ToggleContext);
    if (!context) {
        throw new Error("Popup.Trigger must be used within a Popup");
    }
    const { setToggleShow } = context;
    return (
        <div onClick={() => { setToggleShow(true); }} {...restProps}>
            {children}
        </div>
    );
}

Popup.Close = function PopupClose({ children, ...restProps }: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) {
    const context = useContext(ToggleContext);
    if (!context) {
        throw new Error("Popup.Close must be used within a Popup");
    }
    const { setToggleShow } = context;
    return (
        <div onClick={() => { setToggleShow(false); }} className="cursor-pointer" {...restProps}>
            {children}
        </div>
    );
}

Popup.Footer = function PopupFooter({ children, ...restProps }: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) {
    const context = useContext(ToggleContext);
    if (!context) {
        throw new Error("Popup.Footer must be used within a Popup");
    }
    return (
        <div className="flex gap-2 justify-end " {...restProps}>
            {children}
        </div>
    );
};

export default Popup;   