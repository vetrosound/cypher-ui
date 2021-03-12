import { State } from './users.reducer';
import { createSelector } from '@ngrx/store';

export const selectFeature = (state: State) => state;

export const selectName = createSelector(
  selectFeature,
  (state: State) => state.name
);
