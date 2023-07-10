import { Component, DoCheck} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { take } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements DoCheck {
  user: any;
  ruolo: any;

  constructor(
    public auth: AuthService,
    private router: Router,
    private userService: UserService
    ){
      this.userService.ruoloUtente.subscribe(res => this.ruolo = res);
    }

  ngDoCheck(): void {
      if(JSON.parse(localStorage.getItem('user')) !== null ){
        this.user = JSON.parse(localStorage.getItem('user'));
      }
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('login');
  }
}
