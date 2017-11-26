import { Component, OnInit } from '@angular/core';
import {customUserData} from './data.model';
import {ServerService} from './server.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  data: customUserData[] = [];
  userInput: customUserData;

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.populateTable();
  }

  populateTable() {
    this.serverService.getExpenseTableFromServer().subscribe(
      (response) => { console.log(response);
                      this.dbObjectsToDataModel(JSON.parse((<any>response)._body));
                   } ,
      (error) => console.log(error)
    );
  }

  onUserInputAdded(userInput: customUserData){
    this.userInput = userInput;
    //this.data.unshift(userInput);
    this.postExpenseToServer(userInput);
    this.populateTable(); 
  }

  deleteRow(index: number){
    this.data.splice(index, 1);
  }

  postExpenseToServer(userInput: customUserData){
    this.serverService.postExpenseToServer(userInput).subscribe(
      (response) => { console.log(response);},
      (error) => console.log(error)
    );
  }

  dbObjectsToDataModel(jsonData){
    console.log(jsonData);
    for(var row in jsonData){
      console.log(row);
      this.userInput = new customUserData(jsonData[row].id, jsonData[row].price, new Date(jsonData[row].date));
      this.data.unshift(this.userInput);
    }
  }

}
