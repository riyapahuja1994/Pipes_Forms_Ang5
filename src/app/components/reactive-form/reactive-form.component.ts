import { Component, OnInit } from '@angular/core';
import { FormGroup,FormArray,FormControl,Validators } from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  userForm:FormGroup;

  constructor() { }

  ngOnInit() {
    this.userForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      username: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      website: new FormControl(''),
      address:new FormGroup({
        street: new FormControl(''),
        suite: new FormControl(''),
        city: new FormControl(''),
        zipcode: new FormControl(''),
        geo:new FormGroup({
          lat: new FormControl(''),
          lng: new FormControl('')
        })    
      }),
      company: new FormGroup({
        companyName: new FormControl(''),
        catchPhrase: new FormControl(''),
        bs: new FormControl('')
      }),
      hobbies: new FormArray([])
    })
  }

  addHobby(){
    (<FormArray>this.userForm.get('hobbies')).push(new FormControl(''));
    }

  submit(){

  }
}
