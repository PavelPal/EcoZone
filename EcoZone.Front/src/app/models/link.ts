export class Link {
    private name: string;
    private value: string;
    private iconClass: string;

    constructor(name: string, value: string, icon: string) {
        this.name = name;
        this.value = value;
        this.iconClass = icon;
    }
}