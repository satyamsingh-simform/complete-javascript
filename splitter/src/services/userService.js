import { User } from "../models/user";

export class UserService {
    constructor() {
        this.users = new Map();
    }

    addUser(name) {
        if (this.users.has(name)){
            throw new Error('User already exists');
        }

        const user = new User(name);
        this.users.set(name, user);
        return user;
    }


    getUser(name) {
        return this.users.get(name);
    }
    getAllUsers() {
        return Array.from(this.users.values());
    }
    getUserNames() {
        return Array.from(this.users.keys());
    }
    hasUser(name) {
        return this.users.has(name);
    }
    getUserCount() {
        return this.users.size;
    }
    clear() {
        this.users.clear();
    }
}