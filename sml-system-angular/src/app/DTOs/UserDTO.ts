export class UserDTO {
    username: string;
    email: string;
    password: string;

    constructor() {
        this.username = '';
        this.email = '';
        this.password = '';
    }
}