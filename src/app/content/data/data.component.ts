import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';

import {customUserData} from '../data.model';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  userInput: customUserData = new customUserData(0, 0, new Date());
  @Input() data: customUserData[];
  @Output() inputAdded = new EventEmitter <customUserData>();
  constructor() { }

  ngOnInit() {
    // TODO: Make data Table pageable
   // $("#table1").DataTable();
  }

  ngAfterViewChecked(){
  }

  addUserInput(){
    this.inputAdded.emit(this.userInput);
    this.userInput = new customUserData(0, this.userInput.price, this.userInput.date);
  }

  onUpdatePrice(event: Event){
    this.userInput.price = +(<HTMLInputElement> event.target).value;
  }

  onUpdateDate(event: Event){
    this.userInput.date = new Date((<HTMLInputElement> event.target).value);
  }

  editUserInput(row: customUserData){
    console.log(event);
  }

  deleteUserInput(row: customUserData){
    var index = this.data.indexOf(row);
    this.data.splice(index, 1);
    //this.rowDeleted.emit(index);
  }

}
