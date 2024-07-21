import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getGames(endpoint: string): Observable<Game[]> {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.http.get<Game[]>(url);
  }
}
