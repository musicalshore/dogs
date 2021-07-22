import { createSelector } from "reselect"
const getBreeds = state => state.breeds;
const getSearchText = state => state.searchText;
export const getFilteredBreeds = createSelector(
  [getBreeds, getSearchText],
  (breeds, searchText) => breeds.filter(
      breed => breed.name.toLowerCase().includes(searchText)
    )
  )


