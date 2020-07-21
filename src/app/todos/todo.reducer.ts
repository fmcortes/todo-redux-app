import { createReducer, on } from '@ngrx/store';
import {
  create,
  toggle,
  edit,
  deleteTodo,
  toggleAll,
  cleanCompleted,
} from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
  new Todo('Save the world'),
  new Todo('defeat thanos'),
  new Todo('steal captain american shield'),
];

const _todoReducer = createReducer(
  initialState,
  on(create, (state, { texto }) => [...state, new Todo(texto)]),
  on(deleteTodo, (state, { id }) =>
    state.filter((todo) => {
      return todo.id !== id;
    })
  ),
  on(toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      } else {
        return todo;
      }
    });
  }),
  on(edit, (state, { id, texto }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text: texto,
        };
      } else {
        return todo;
      }
    });
  }),
  on(toggleAll, (state, { completado }) => {
    return state.map((todo) => {
      return {
        ...todo,
        complete: completado,
      };
    });
  }),
  on(cleanCompleted, (state) => {
    return state.filter((todo) => !todo.complete);
  })
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
