import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  // communicationModes: string[];
  // genders: string[];
  id:number;
  name:string;
  username:string;
  email:string;
  phone:string;
  website:string;
  street:string;
  suite:string;
  city:string;
  zipcode:string;
  lat:string;
  lng:string;
  companyName:string;
  catchPhrase:string;
  bs:string;
  rdonly: boolean;
  showEdits: boolean;

  constructor() { }

  ngOnInit() {
    // this.communicationModes = ['Phone','Email','Personal'];
    // this.genders = ['Female','Male', 'Others'];
    this.id = 1;
    this.name = "Leanne Graham";
    this.username="Bret";
    this.email="Sincere@april.biz";
    this.phone="1-770-736-8031 x56442";
    this.website="hildegard.org";
    this.street="Kulas Light";
    this.suite="Apt. 556";
    this.city="Gwenborough";
    this.zipcode="92998-3874";
    this.lat="-37.3159";
    this.lng="81.1496";
    this.companyName="Romaguera-Crona";
    this.catchPhrase="Multi-layered client-server neural-net";
    this.bs="harness real-time e-markets";
    this.rdonly = true;
    this.showEdits = false;
  }

  submitForm(userForm){
    this.rdonly = true;
    this.showEdits = false;
    console.log("Form Updated.",userForm);
  }

  editForm(userForm){
    // console.log("Form Edit.",userForm);
    this.rdonly = false;
    this.showEdits = true; 
  }

  cancelForm(){
    this.rdonly = true;
    this.showEdits = false;
    // console.log("Form Cancelled.",this);
    this.ngOnInit();
  }
}
