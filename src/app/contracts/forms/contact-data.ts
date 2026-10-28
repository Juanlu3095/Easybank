export class ContactData {
  private name: string;
  private surname: string;
  private email: string;
  private phone: string;
  private message: string;

  constructor(
      name: string,
      surname: string,
      email: string,
      phone: string,
      message: string
    ) {
      this.name = name;
      this.surname = surname;
      this.email = email;
      this.phone = phone;
      this.message = message;
    }

    public getName(){
      return this.name;
    }

    public getSurame(){
      return this.surname;
    }

    public getEmail(){
      return this.email;
    }

    public getPhone(){
      return this.phone;
    }

    public getMessage(){
      return this.message;
    }
}