/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useReducer } from "react";
import { taskReducer, initialState } from "./reducer";
import { TaskListState, TasksDispatch } from "./types";
const CommentStateContext = createContext<TaskListState>(initialState);
const CommentDispatchContext = createContext<TasksDispatch>(() => {});
export const CommentsProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  // Create a state and dispatch with `useReducer` passing in the `taskReducer` and an initial state. Pass these as values to our contexts.
  const [state, dispatch] = useReducer(taskReducer, initialState);
  return (
    <CommentStateContext.Provider value={state}>
      <CommentDispatchContext.Provider value={dispatch}>
        {children}
      </CommentDispatchContext.Provider>
    </CommentStateContext.Provider>
  );
};

// Create helper hooks to extract the `state` and `dispacth` out of the context.
export const useCommentsState = () => useContext(CommentStateContext);
export const useCommentsDispatch = () => useContext(CommentDispatchContext);
