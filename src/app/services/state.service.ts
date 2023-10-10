import { Injectable } from '@angular/core';
import { AppState } from './state.model';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  appState: AppState;

  constructor() { 
    this.appState = {
      count: 0
    }
  }

  increment(){
    this.appState.count++;
  }

  decrement(){
    this.appState.count--;
  }
}
