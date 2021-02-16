import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private list: Hero[] = [
    {id: 1, name: 'Szent István király', superPower:'Államalapítás', address:'Esztergom'},
    {id: 2, name: 'Szent László király', superPower:'Lovagkirály', address:'Nagyvárad'}, 
    {id: 3, name: 'Károly Róbert', superPower:'Kincstár', address:'Visegrád'},
    {id: 4, name: 'Hunyadi Mátyás', superPower:'Fekete sereg', address:'Kolozsvár'},
    {id: 5, name: 'Dobó István', superPower:'Várkapitány', address:'Eger'},
    {id: 6, name: 'Zrínyi Miklós', superPower:'Hadvezér', address:'Csáktornya'},
    {id: 7, name: 'Széchenyi István', superPower:'Modernizáció', address:'Nagycenk'},
  ];

  list$: BehaviorSubject<Hero[]> = new BehaviorSubject<Hero[]>([]);
  constructor() { }

  getAll(): void{
    this.list$.next(this.list);
  }
}
