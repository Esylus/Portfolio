import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name: string;
  email: string;
  phone: string;
  message: string;


  constructor() { }

  ngOnInit() {
  }

  messageSubmit(){
    const message = 
    {
      name: this.name,
      email: this.email,
      phone: this.phone,
      message: this.message
    }    
    console.log(message);

    // validate backend 

    // gather input from fields into an object

    // validate all forms are filled
    // validate email    
    // validate phone number

    // pass to service that will send to back

  }

}
