const cat = {
    name: "Maru",
    color: "yellow",
    meow(){
        console.log(`object: ${this}`);
        console.log(`${this.name} says meowww`);
    }
}

cat.meow();

const meow2 = cat.meow;
meow2();
