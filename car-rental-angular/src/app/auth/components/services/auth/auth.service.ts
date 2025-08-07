import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

const BASE_URL = 'http://http://4.156.245.208:8080' ;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(signupRequest: any): Observable<any> {
    return this.http.post(`${BASE_URL}/api/auth/signup`, signupRequest)
  }

  login(loginRequest: any): Observable<any> {
    return this.http.post(`${BASE_URL}/api/auth/login`, loginRequest)
  }
}
