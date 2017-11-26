import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {customUserData} from './data.model';

@Injectable()
export class ServerService {
  constructor(private http: Http){}

  getExpenseTableFromServer(){
    return this.http.get('http://localhost:8080/TheBalance/expenses/list');
  }

  postExpenseToServer(data: customUserData){
    return this.http.post('http://localhost:8080/TheBalance/expenses/save', data);
  }

  deleteExpenseFromServer(id: number){
    return this.http.post('http://localhost:8080/TheBalance/expenses/delete', id);
  }

  updateExpenseFromServer(data: customUserData){
    return this.http.post('http://localhost:8080/TheBalance/expenses/update', data);
  }

}
