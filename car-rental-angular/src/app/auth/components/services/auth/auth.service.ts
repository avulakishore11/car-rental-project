import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment'; // ✅ adjust the path if needed

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private BASE_URL = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  register(signupRequest: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/api/auth/signup`, signupRequest);
  }

  login(loginRequest: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/api/auth/login`, loginRequest);
  }
}
