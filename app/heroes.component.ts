import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	moduleId: module.id,
	selector: 'my-heroes',
	templateUrl: 'heroes.component.html',
	styleUrls: ['heroes.component.css']
})
export class HeroesComponent implements OnInit  {
	ngOnInit(): void {
		this.getHeroes();
	};
	selectedHero:Hero;
	heroes:Hero[];
	constructor(private heroService: HeroService, private router: Router) {}
	getHeroes():void {
		this.heroService.getHeroes().then((heroes: Hero[]) => this.heroes = heroes);
	}
	onSelect(hero:Hero):void {
		this.selectedHero = hero;
	}
	goToDetail():void {
		this.router.navigate(['/detail', this.selectedHero.id]);
	}
	add(name: string): void {
		name = name.trim();
		if (!name) { return; }
		this.heroService.create(name)
			.then(hero => {
				this.heroes.push(hero);
				this.selectedHero = null;
			});
	}
	delete(id: number): void {
		this.heroService.delete(id)
			.then((id) => {
				let index:number;

				index = this.heroes.findIndex((hero) => hero.id == id);
				this.heroes.splice(index, 1);
				this.selectedHero = null;
			});
	}
}
	