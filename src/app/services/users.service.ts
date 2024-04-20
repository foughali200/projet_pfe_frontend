import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Signup } from '../models/signup'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  signup(signup : Signup): Observable<any> {
    return this.http.post("http://localhost:8084/auth/signup", signup, { responseType: "text" });
  }

}
