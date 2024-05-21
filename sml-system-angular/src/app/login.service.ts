import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDTO } from './DTOs/LoginDTO';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiURL = 'http://localhost:8090/api/v1/user/login';

  constructor(private http: HttpClient) { }

  loginUser(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiURL, {email, password});
  }
}
