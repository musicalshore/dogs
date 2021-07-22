export function reducer(state, action) {
  switch (action.type) {
    case "UPDATE":
      return {...state, breeds: [...action.value]}
    case "FILTER_BREEDS":
      return {...state, searchText: action.value}
    default:
      throw new Error();
  }
}
