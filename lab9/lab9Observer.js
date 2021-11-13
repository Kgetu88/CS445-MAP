

class Subject {
   events={ eat:[],
           study:[]
           }
    on(event,fn){
        if(this.events.eat===event){
            this.events.eat.push(fn);
          }
        else if(this.events.study===event){
            this.events.study.push(fn);
          }
         }

    emit(event,message){
        if(this.events.eat==event){
            this.events.eat.forEach(msg=>console.log(msg));
            ;
        }

        else if(this.events.study===event){
            this.events.study.forEach(msg=>console.log(msg));
        }
        
     }
     
    }

 const subject = new Subject();
subject.on("eat", console.log); 
subject.on("study", console.log);

function foo(msg) {
    console.log('foo: ' + msg);
}
subject.on('eat', foo);
subject.on('study', foo);

subject.emit('eat', 'Corn');
subject.emit('study', 'Corn');