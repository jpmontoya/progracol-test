import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "src/app/interfaces/user";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrlUser: String = environment.baseUrlUser;

  constructor(private http: HttpClient) { }

  signIn(user: User) {
    return this.http.post(`${this.baseUrlUser}/auth`, user);
  }

}
