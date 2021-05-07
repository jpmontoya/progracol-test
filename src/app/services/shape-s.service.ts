import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Shape } from '../interfaces/shape';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShapeSService {

  baseUrlGame = environment.baseUrlGame;

  constructor(private http: HttpClient) { }

  createFigure(figure: Shape) {
    return this.http.post(`${this.baseUrlGame}/figure`, figure);
  }

  getAllFigures(){
    return this.http.get(`${this.baseUrlGame}/figure`);
  }

}
