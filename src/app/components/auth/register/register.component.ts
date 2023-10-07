import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistrationPayload} from './register.payload';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signupRequestPayload: RegistrationPayload;
  signupForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
    ) {
    this.signupRequestPayload = {
      username: '',
      email: '',
      password: ''
    };

    this.signupForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
  
  }

  signup() {
    this.signupRequestPayload.email = this.signupForm.get('email')?.value;
    this.signupRequestPayload.username = this.signupForm.get('username')?.value;
    this.signupRequestPayload.password = this.signupForm.get('password')?.value;

    this.authService.signup(this.signupRequestPayload)
      .subscribe(() => {
        this.router.navigate(['/login'],
          { queryParams: { registered: 'true' } });
      }, (error: any) => {
        console.log(error);
        this.toastr.error('Registration Failed! Please try again');
      });
  }
}
