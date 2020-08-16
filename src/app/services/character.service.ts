import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from '../config/url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  public contador = 2;
  constructor(private http: HttpClient) { }

  public getcharcters(page: number): Observable<any> {
    if (!page){
      page = 1;
    }
    return this.http.get(`${URL}/character/?page=${page}`);
  }

  public contadorPage(): void {
    if (this.contador <= 34) {
      this.contador++;
    }
  }
  public contadorDismiss(): void {
    // this.contador = this.contador - 2;
    if (this.contador > 1){
      this.contador--;
    }
  }

  public searchCharacter(character): Observable<any>{
    return this.http.get(`${URL}/character/?name=${character}`);
  }
}
