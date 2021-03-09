import { combineReducers } from "redux";
import { useSelector } from "react-redux";
import filter from "./filter";
import todos from "./todos";

const rootReducer = combineReducers({
  todos,
  filter,
});

export type RootState = ReturnType<typeof rootReducer>;
type StateSelector<T> = (state: RootState) => T;
type EqualityFn<T> = (left: T, right: T) => boolean;

export function useRootState<T>(
  selector: StateSelector<T>,
  equalityFn?: EqualityFn<T>
) {
  return useSelector(selector, equalityFn);
}

export default rootReducer;
