import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { RegistrationPayload } from '../components/auth/register/register.payload';
import { Observable, map, tap, throwError } from 'rxjs';
import { LoginRequestPayload } from '../components/auth/login/login-request.payload';
import { LoginResponse } from '../components/auth/login/login-response.payload';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { JwtPayload } from './jwt-payload.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  refreshTokenPayload = {
    refreshToken: this.getRefreshToken(),
    username: this.getUserName()
  }

  constructor(private httpClient: HttpClient, private localStorage: LocalStorageService,
    private router: Router ) { 

  }

  signup(registerRequest: RegistrationPayload): Observable<any>{
   return this.httpClient.post('http://localhost:8081/api/auth/register', registerRequest, {responseType: 'text'} );
  }

  login(loginRequestPayload: LoginRequestPayload): Observable<boolean>{
    return this.httpClient.post<LoginResponse>('http://localhost:8081/api/auth/login', loginRequestPayload )
    .pipe(
      map((data)=>{
        this.localStorage.store('authenticationToken', data.authenticationToken);
        this.localStorage.store('username', data.username);
        this.localStorage.store('refreshToken', data.refreshToken);
        this.localStorage.store('expiresAt', data.expiresAt);

        return true;
        
      })
    );


  }

  getJwtToken() {
    return this.localStorage.retrieve('authenticationToken');
  }

  refreshToken() {
    return this.httpClient.post<LoginResponse>('http://localhost:8080/api/auth/refresh/token',
      this.refreshTokenPayload)
      .pipe(tap(response => {
        this.localStorage.clear('authenticationToken');
        this.localStorage.clear('expiresAt');

        this.localStorage.store('authenticationToken',
          response.authenticationToken);
        this.localStorage.store('expiresAt', response.expiresAt);
      }));
  }

  logout() {
    this.httpClient.post('http://localhost:8081/api/auth/logout', this.refreshTokenPayload,
      { responseType: 'text' })
      .subscribe(data => {
        console.log(data);
      });
    this.localStorage.clear('authenticationToken');
    this.localStorage.clear('username');
    this.localStorage.clear('refreshToken');
    this.localStorage.clear('expiresAt');
    this.router.navigate(['/login']);
    
  }

  getUserName() {
    return this.localStorage.retrieve('username');
  }
  getRefreshToken() {
    return this.localStorage.retrieve('refreshToken');
  }

  decodeToken(): JwtPayload | null {
    const token:string = this.getJwtToken();
    if (token) {
      console.log(jwtDecode(token))
      return jwtDecode(token);
    }
    return null;
  }

  isLoggedIn(): boolean {
    return this.getJwtToken() != null;
  }
} 



