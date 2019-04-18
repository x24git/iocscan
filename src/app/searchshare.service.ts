import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchshareService {
  private searchSource = new BehaviorSubject('');
  currentSearch = this.searchSource.asObservable();

  constructor() { }
  changeMessage(search: string) {
    this.searchSource.next(search);
  }
}

