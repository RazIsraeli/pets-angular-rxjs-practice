import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-rxjs-practice';
  USER_STORAGE_KEY = 'user';

  constructor(
    private userService: UserService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    const loggedInUser = this.storageService.loadFromStorage(
      this.USER_STORAGE_KEY
    );
    if (loggedInUser) this.userService.setLoggedInUser(loggedInUser);
  }
}
