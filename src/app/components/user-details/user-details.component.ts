import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NgIf} from "@angular/common";

import {IUser} from "../../interfaces";
import {UserService} from "../../services";

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
  user: IUser;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.user = this.router.getCurrentNavigation()?.extras.state as IUser;

      if (!this.user) {
        this.userService.getById(id).subscribe(value => this.user = value)
      }
    })
  }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(value => console.log(value, 'ngOnInit'))
  }

}
