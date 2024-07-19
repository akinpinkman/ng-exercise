import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private baseUrl = 'http://localhost:3000/games';
  constructor(private http: HttpClient) {}
  

  getGames(category: string): Observable<Game[]> {
    const endpoint = `${this.baseUrl}?category=${category}`;
    return this.http.get<Game[]>(endpoint);
  }
}
