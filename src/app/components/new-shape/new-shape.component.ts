import { Component, OnInit } from '@angular/core';
import { Shape } from "src/app/interfaces/shape";
import { ShapeSService } from 'src/app/services/shape-s.service';

@Component({
  selector: 'new-shape',
  templateUrl: './new-shape.component.html',
  styleUrls: ['./new-shape.component.css']
})
export class NewShapeComponent implements OnInit {

  newShape: Shape = { id_grupofigure: 0, figurename: "", positions: [] };

  constructor(private shapeSService: ShapeSService) { }

  ngOnInit(): void {
    for (let i = 0; i < 25; i++) {
      this.newShape.positions.push(false);
    }
  }

  closeModal(event) {
    if (event.target.matches('.new-shape-bg')) {
      event.target.style.display = "none";
    }
  }

  selectPiece(index) {
    this.newShape.positions[index] = true;
  }

  saveShape() {
    document.getElementById('modalNewShape').style.display = "none";
    return this.shapeSService.createFigure(this.newShape).subscribe(
      (success) => {
        this.modalSuccess();
        this.newShape = { id_grupofigure: 0, figurename: "", positions: [] };
        console.log(success);
      },
      (err) => {
        this.modalError();
        console.error(err);
      }
    );
  }

  modalSuccess() {
    let modal = document.getElementById('modal-success');
    modal.classList.add('show');
    modal.addEventListener("webkitAnimationEnd", () => modal.classList.remove('show'));
  }

  modalError() {
    let modal = document.getElementById('modal-error');
    modal.classList.add('show');
    modal.addEventListener("webkitAnimationEnd", () => modal.classList.remove('show'));
  }

}
