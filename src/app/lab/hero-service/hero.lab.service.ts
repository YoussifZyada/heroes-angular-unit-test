import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Ihero } from '../../models/ihero';

@Injectable({
  providedIn: 'root',
})
export class HeroServiceForLab {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  heroesUrl = 'http://localhost:3000/heroes'; // URL to web api

  constructor(private http: HttpClient) {}

  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<Ihero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Ihero>(url);
  }

  /** PUT: update the hero on the server */
  updateHero(hero: Ihero): Observable<Ihero> {
    return this.http.put(
      `${this.heroesUrl}/${hero.id}`,
      hero,
      this.httpOptions,
    ) as Observable<Ihero>;
  }
}