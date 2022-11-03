import { identifierName } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Table } from '../classes/table';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

@Input() 

export class FormComponent implements OnInit {
  
  tables:Table = []  

  constructor() { }

  ngOnInit(): void {
  }

  deletetables(i: number){
    this.tables.splice(i, 1)
  }
}
