import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],

})
export class SignUpComponent implements OnInit {
  user: User = {
    firstName: "",
    email: "",
    password: ""
  };
  confirmedEmail: string = "";

  constructor(private modalService: NgbModal,private userService:UserService) { }

  ngOnInit() {
  }

  close() {
    this.modalService.dismissAll();
  }
  signUp() {
    console.log("signed user is: ", this.user);
    this.userService.addUser(this.user).subscribe(user=>console.log({'user added is ' : user}));
  }

}
