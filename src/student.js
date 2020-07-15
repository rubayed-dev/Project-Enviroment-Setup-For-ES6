import Person from './persone';

class Student extends Person {

    constructor(name,email,id){
        super(name,email)
        this.id=id
    }

    detail(){
        super.print()
        console.log(`Id: ${this.id}`);
    }

}

export default Student;