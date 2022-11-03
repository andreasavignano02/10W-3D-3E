import { identifierName } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

@Input() 

export class FormComponent implements OnInit {
  
  tables = [{
    id: "number",
    name: "string",
    cognome: "string",
    datadinascita: "number",
    numeroditelefono: "number"
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
