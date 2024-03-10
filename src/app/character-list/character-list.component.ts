import { Component, inject } from '@angular/core';
import { RickAndMortyService } from '../rick-and-morty.service';
import { CardComponent } from '../card/card.component';
import { AsyncPipe, NgIf, NgFor } from '@angular/common';
import { Character } from '../rick-and-morty.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'character-list',
  standalone: true,
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss',
  imports: [CardComponent, AsyncPipe, NgIf, NgFor, ModalComponent],
})
export class CharacterListComponent {
  rickAndMortyService = inject(RickAndMortyService);
  selectedCharacter: Character | undefined;

  onCharacterSelected(character: Character) {
    this.selectedCharacter = character;
  }

  characters$ = this.rickAndMortyService.getCharacters();
}
