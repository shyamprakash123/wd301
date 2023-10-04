export interface TaskListState {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export type AvailableColumns = "pending" | "in_progress" | "done";

export type ColumnData = {
  id: string;
  title: string;
  taskIDs: string[];
};

export type Columns = {
  [k in AvailableColumns]: ColumnData;
};

// Actions that are available
export enum TaskListAvailableAction {
  FETCH_TASKS_REQUEST = "FETCH_TASKS_REQUEST",
  FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS",
  FETCH_TASKS_FAILURE = "FETCH_TASKS_FAILURE",

  CREATE_TASK_REQUEST = "CREATE_TASK_REQUEST",
  CREATE_TASK_SUCCESS = "CREATE_TASK_SUCCESS",
  CREATE_TASK_FAILURE = "CREATE_TASK_FAILURE",
}

export type TaskDetails = {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  state: AvailableColumns;
  assignee?: number;
  assignedUserName?: string;
};

export type TaskDetailsPayload = {
  description: string;
};

export type Tasks = {
  [k: string]: TaskDetails;
};

export type ProjectData = {
  id: number;
  description: string;
  task_id: number;
  owner: number;
  createdAt: string;
  User: {
    name: string;
    email: string;
    id: number;
  };
}[];

export interface TaskListState {
  projectData: ProjectData;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

// Create a type to hold list of actions that can be dispatched
export type TaskActions =
  | { type: TaskListAvailableAction.FETCH_TASKS_REQUEST }
  | { type: TaskListAvailableAction.FETCH_TASKS_SUCCESS; payload: ProjectData }
  | { type: TaskListAvailableAction.FETCH_TASKS_FAILURE; payload: string }
  | { type: TaskListAvailableAction.CREATE_TASK_REQUEST }
  | { type: TaskListAvailableAction.CREATE_TASK_SUCCESS }
  | { type: TaskListAvailableAction.CREATE_TASK_FAILURE; payload: string };

// A type to hold dispatch actions in a context.
export type TasksDispatch = React.Dispatch<TaskActions>;
