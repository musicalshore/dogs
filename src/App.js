import React, { useEffect, useReducer } from "react";
import Dogs from "./components/Dogs";
import Filter from "./components/Filter";
import { fetchBreeds } from "./components/api";
import { reducer } from "./components/reducer";
import { getFilteredBreeds } from "./components/selectors";

const initialState = {
  breeds: [],
  searchText: ""
}
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const breeds = getFilteredBreeds(state)
  useEffect(() => {
    fetchBreeds().then(breeds => {
      dispatch({ type: "UPDATE", value: breeds})
    });
  }, []);
  return (
    <div>
      <Filter searchText={state.searchText}
        onFilter={e => {
          dispatch({
            type: "FILTER_BREEDS", value: e.target.value
          })
        }}
      />
      <Dogs breeds={breeds} />
    </div>
  );
}
