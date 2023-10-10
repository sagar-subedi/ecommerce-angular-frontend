import { createSelector } from "@ngrx/store";
import { CounterState } from "./counter.reducer";

const selectFeature = (state: CounterState) => state.count;

// Create a selector using createSelector
export const selectSomeData = createSelector(
  selectFeature, // Pass one or more input selectors
  (featureState) => featureState // Define a projection function
);

