export class UserModel{
    constructor(
        public _id:string,
        public Name: string,
        public Address: string,
        public Phone: number,
        public Email: string,
        public Username: string,
        public Password: string,
    ){}
}