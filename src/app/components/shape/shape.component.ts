import { Component, OnInit } from '@angular/core';
import { ShapeSService } from 'src/app/services/shape-s.service';

@Component({
  selector: 'shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.css']
})
export class ShapeComponent implements OnInit {

  figuresData;

  constructor(private shapeSService: ShapeSService) { }

  ngOnInit(): void {
    this.getAllFigures();
  }

  createFigure() {
    document.getElementById('modalNewShape').style.display = "flex";
  }

  getAllFigures() {
    return this.shapeSService.getAllFigures().subscribe(
      (success) => {
        this.figuresData = success;
        console.log(success);
      },
      err => {
        this.figuresData = {
          "data": [
            {
              "id_grupofigure": 2,
              "figurename": "Cuatro Esquinas",
              "positions": [
                true,
                false,
                false,
                false,
                true,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                true,
                false,
                false,
                false,
                1
              ]
            },
            {
              "id_grupofigure": 2,
              "figurename": "Cuatro Esquinas 2",
              "positions": [
                true,
                false,
                false,
                false,
                true,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                true,
                false,
                false,
                false,
                1
              ]
            }
          ],
          "message": "Lista generada con exito",
          "errors": null
        };
        console.error(err);
      }
    );
  }

}
