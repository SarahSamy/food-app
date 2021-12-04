import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string ="https://loopback-auth.herokuapp.com/api/Users";
  constructor(private modalService: NgbModal,private http: HttpClient) { }

  showSignUpDialog(content) {
    this.modalService.open(content);
  }

  addUser(user:User){
  return  this.http.post(this.url,user);
  }
}
