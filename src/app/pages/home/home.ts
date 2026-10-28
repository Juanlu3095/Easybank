import { Component, OnInit, signal } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { FormsModule } from '@angular/forms';
import { ContactData } from '../../contracts/forms/contact-data';

@Component({
  selector: 'app-home',
  imports: [Header, Footer, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit{
  // Form inputs variables for template driven form
  // https://v20.angular.dev/guide/forms/template-driven-forms
  name: string = "";
  surname: string = "";
  email: string = "";
  phone: string = "";
  message: string = "";

  sendContactForm(){
    const formData = new ContactData(
      this.name,
      this.surname,
      this.email,
      this.phone,
      this.message
    )
    console.log(formData.getName())
  }

  ngOnInit(): void {
    
  }

}
