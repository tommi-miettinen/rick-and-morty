import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

interface ApiResponse {
  info: any;
  results: Character[];
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  url: string;
  origin: {
    name: string;
    url: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  httpClient = inject(HttpClient);

  getCharacters() {
    return this.httpClient.get<ApiResponse>(
      'https://rickandmortyapi.com/api/character'
    );
  }
}
