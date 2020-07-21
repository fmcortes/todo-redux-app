import { createAction, props } from '@ngrx/store';

export type validFilters = 'todos' | 'completados' | 'pendientes';

export const filter = createAction(
  '[Filter] Set Filter',
  props<{ filterValue: validFilters }>()
);
