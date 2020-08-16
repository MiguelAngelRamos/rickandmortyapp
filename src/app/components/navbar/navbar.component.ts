import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() characterfromSon = new EventEmitter();
  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
  }
  
  public searchCharacter(termino: string, event): void {
    event.preventDefault();
    this.characterService.searchCharacter(termino).subscribe( data => {
      this.characterfromSon.emit(data.results);
    });
  }

}
