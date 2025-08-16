class Commit {
    id: string;
    message: string;
    author: string;
    parent: Commit | null;
    constructor(id: string, message: string, parent:Commit | null, author: string) {
        this.id = id;
        this.message = message;
        this.parent = parent;
        this.author = author;
    }
}

export default Commit;
