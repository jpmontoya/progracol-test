import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedGuard } from 'src/app/guards/logged.guard';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  dropdown() {
      document.getElementById('dropdown-menu').classList.toggle('show');
  }

  signuot() {
    this.router.navigate(['/']);
  }

}
