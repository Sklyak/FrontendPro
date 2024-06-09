const addressBook = {
    contacts : [],
    // Contact contact
    addContact: function(contact) {
        if (!(contact instanceof Contact)){
            console.log("Wrong data");
            return;
        }
        for (const field of ['name', 'email', 'age']) {
            if (!contact[field] || contact[field] === "" || contact[field] === 0) {
                console.log(`Element ${field} can not be empty`);
                return;
            }
        }
        this.contacts.push(contact);
    },
    findByName: function (name)  {
        let result =[];
        if (typeof name === 'string' && name.trim() !== '') {
            for(const contact of this.contacts) {
                if (contact.name === name) {
                    result.push(contact);
                }
            }
        }
        return result;

    }
};

const Contact = function (name, age, email) {
    //fields by default
    this.name = "";
    this.email = "";
    this.age = 0;
    if (typeof name === 'string' && name.length > 0) {
        this.name = name;
    }
    if (typeof email === 'string' && email.length > 0) {
        this.email = email;
    }
    if (!isNaN(age)) {
        this.age = age;
    }
}

addressBook.addContact(new Contact("John", 25, "john@gmail.com"));
addressBook.addContact(new Contact("Jazz", 47, "jazz@gmail.com"));
addressBook.addContact(new Contact("Alex", 22, "alex@gmail.com"));

console.log(addressBook.findByName("Jazz"));


