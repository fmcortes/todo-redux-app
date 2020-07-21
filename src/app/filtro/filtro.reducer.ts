import { createReducer, on } from '@ngrx/store';
import { filter, validFilters } from './filtro.actions';

export const initialState: validFilters = 'todos';

const _filterReducer = createReducer(
  initialState,
  on(filter, (state, { filterValue }) => filterValue)
);

export function filterReducer(state, action) {
  return _filterReducer(state, action);
}
