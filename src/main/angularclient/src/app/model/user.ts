/**
The code defines a User class that has an id, name, and email property.
 */
export class User {
    id: string;
    name: string;
    email: string;

    /**
The constructor initializes the properties with the given values.
 */
    constructor(id: string, name: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}