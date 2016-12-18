import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		let heroes = [
			{ id: 11, name: 'Lobo' },
			{ id: 12, name: 'Rich Piano' },
			{ id: 13, name: 'Dante the Meat Man' },
			{ id: 14, name: 'Juando Olvyoso' },
			{ id: 15, name: 'Boognish' },
			{ id: 16, name: 'Bobby Budnick' },
			{ id: 17, name: 'Dr. Osen' },
			{ id: 18, name: 'The Argus' },
			{ id: 19, name: 'Roseanne Barr' },
			{ id: 20, name: 'Large Marge' }
		];
		return { heroes };
	}
}