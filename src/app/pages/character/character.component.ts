import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../../services/character.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  public characters = [];
  public characterSeleccionado;
  public infoPagination;
  public loading = true;
  public search = false;
  constructor( private characterService: CharacterService,
               public modalService: ModalService,
               private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCharacter();
  }

  public getCharacter(page?: number): void {
    this.activatedRouter.paramMap.subscribe(params => {
      let page = +params.get('page');
      this.characterService.getcharcters(page).subscribe(
        (data: any) => {
          this.loading = false;
          this.characters = data.results;
          this.infoPagination = data.info;
        }
        );
    });

  }

  public abrirModal(character): void {
    this.characterSeleccionado = character;
    this.modalService.abrirModal();
  }

  public getCharacterSon(event): void {
    this.characters = event;
    this.search = true;
  }

}
