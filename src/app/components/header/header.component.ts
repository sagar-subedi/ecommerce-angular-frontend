import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { alarm, alarmFill, alignBottom } from 'ngx-bootstrap-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
   icons = {
    alarm,
    alarmFill,
    alignBottom
  };

  isLoggedIn = this.authService.isLoggedIn();

constructor(
  private store: Store<{count: number}>,
  private authService: AuthService,
){
  console.log(this.authService.decodeToken()?.scope);
}
count = this.store.select('count');

}
