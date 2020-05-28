export class Animal {
    constructor() {
        console.log("Animal constructed!");
    }

    protected get_sound(): string {
        return "???";
    }

    speak(){
        console.log(this.get_sound());
    }
}

export class Cat extends Animal {
    protected get_sound(): string {
        return "meow";
    }
}