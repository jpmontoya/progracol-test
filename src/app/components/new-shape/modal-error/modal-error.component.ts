import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'modal-error',
  templateUrl: './modal-error.component.html',
  styleUrls: ['./modal-error.component.css']
})
export class ModalErrorComponent implements OnInit {

  @Input() modalError: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
