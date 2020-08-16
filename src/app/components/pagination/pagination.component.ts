import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  paginas: number[];
  public pageActual: number;
  public publicTotalPages = 34;
  public desde: number;
  public hasta: number;
  constructor(public characterService: CharacterService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.initPaginator(1);
    this.activatedRoute.paramMap.subscribe( params => {
      let page = +params.get('page');
      // para la primera pagina el parametro page no existe cuando no existe lo asignamos a 0
      this.pageActual = page;
    });
  }

  private initPaginator(numero): void {
    // el maximo entre 1 (1 es el valor minimo que podria tener el desde) y nuestra pagina actual -4 , total de paginas -5
    let next = numero;
    this.desde = Math.min(Math.max(1, next - 4), this.publicTotalPages - 5);
    console.log(this.desde);
    // el minimo entre el total de paginas y nuestra pagina actual + 4
    this.hasta = Math.max(Math.min(this.publicTotalPages, next + 4), 6);
    console.log(this.hasta);
    /* En resumen el rango es entre 1 y 6 */
    if (this.publicTotalPages > 5) {
      this.paginas = new Array(this.hasta - this.desde + 1).fill(0).map((_valor, indice) => indice + this.desde);
    } else {
      // fill para llenar un arreglo con datos
      this.paginas = new Array(this.publicTotalPages).fill(0).map((_valor, indice) => indice + 1);
    }
  }

  public contadorPage(): void {
    this.characterService.contadorPage();
    this.initPaginator(this.characterService.contador);
    console.log(this.characterService.contador);
  }

  public contadorDismiss(): void {
    this.characterService.contadorDismiss();
    this.initPaginator(this.characterService.contador);
    console.log(this.characterService.contador);
  }

}
