import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from "src/app/interfaces/user";
import { Router } from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  userError: String = "";
  passError: String = "";

  userInput: String = "";
  passInput: String = "";

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  validationFrom() {
    this.userError = "";
    this.passError = "";

    if(!this.userInput) return this.userError = "El usuario es requerido";
    if(!this.passInput) return this.passError = "La contraseña es requerida";
    
    this.submit();
    return true;
  }

  submit(){
    this.user = { username: this.userInput, password: this.passInput }
    return this.authService.signIn(this.user).subscribe( 
      (success) => {
        console.log(success);
        this.router.navigate(['/']); 
      },
      (err) => {
        console.error(err);
        /*******/
        this.router.navigate(['/perfil']);
        /*******/
      }
    )
  }

}
