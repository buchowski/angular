import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Hero } from './hero';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
	private heroesUrl = 'api/heroes';
	constructor(private http: Http) {}
	getHeroes(): Promise<Hero[]> {
		return this.http.get(this.heroesUrl)
			.toPromise()
			.then(response => response.json().data as Hero[])
			.catch(this.handleError);
	}
	getHeroesSlowly(): Promise<Hero[]> {
		return new Promise<Hero[]>(resolve => {
			setTimeout(resolve, 2000);
		})
		.then(this.getHeroes.bind(this));
	}
	getHero(id: number): Promise<Hero> {
		return this.getHeroes()
			.then(heroes => heroes.find(hero => hero.id === id));
	}
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
}