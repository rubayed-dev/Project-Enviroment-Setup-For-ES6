class Person {

    constructor (name,email){
        this.name=name;
        this.email=email;
    }

    print(){
        console.log(`Name: ${this.name},Email: ${this.email}`);
    }

}

export default Person;