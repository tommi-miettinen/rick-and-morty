import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() character: any;
  @Output() onCharacterSelected = new EventEmitter<any>();

  onCardClick() {
    this.onCharacterSelected.emit(this.character);
  }
}
