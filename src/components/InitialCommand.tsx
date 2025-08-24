function InitialCommand() {
    return (
        <div className="flex items-left flex-col justify-left h-full">
            <h4 className="text-white font-semibold">Welcome to the Git Terminal</h4>
            <h2 className="text-white font-semibold"> Here's a list of Available Commands use man command for more info</h2>
            <ul className="list-disc list-inside">
                <li className="text-gray-300">git init</li>
                <li className="text-gray-300">git clone</li>
                <li className="text-gray-300">git add</li>
                <li className="text-gray-300">git commit</li>
                <li className="text-gray-300">git push</li>
            </ul>
        </div>
    )
}

export default InitialCommand;