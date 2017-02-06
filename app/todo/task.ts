
export class Task {
    createDate: number;
    updateDate: number;
    description: string;

    constructor(d: string) {
        this.createDate = Date.now();
        this.updateDate = Date.now();
        this.description = d;
    }
}