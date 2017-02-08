
export class Task {

    id: number;
    createDate: number;
    updateDate: number;
    description: string;

    constructor(description: string, id: number) {
        this.createDate = Date.now();
        this.updateDate = Date.now();
        this.description = description;
        this.id = id;
    }
}