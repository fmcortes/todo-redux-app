import { ActionReducerMap } from '@ngrx/store';
import { Todo } from './todos/models/todo.model';
import { todoReducer } from './todos/todo.reducer';
import { validFilters } from './filtro/filtro.actions';
import { filterReducer } from './filtro/filtro.reducer';

export interface AppState {
  todos: Todo[];
  filter: validFilters;
}

export const appReducer: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer,
};
