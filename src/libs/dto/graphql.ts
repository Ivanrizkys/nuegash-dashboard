/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A high precision floating point value represented as a string */
  BigFloat: { input: any; output: any; }
  /** An arbitrary size integer represented as a string */
  BigInt: { input: any; output: any; }
  /** An opaque string using for tracking a position in results during pagination */
  Cursor: { input: any; output: any; }
  /** A date wihout time information */
  Date: { input: any; output: any; }
  /** A date and time */
  Datetime: { input: any; output: any; }
  /** A Javascript Object Notation value serialized as a string */
  JSON: { input: any; output: any; }
  /** Any type not handled by the type system */
  Opaque: { input: any; output: any; }
  /** A time without date information */
  Time: { input: any; output: any; }
  /** A universally unique identifier */
  UUID: { input: any; output: any; }
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars['BigFloat']['input']>;
  gt?: InputMaybe<Scalars['BigFloat']['input']>;
  gte?: InputMaybe<Scalars['BigFloat']['input']>;
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigFloat']['input']>;
  lte?: InputMaybe<Scalars['BigFloat']['input']>;
  neq?: InputMaybe<Scalars['BigFloat']['input']>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  neq?: InputMaybe<Scalars['BigInt']['input']>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  neq?: InputMaybe<Scalars['Date']['input']>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']['input']>;
  gt?: InputMaybe<Scalars['Datetime']['input']>;
  gte?: InputMaybe<Scalars['Datetime']['input']>;
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']['input']>;
  lte?: InputMaybe<Scalars['Datetime']['input']>;
  neq?: InputMaybe<Scalars['Datetime']['input']>;
};

export enum FilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']['input']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the `mentors` collection */
  deleteFrommentorsCollection: MentorsDeleteResponse;
  /** Deletes zero or more records from the `task_categories` collection */
  deleteFromtask_categoriesCollection: Task_CategoriesDeleteResponse;
  /** Deletes zero or more records from the `task_reports` collection */
  deleteFromtask_reportsCollection: Task_ReportsDeleteResponse;
  /** Deletes zero or more records from the `tasks` collection */
  deleteFromtasksCollection: TasksDeleteResponse;
  /** Adds one or more `mentors` records to the collection */
  insertIntomentorsCollection?: Maybe<MentorsInsertResponse>;
  /** Adds one or more `task_categories` records to the collection */
  insertIntotask_categoriesCollection?: Maybe<Task_CategoriesInsertResponse>;
  /** Adds one or more `task_reports` records to the collection */
  insertIntotask_reportsCollection?: Maybe<Task_ReportsInsertResponse>;
  /** Adds one or more `tasks` records to the collection */
  insertIntotasksCollection?: Maybe<TasksInsertResponse>;
  /** Updates zero or more records in the `mentors` collection */
  updatementorsCollection: MentorsUpdateResponse;
  /** Updates zero or more records in the `task_categories` collection */
  updatetask_categoriesCollection: Task_CategoriesUpdateResponse;
  /** Updates zero or more records in the `task_reports` collection */
  updatetask_reportsCollection: Task_ReportsUpdateResponse;
  /** Updates zero or more records in the `tasks` collection */
  updatetasksCollection: TasksUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrommentorsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<MentorsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromtask_CategoriesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Task_CategoriesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromtask_ReportsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Task_ReportsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromtasksCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<TasksFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntomentorsCollectionArgs = {
  objects: Array<MentorsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntotask_CategoriesCollectionArgs = {
  objects: Array<Task_CategoriesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntotask_ReportsCollectionArgs = {
  objects: Array<Task_ReportsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntotasksCollectionArgs = {
  objects: Array<TasksInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdatementorsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<MentorsFilter>;
  set: MentorsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatetask_CategoriesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Task_CategoriesFilter>;
  set: Task_CategoriesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatetask_ReportsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Task_ReportsFilter>;
  set: Task_ReportsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatetasksCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<TasksFilter>;
  set: TasksUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID']['output'];
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars['Opaque']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `mentors` */
  mentorsCollection?: Maybe<MentorsConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `task_categories` */
  task_categoriesCollection?: Maybe<Task_CategoriesConnection>;
  /** A pagable collection of type `task_reports` */
  task_reportsCollection?: Maybe<Task_ReportsConnection>;
  /** A pagable collection of type `tasks` */
  tasksCollection?: Maybe<TasksConnection>;
};


/** The root type for querying data */
export type QueryMentorsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<MentorsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MentorsOrderBy>>;
};


/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root type for querying data */
export type QueryTask_CategoriesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Task_CategoriesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Task_CategoriesOrderBy>>;
};


/** The root type for querying data */
export type QueryTask_ReportsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Task_ReportsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Task_ReportsOrderBy>>;
};


/** The root type for querying data */
export type QueryTasksCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<TasksFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TasksOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  iregex?: InputMaybe<Scalars['String']['input']>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  neq?: InputMaybe<Scalars['Time']['input']>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
};

export type Mentors = Node & {
  __typename?: 'mentors';
  created_at?: Maybe<Scalars['Datetime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  is_followed?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  rating?: Maybe<Scalars['BigFloat']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  total_review?: Maybe<Scalars['Int']['output']>;
  total_task?: Maybe<Scalars['Int']['output']>;
};

export type MentorsConnection = {
  __typename?: 'mentorsConnection';
  edges: Array<MentorsEdge>;
  pageInfo: PageInfo;
};

export type MentorsDeleteResponse = {
  __typename?: 'mentorsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Mentors>;
};

export type MentorsEdge = {
  __typename?: 'mentorsEdge';
  cursor: Scalars['String']['output'];
  node: Mentors;
};

export type MentorsFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  image?: InputMaybe<StringFilter>;
  is_followed?: InputMaybe<BooleanFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  rating?: InputMaybe<BigFloatFilter>;
  role?: InputMaybe<StringFilter>;
  total_review?: InputMaybe<IntFilter>;
  total_task?: InputMaybe<IntFilter>;
};

export type MentorsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  is_followed?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['BigFloat']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  total_review?: InputMaybe<Scalars['Int']['input']>;
  total_task?: InputMaybe<Scalars['Int']['input']>;
};

export type MentorsInsertResponse = {
  __typename?: 'mentorsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Mentors>;
};

export type MentorsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  image?: InputMaybe<OrderByDirection>;
  is_followed?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  rating?: InputMaybe<OrderByDirection>;
  role?: InputMaybe<OrderByDirection>;
  total_review?: InputMaybe<OrderByDirection>;
  total_task?: InputMaybe<OrderByDirection>;
};

export type MentorsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  is_followed?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['BigFloat']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  total_review?: InputMaybe<Scalars['Int']['input']>;
  total_task?: InputMaybe<Scalars['Int']['input']>;
};

export type MentorsUpdateResponse = {
  __typename?: 'mentorsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Mentors>;
};

export type Task_Categories = Node & {
  __typename?: 'task_categories';
  created_at?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['UUID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  tasksCollection?: Maybe<TasksConnection>;
};


export type Task_CategoriesTasksCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<TasksFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TasksOrderBy>>;
};

export type Task_CategoriesConnection = {
  __typename?: 'task_categoriesConnection';
  edges: Array<Task_CategoriesEdge>;
  pageInfo: PageInfo;
};

export type Task_CategoriesDeleteResponse = {
  __typename?: 'task_categoriesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Task_Categories>;
};

export type Task_CategoriesEdge = {
  __typename?: 'task_categoriesEdge';
  cursor: Scalars['String']['output'];
  node: Task_Categories;
};

export type Task_CategoriesFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
};

export type Task_CategoriesInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Task_CategoriesInsertResponse = {
  __typename?: 'task_categoriesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Task_Categories>;
};

export type Task_CategoriesOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
};

export type Task_CategoriesUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Task_CategoriesUpdateResponse = {
  __typename?: 'task_categoriesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Task_Categories>;
};

export type Task_Reports = Node & {
  __typename?: 'task_reports';
  created_at: Scalars['Datetime']['output'];
  data?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['UUID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
};

export type Task_ReportsConnection = {
  __typename?: 'task_reportsConnection';
  edges: Array<Task_ReportsEdge>;
  pageInfo: PageInfo;
};

export type Task_ReportsDeleteResponse = {
  __typename?: 'task_reportsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Task_Reports>;
};

export type Task_ReportsEdge = {
  __typename?: 'task_reportsEdge';
  cursor: Scalars['String']['output'];
  node: Task_Reports;
};

export type Task_ReportsFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
};

export type Task_ReportsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Task_ReportsInsertResponse = {
  __typename?: 'task_reportsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Task_Reports>;
};

export type Task_ReportsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
};

export type Task_ReportsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Task_ReportsUpdateResponse = {
  __typename?: 'task_reportsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Task_Reports>;
};

export type Tasks = Node & {
  __typename?: 'tasks';
  assessment?: Maybe<Scalars['JSON']['output']>;
  cateogry?: Maybe<Scalars['UUID']['output']>;
  created_at?: Maybe<Scalars['Datetime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  end_at?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['UUID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  mentors?: Maybe<Scalars['JSON']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  progress?: Maybe<Scalars['Int']['output']>;
  registered_student?: Maybe<Scalars['Int']['output']>;
  task_categories?: Maybe<Task_Categories>;
  title?: Maybe<Scalars['String']['output']>;
  total_hour?: Maybe<Scalars['Int']['output']>;
  video?: Maybe<Scalars['String']['output']>;
};

export type TasksConnection = {
  __typename?: 'tasksConnection';
  edges: Array<TasksEdge>;
  pageInfo: PageInfo;
};

export type TasksDeleteResponse = {
  __typename?: 'tasksDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Tasks>;
};

export type TasksEdge = {
  __typename?: 'tasksEdge';
  cursor: Scalars['String']['output'];
  node: Tasks;
};

export type TasksFilter = {
  cateogry?: InputMaybe<UuidFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  end_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  image?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  progress?: InputMaybe<IntFilter>;
  registered_student?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
  total_hour?: InputMaybe<IntFilter>;
  video?: InputMaybe<StringFilter>;
};

export type TasksInsertInput = {
  assessment?: InputMaybe<Scalars['JSON']['input']>;
  cateogry?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  end_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  mentors?: InputMaybe<Scalars['JSON']['input']>;
  progress?: InputMaybe<Scalars['Int']['input']>;
  registered_student?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  total_hour?: InputMaybe<Scalars['Int']['input']>;
  video?: InputMaybe<Scalars['String']['input']>;
};

export type TasksInsertResponse = {
  __typename?: 'tasksInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Tasks>;
};

export type TasksOrderBy = {
  cateogry?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  end_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  image?: InputMaybe<OrderByDirection>;
  progress?: InputMaybe<OrderByDirection>;
  registered_student?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
  total_hour?: InputMaybe<OrderByDirection>;
  video?: InputMaybe<OrderByDirection>;
};

export type TasksUpdateInput = {
  assessment?: InputMaybe<Scalars['JSON']['input']>;
  cateogry?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  end_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  mentors?: InputMaybe<Scalars['JSON']['input']>;
  progress?: InputMaybe<Scalars['Int']['input']>;
  registered_student?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  total_hour?: InputMaybe<Scalars['Int']['input']>;
  video?: InputMaybe<Scalars['String']['input']>;
};

export type TasksUpdateResponse = {
  __typename?: 'tasksUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Tasks>;
};

export type GetOverviewDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOverviewDataQuery = { __typename?: 'Query', tasksCollection?: { __typename?: 'tasksConnection', edges: Array<{ __typename?: 'tasksEdge', cursor: string, node: { __typename?: 'tasks', id: any, title?: string | null, cateogry?: any | null, mentors?: any | null, image?: string | null, progress?: number | null, end_at?: any | null, task_categories?: { __typename?: 'task_categories', name?: string | null } | null } }> } | null, mentorsCollection?: { __typename?: 'mentorsConnection', edges: Array<{ __typename?: 'mentorsEdge', cursor: string, node: { __typename?: 'mentors', id: any, name?: string | null, role?: string | null, image?: string | null, total_task?: number | null, rating?: any | null, total_review?: number | null, is_followed?: boolean | null, description?: string | null, created_at?: any | null } }> } | null, taskToday?: { __typename?: 'tasksConnection', edges: Array<{ __typename?: 'tasksEdge', cursor: string, node: { __typename?: 'tasks', id: any, title?: string | null, cateogry?: any | null, mentors?: any | null, image?: string | null, progress?: number | null, end_at?: any | null, assessment?: any | null, task_categories?: { __typename?: 'task_categories', name?: string | null } | null } }> } | null, activity?: { __typename?: 'task_reportsConnection', edges: Array<{ __typename?: 'task_reportsEdge', node: { __typename?: 'task_reports', id: any, name?: string | null, data?: any | null } }> } | null, runningTask?: { __typename?: 'task_reportsConnection', edges: Array<{ __typename?: 'task_reportsEdge', node: { __typename?: 'task_reports', id: any, name?: string | null, data?: any | null } }> } | null };

export type GetTaskDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTaskDataQuery = { __typename?: 'Query', theLimit?: { __typename?: 'tasksConnection', edges: Array<{ __typename?: 'tasksEdge', cursor: string, node: { __typename?: 'tasks', id: any, title?: string | null, cateogry?: any | null, mentors?: any | null, image?: string | null, progress?: number | null, end_at?: any | null, task_categories?: { __typename?: 'task_categories', name?: string | null } | null } }> } | null, newTask?: { __typename?: 'tasksConnection', edges: Array<{ __typename?: 'tasksEdge', cursor: string, node: { __typename?: 'tasks', id: any, title?: string | null, cateogry?: any | null, mentors?: any | null, image?: string | null, progress?: number | null, end_at?: any | null, task_categories?: { __typename?: 'task_categories', name?: string | null } | null } }> } | null };

export type GetMentorsDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMentorsDataQuery = { __typename?: 'Query', recentMentors?: { __typename?: 'mentorsConnection', edges: Array<{ __typename?: 'mentorsEdge', cursor: string, node: { __typename?: 'mentors', id: any, name?: string | null, role?: string | null, image?: string | null, total_task?: number | null, rating?: any | null, total_review?: number | null, is_followed?: boolean | null, description?: string | null, created_at?: any | null } }> } | null, mentors?: { __typename?: 'mentorsConnection', edges: Array<{ __typename?: 'mentorsEdge', cursor: string, node: { __typename?: 'mentors', id: any, name?: string | null, role?: string | null, image?: string | null, total_task?: number | null, rating?: any | null, total_review?: number | null, is_followed?: boolean | null, description?: string | null, created_at?: any | null } }> } | null };


export const GetOverviewDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getOverviewData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tasksCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"EnumValue","value":"AscNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"cateogry"}},{"kind":"Field","name":{"kind":"Name","value":"mentors"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"progress"}},{"kind":"Field","name":{"kind":"Name","value":"end_at"}},{"kind":"Field","name":{"kind":"Name","value":"task_categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"mentorsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"EnumValue","value":"AscNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"total_task"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"total_review"}},{"kind":"Field","name":{"kind":"Name","value":"is_followed"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"taskToday"},"name":{"kind":"Name","value":"tasksCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"StringValue","value":"1643fb20-4a4e-497e-9bd6-4dc7515642fd","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"cateogry"}},{"kind":"Field","name":{"kind":"Name","value":"mentors"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"progress"}},{"kind":"Field","name":{"kind":"Name","value":"end_at"}},{"kind":"Field","name":{"kind":"Name","value":"task_categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assessment"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"activity"},"name":{"kind":"Name","value":"task_reportsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"StringValue","value":"Activity","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"runningTask"},"name":{"kind":"Name","value":"task_reportsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"StringValue","value":"Running Task","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetOverviewDataQuery, GetOverviewDataQueryVariables>;
export const GetTaskDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTaskData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"theLimit"},"name":{"kind":"Name","value":"tasksCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"progress"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"cateogry"}},{"kind":"Field","name":{"kind":"Name","value":"mentors"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"progress"}},{"kind":"Field","name":{"kind":"Name","value":"end_at"}},{"kind":"Field","name":{"kind":"Name","value":"task_categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"newTask"},"name":{"kind":"Name","value":"tasksCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"EnumValue","value":"AscNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"cateogry"}},{"kind":"Field","name":{"kind":"Name","value":"mentors"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"progress"}},{"kind":"Field","name":{"kind":"Name","value":"end_at"}},{"kind":"Field","name":{"kind":"Name","value":"task_categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetTaskDataQuery, GetTaskDataQueryVariables>;
export const GetMentorsDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMentorsData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"recentMentors"},"name":{"kind":"Name","value":"mentorsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"total_task"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"total_review"}},{"kind":"Field","name":{"kind":"Name","value":"is_followed"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"mentors"},"name":{"kind":"Name","value":"mentorsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"EnumValue","value":"AscNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"total_task"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"total_review"}},{"kind":"Field","name":{"kind":"Name","value":"is_followed"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetMentorsDataQuery, GetMentorsDataQueryVariables>;