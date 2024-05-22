import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURL = 'http://3.255.225.30:8443/api/v1/user/save';

  constructor(private http: HttpClient) { }

  saveUser(username: string, email: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiURL, {username, email, password});
  }
}
