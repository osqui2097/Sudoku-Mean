import { Injectable, NgModule } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs/add/operator/map';
@Injectable()
export class SudokuService {
  constructor(private _http: Http) { }
  
  getNewSudoku(username: string, difficulty: string, lastPlayed: string) {
    return this._http.get('./api/newSudoku').map((response: Response) => { return response.json() });
  }
  checkSudoku(matrix) {
    let _url = './api/checkSudoku/'+ JSON.stringify(matrix) ;
    return this._http.get(_url)
      .map((response: Response) => {return response.json()});
  }
  solveSudoku(matrix){
    let _url = './api/solveSudoku/'+ JSON.stringify(matrix) ;
    return this._http.get(_url)
      .map((response: Response) => {return response.json()})
    
  }
  loadUserSudokus(user){
    let _url = './api/sudokus/'+user;
    return this._http.get(_url)
    .map((response: Response) => response.json());
  }
  loadSudoku(id){
    let _url = './api/sudoku/'+ id ;
    return this._http.get(_url)
    .map((response: Response) => response.json());
  }
  saveSudoku(sudoku){
    
    let _url = './api/sudokus/' + sudoku._id;

  }
}
