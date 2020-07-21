import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import { AppState } from '../../app.reducer';
import { validFilters } from 'src/app/filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  todos: Todo[] = [];
  currentFilter: validFilters;

  ngOnInit(): void {
    //this.store.select('todos').subscribe((todos) => (this.todos = todos));

    this.store.subscribe(({ todos, filter }) => {
      this.todos = todos;
      this.currentFilter = filter;
    });
  }
}
