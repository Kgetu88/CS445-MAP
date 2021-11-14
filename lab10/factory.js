



class Regular {
        constructor() {
            this.lumen="60 Watt";
              this.age="1 year"
              this.color="none"
        }
    }
class   Energy {
        constructor(color) {
             this.lumen="35 Watt";
             this.age="10 year"
             this.color=color
        }
    }
    
    class Factory {
            createBulb(type,color) {
                let bulbtype;
               if (type === "regular") {
                    bulbtype = new Regular();
                } else if (type === "energy") {
                    bulbtype = new Energy(color);
                } 
                
                bulbtype.type = type;
               bulbtype.show = function() {
                    console.log(this.type + " :lumen " + this.lumen + " Last "+ this.age+ " "+this.color);
                }
           return bulbtype;
            }
        }
        



        const bulbs = [];
const factory = new Factory();

bulbs.push(factory.createBulb("regular"));
bulbs.push(factory.createBulb("energy", "red"));


for (let i = 0, len = bulbs.length; i < len; i++) {
    console.log(bulbs[i].show());
}