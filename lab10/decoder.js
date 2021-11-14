/**
 * Implement Decorator pattern to add a logger to any object (additional class is needed).
 *  A logger method will log a message to the `console`.

 */

class User{
    constructor(name){
        this.name=name;

    }
    logger(){
        console.log("Name: "+this.name);
    }
}

class DecoratedUser{
    constructor(user,street,city){
        this.user=user;
        this.name=user.name;
        this.street=street;
        this.city=city;
    }
    logger(){
        console.log("Decoreter User is "+this.name+" ,"+this.street+","+ this.city)
    }
}


const user = new User("Kelly");

const decorated = new DecoratedUser(user, "Broadway", "New York");
decorated.logger();