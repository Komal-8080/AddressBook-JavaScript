class Person{

    //Constructor
    constructor(...params){
        this.firstName=params[0];
        this.lastName=params[1];
        this.address=params[2];
        this.city=params[3];
        this.state=params[4];
        this.zip=params[5];
        this.phoneNumber=params[6];
        this.email=params[7];
    }    

    get firstName() { return this._firstName; }
    set firstName(firstName) { 
        let regFirstName=RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(regFirstName.test(firstName))
            this._firstName = firstName;
        else throw 'Invalid First Name';
    }   

    get lastName() { return this._lastName; }
    set lastName(lastName) { 
        let regLastName=RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(regLastName.test(lastName))
            this._lastName = lastName;
        else throw 'Invalid Last Name';
    } 

    get address(){ return this._address;}
    set address(address){
        let regAddress=RegExp('^[A-Za-z0-9]{4,}$');
        if(regAddress.test(address))
            this._address=address;
        else throw 'Invalid Address';
    }

    get city(){ return this._city;}
    set city(city){
        let regCity=RegExp('^[A-Za-z]{4,}$');
        if(regCity.test(city))
            this._city=city;
        else throw 'Invalid City';
    }

    get state(){ return this._state;}
    set state(state){
        let regState=RegExp('^[A-Za-z]{4,}$');
        if(regState.test(state))
            this._state=state;
        else throw 'Invalid State';
    }

    get zip(){return this._zip;}
        set zip(zip){
            let regZip= RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$');
            if(regZip.test(zip))
                this._zip=zip;
            else throw 'Invalid Zip Code';
        }

    get phoneNumber(){return this._phoneNumber;}
    set phoneNumber(phoneNumber){
        let regPhoneNumber= RegExp('^[1-9]{2}\\s{1}[0-9]{1}[0-9]{9}$');
        if(regPhoneNumber.test(phoneNumber))
            this._phoneNumber=phoneNumber;
        else throw 'Invalid Phone Number';
    }

    get email(){return this._email;}
        set email(email){
            let regEmail= RegExp('^([a-zA-a0-9\\.\\-\\+]+)@([a-zA-Z0-9\\.]{1,5})([a-zA-Z\\.]+){1,3}([a-zA-Z]{1,3})$');
            if(regEmail.test(email))
                this._email=email;
            else throw 'Invalid Email Id';
        }

    //ToString Method
    toString(){
        return '\nFirstName: ' + this.firstName + ' LastName: ' + this.lastName + ' Address: ' + this.address+ ' City: '+ this.city+' State : '+ this.state+ ' Zip: '+this.zip+' PhoneNumber: '+this.phoneNumber+' Email: '+ this.email;
    }
}

//To Add Person Contact
function addPerson(addressBook, personData) {
    addressBook.push(personData);
}

//To search and edit person
function editPerson(personName, oldName, newName) {
    personName.filter(person => person.firstName == oldName).forEach(person => person.firstName = newName);
}

//To delete Person Contact
function deletePerson(addressBook, personName){
    let removePerson = addressBook.map(person => person.firstName).indexOf(personName);
    addressBook.splice(removePerson,1);
}

//To Count Number Of Persons
function countPerson(addressBook){
    let count= addressBook.reduce((acc, elements) => acc.concat(elements), []).length;
    console.log("Number of Persons are : "+count);
 }

//To Remove Duplicates
function removeDuplicate(addressBook) {
    let duplicatePerson = addressBook.filter((item, index) => addressBook.indexOf(item) == index);  
    addressBook.splice(duplicatePerson,1);   
} 

//To Search Person by Name
function searchPerson(addressBook,personName){
    let search=addressBook.find(person => person.firstName=== personName);
    console.log("Searched Person Details are: " + search.toString());
}

//To Get Person by City name
function getPersonByCity(addressBook,cityName){
    addressBook.filter(personName => personName.city == cityName).forEach(person=>console.log("Person In A City "+cityName+ ":" +person.toString()));
}

//To Get Person by State name
function getPersonByState(addressBook,stateName){
    addressBook.filter(personName => personName.state == stateName).forEach(person=>console.log("Person In A State " +stateName+":"+person.toString()));
}

//To Count Person By City name
function countPersonByCity(addressBook,cityName){
    let cityCount = addressBook.filter(personName => personName.city == cityName);
    let count= cityCount.reduce((acc, elements) => acc.concat(elements), []).length;
    console.log("Number of Persons in " +cityName+ ":"+count);
}

//To Count Person By State name
function countPersonByState(addressBook,stateName){
    let stateCount = addressBook.filter(personName => personName.state == stateName);
    let count= stateCount.reduce((acc, elements) => acc.concat(elements), []).length;
    console.log("Number of Persons in " +stateName+ ":"+count);
}

try{
let personData1 = new Person("Komal","Shinde","Sion","Mumbai","Maharastra",400017,'91 7712034524','abc.xyz@bl.co.in');
let personData2 = new Person("Sony", "Hotker","Imampura","Hyderabad","Telangana","500006","91 9030595968","abc.xyz@bl.co.in");
let personData3 = new Person("Lakhan", "Hotker","Jiyaguda","Hyderabad","Telangana","500006","91 8231054679", "abc@yahoo.com");
let personData4 = new Person("Komal","Shinde","Sion","Mumbai","Maharastra",400017,'91 7712034524','abc.xyz@bl.co.in');
let personData5 = new Person("Sudhir","Shinde","Sion","Mumbai","Maharastra",400017,'91 7712034524','abc.xyz@bl.co.in');
let personData6 = new Person("Anita", "Hotker","Imampura","Hyderabad","Telangana","500006","91 9030595968","abc.xyz@bl.co.in");
let addressBookArray = new Array();
addPerson(addressBookArray,personData1);
addPerson(addressBookArray,personData2);
addPerson(addressBookArray,personData3);
addPerson(addressBookArray,personData4);
addPerson(addressBookArray,personData5);
addPerson(addressBookArray,personData6);
console.log("Person Data");
addressBookArray.forEach(person => console.log(person.toString()));
editPerson(addressBookArray, "Komal", "Bhakti");
console.log("On Editing Person Data");
addressBookArray.forEach(person => console.log(person.toString()));
deletePerson(addressBookArray, "Sony");
console.log("On deleting Person Data");
addressBookArray.forEach(person => console.log(person.toString()));
countPerson(addressBookArray);
removeDuplicate(addressBookArray);
console.log("After Removing Duplicates : ");
addressBookArray.forEach(person => console.log(person.toString()));
searchPerson(addressBookArray,"Lakhan");
getPersonByCity(addressBookArray,"Mumbai");
getPersonByState(addressBookArray,"Telangana");
countPersonByCity(addressBookArray,"Mumbai");
countPersonByState(addressBookArray,"Telangana");
}
catch(e){
    console.error(e);
}