// First, I'll import the createContext, useContext and useReducer from React

import React, { createContext, useContext, useReducer } from "react";

// I'll import the reducer, initialState, ProjectsState and ProjectsActions
// from the reducer.ts file

import { reducer, initialState, MembersState, MembersActions } from "./reducer";

// Next, using createContext function, we will create a context for
// `Projects State` object. The shape of this new context object is
// ProjectsState and here I've set the default value to undefined.

const MembersStateContext = createContext<MembersState | undefined>(undefined);

type MembersDispatch = React.Dispatch<MembersActions>;

const MembersDispatchContext = createContext<MembersDispatch | undefined>(
  undefined
);
export const MembersProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Next, I'll pass the `dispatch` object as value of this ProjectsDispatchContext.

  return (
    <MembersStateContext.Provider value={state}>
      <MembersDispatchContext.Provider value={dispatch}>
        {children}
      </MembersDispatchContext.Provider>
    </MembersStateContext.Provider>
  );
};

export const useMembersState = () => useContext(MembersStateContext);

export const useMembersDispatch = () => useContext(MembersDispatchContext);
