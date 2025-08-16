import Branch from "./Branch";
import Commit from "./Commit";
import { v4 as uuidv4, NIL as NIL_UUID } from 'uuid';

class Git {
    repoName: string;
    lastCommitId: string = NIL_UUID;
    author: string = "Hello";
    HEAD: Branch; 
    branches: Branch[];
    constructor(name: string) {
        this.repoName = name; // repo name
        const master = new Branch("master", null);
        this.HEAD = master;
        this.branches = [master];
    }
    commit(message: string){
       const uuid = uuidv4(); 
       const commit = new Commit(uuid, message, this.HEAD.commit, this.author);
       this.HEAD.commit = commit;
       return commit;
    }
    log(){
        const history: Commit[] = [];
        let commit = this.HEAD.commit;
        while(commit?.parent){
            history.push(commit);
            commit = commit.parent;
        }
        return history;
    }
    createbranch(branchname: string){
        const branch = new Branch(branchname, this.HEAD.commit);
        this.branches.push(branch);
        this.HEAD = branch;
        console.log("Switched to new branch: " + branchname);
        return;
    }
    checkout(branchname : string){
        for( let i=0; this.branches.length > i; i++){
            if(this.branches[i].name === branchname){
                console.log("switched to existing branch: "+ branchname);
                this.HEAD = this.branches[i];
                return;
            }
        }        
    }
}

export default Git;