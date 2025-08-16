import type Commit from "./Commit";

class Branch {
    name: string;
    commit: Commit | null;
    constructor(name: string, commit: Commit | null){
        this.name = name;
        this.commit = commit;
    }
}

export default Branch;