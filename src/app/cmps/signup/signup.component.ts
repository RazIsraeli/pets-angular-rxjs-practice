import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  form!: FormGroup;
  name!: FormControl;
  username!: FormControl;
  password!: FormControl;

  user!: User;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();

    this.user = this.userService.getEmptyUser() as User;

    this.form.valueChanges
      .pipe(
        filter((form) => this.form.valid),
        map((form) => {
          form.name = form.name.replace(/<(?:.|\n)*?>/gm, '');
          form.username = form.username.replace(/<(?:.|\n)*?>/gm, '');
          return form;
        }),
        map((form) => {
          form.updated = new Date();
          return form;
        })
      )
      .subscribe((form) => {
        const { name, username, password } = form;
        this.user.name = name;
        this.user.username = username;
        this.user.password = password;
      });
  }

  createFormControls() {
    this.name = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(25),
    ]);
    this.username = new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(12),
    ]);
    this.password = new FormControl('', Validators.required);
  }

  createForm() {
    this.form = new FormGroup({
      name: this.name,
      username: this.username,
      password: this.password,
    });
  }

  onSignup() {
    this.userService.signup(this.user as User).subscribe((user) => {
      // this.router.navigateByUrl('/');
      console.log(`user ${user.username} has sign up to pets app!`);
    });
  }
}
