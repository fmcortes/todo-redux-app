import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from 'src/app/filtro/filtro.actions';
import * as todoActions from 'src/app/todos/todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  currentFilter: actions.validFilters = 'todos';
  filters: actions.validFilters[] = ['completados', 'pendientes', 'todos'];

  pendingTodos: number = 0;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // this.store
    //   .select('filter')
    //   .subscribe((filtro) => (this.currentFilter = filtro));

    this.store.subscribe((state) => {
      this.currentFilter = state.filter;
      this.pendingTodos = state.todos.filter((todo) => !todo.complete).length;
    });
  }

  selectedFilter(filtro: actions.validFilters) {
    this.store.dispatch(actions.filter({ filterValue: filtro }));
  }

  cleanComplete() {
    this.store.dispatch(todoActions.cleanCompleted());
  }
}
