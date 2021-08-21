import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TasksService {

  TASKS: string[] = [
    "do this now",
    "do that later",
    "wash this tomorrow"
  ] 

  constructor() { }

  // make a method here that will be used by the components
  getTasks(): string[] { // this is the type of the return value
    return this.TASKS
  }
}