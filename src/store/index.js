import { useState } from "react";
import getActions from "../actions";
import initialState from "../store/state";

const useAppState = () => {
  const [state, setState] = useState(initialState);
  const actions = getActions(setState);
  return { state, actions };
};

export default useAppState;
