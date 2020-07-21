import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css'],
})
export class TodoPageComponent implements OnInit {
  constructor(private store: Store) {}
  completed: boolean = false;
  ngOnInit(): void {}

  toggleAll() {
    this.completed = !this.completed;
    this.store.dispatch(actions.toggleAll({ completado: this.completed }));
  }
}
