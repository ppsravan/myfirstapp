import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { AlertComponent } from 'ngx-bootstrap';

@Component({
  selector: 'app-adminedit',
  templateUrl: './adminedit.component.html',
  styleUrls: ['./adminedit.component.css']
})
export class AdmineditComponent implements OnInit {

  public success = false;
  public failed = false;

  constructor(private service: RegisterService) { }

  ngOnInit() {
  }

  public registerUser() {
    let user = {
      username: 'xyz123',
      password: '122132',
      firstname: 'test',
      lastname: 'abc',
      gender: 1,
      is_business: true,
      is_travel: true,
      is_holidays: true,
    };
    this.service.registerUser('registration', user).subscribe(result => {
      if (result.result === "FAILED") {
        this.failed = true;
      } else {
        this.success = true;
      }
    });
  }

}
