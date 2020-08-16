import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() character;

  constructor(public modalService: ModalService) { }

  ngOnInit(): void {
    console.log(this.character);
  }
  public cerrarModal(): void {
    this.modalService.cerrarModal();
  }
}
