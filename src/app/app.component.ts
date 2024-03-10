import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterListComponent } from './character-list/character-list.component';
import { RickAndMortyService } from './rick-and-morty.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CharacterListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [RickAndMortyService],
})
export class AppComponent {
  title = 'rick-and-morty';
}
