/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  query getOverviewData {\n    tasksCollection(orderBy: {id: AscNullsLast}) {\n      edges {\n        cursor\n        node {\n          id\n          title\n          cateogry\n          mentors\n          image\n          progress\n          end_at\n          task_categories {\n            name\n          }\n          image_hash\n          slug\n        }\n      }\n    }\n    mentorsCollection(orderBy: {id: AscNullsLast}) {\n      edges {\n        cursor\n        node {\n          id\n          name\n          role\n          image\n          total_task\n          rating\n          total_review\n          is_followed\n          description\n          created_at\n        }\n      }\n    }\n    taskToday: tasksCollection(filter: {id: {eq: "1643fb20-4a4e-497e-9bd6-4dc7515642fd"}}, first: 1) {\n      edges {\n        cursor\n        node {\n          id\n          title\n          cateogry\n          mentors\n          image\n          progress\n          end_at\n          task_categories {\n            name\n          }\n          assessment\n          image_hash\n          slug\n        }\n      }\n    }\n    activity: task_reportsCollection(first: 1, filter: {name: {eq: "Activity"}}) {\n      edges {\n        node {\n          id\n          name\n          data\n        }\n      }\n    }\n    runningTask: task_reportsCollection(first: 1, filter: {name: {eq: "Running Task"}}) {\n      edges {\n        node {\n          id\n          name\n          data\n        }\n      }\n    }\n    performance: task_reportsCollection(first: 1, filter: {name: {eq: "Performance"}}) {\n      edges {\n        node {\n          id\n          name\n          data\n        }\n      }\n    }\n  }\n':
    types.GetOverviewDataDocument,
  "\n  query getTaskData {\n    theLimit: tasksCollection(orderBy: {progress: DescNullsLast}) {\n      edges {\n        cursor\n        node {\n          id\n          title\n          cateogry\n          mentors\n          image\n          progress\n          end_at\n          task_categories {\n            name\n          }\n          image_hash\n          slug\n        }\n      }\n    }\n    newTask: tasksCollection(orderBy: {id: AscNullsLast}) {\n      edges {\n        cursor\n        node {\n          id\n          title\n          cateogry\n          mentors\n          image\n          progress\n          end_at\n          task_categories {\n            name\n          }\n          image_hash\n          slug\n        }\n      }\n    }\n  }\n":
    types.GetTaskDataDocument,
  "\n  query getMentorsData {\n    recentMentors: mentorsCollection(orderBy: {created_at: DescNullsLast}) {\n      edges {\n        cursor\n        node {\n          id\n          name\n          role\n          image\n          total_task\n          rating\n          total_review\n          is_followed\n          description\n          created_at\n        }\n      }\n    }\n    mentors: mentorsCollection(orderBy: {id: AscNullsLast}) {\n      edges {\n        cursor\n        node {\n          id\n          name\n          role\n          image\n          total_task\n          rating\n          total_review\n          is_followed\n          description\n          created_at\n        }\n      }\n    }\n  }\n":
    types.GetMentorsDataDocument,
  "\n  query getTaskDetail ($slug: String) {\n    taskDetail: tasksCollection(first: 1, filter: {slug: {eq: $slug}}) {\n      edges {\n        cursor\n        node {\n          id\n          title\n          registered_student\n          total_hour\n          description\n          video\n          assessment\n          task_categories {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n":
    types.GetTaskDetailDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query getOverviewData {\n    tasksCollection(orderBy: {id: AscNullsLast}) {\n      edges {\n        cursor\n        node {\n          id\n          title\n          cateogry\n          mentors\n          image\n          progress\n          end_at\n          task_categories {\n            name\n          }\n          image_hash\n          slug\n        }\n      }\n    }\n    mentorsCollection(orderBy: {id: AscNullsLast}) {\n      edges {\n        cursor\n        node {\n          id\n          name\n          role\n          image\n          total_task\n          rating\n          total_review\n          is_followed\n          description\n          created_at\n        }\n      }\n    }\n    taskToday: tasksCollection(filter: {id: {eq: "1643fb20-4a4e-497e-9bd6-4dc7515642fd"}}, first: 1) {\n      edges {\n        cursor\n        node {\n          id\n          title\n          cateogry\n          mentors\n          image\n          progress\n          end_at\n          task_categories {\n            name\n          }\n          assessment\n          image_hash\n          slug\n        }\n      }\n    }\n    activity: task_reportsCollection(first: 1, filter: {name: {eq: "Activity"}}) {\n      edges {\n        node {\n          id\n          name\n          data\n        }\n      }\n    }\n    runningTask: task_reportsCollection(first: 1, filter: {name: {eq: "Running Task"}}) {\n      edges {\n        node {\n          id\n          name\n          data\n        }\n      }\n    }\n    performance: task_reportsCollection(first: 1, filter: {name: {eq: "Performance"}}) {\n      edges {\n        node {\n          id\n          name\n          data\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query getOverviewData {\n    tasksCollection(orderBy: {id: AscNullsLast}) {\n      edges {\n        cursor\n        node {\n          id\n          title\n          cateogry\n          mentors\n          image\n          progress\n          end_at\n          task_categories {\n            name\n          }\n          image_hash\n          slug\n        }\n      }\n    }\n    mentorsCollection(orderBy: {id: AscNullsLast}) {\n      edges {\n        cursor\n        node {\n          id\n          name\n          role\n          image\n          total_task\n          rating\n          total_review\n          is_followed\n          description\n          created_at\n        }\n      }\n    }\n    taskToday: tasksCollection(filter: {id: {eq: "1643fb20-4a4e-497e-9bd6-4dc7515642fd"}}, first: 1) {\n      edges {\n        cursor\n        node {\n          id\n          title\n          cateogry\n          mentors\n          image\n          progress\n          end_at\n          task_categories {\n            name\n          }\n          assessment\n          image_hash\n          slug\n        }\n      }\n    }\n    activity: task_reportsCollection(first: 1, filter: {name: {eq: "Activity"}}) {\n      edges {\n        node {\n          id\n          name\n          data\n        }\n      }\n    }\n    runningTask: task_reportsCollection(first: 1, filter: {name: {eq: "Running Task"}}) {\n      edges {\n        node {\n          id\n          name\n          data\n        }\n      }\n    }\n    performance: task_reportsCollection(first: 1, filter: {name: {eq: "Performance"}}) {\n      edges {\n        node {\n          id\n          name\n          data\n        }\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query getTaskData {\n    theLimit: tasksCollection(orderBy: {progress: DescNullsLast}) {\n      edges {\n        cursor\n        node {\n          id\n          title\n          cateogry\n          mentors\n          image\n          progress\n          end_at\n          task_categories {\n            name\n          }\n          image_hash\n          slug\n        }\n      }\n    }\n    newTask: tasksCollection(orderBy: {id: AscNullsLast}) {\n      edges {\n        cursor\n        node {\n          id\n          title\n          cateogry\n          mentors\n          image\n          progress\n          end_at\n          task_categories {\n            name\n          }\n          image_hash\n          slug\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  query getTaskData {\n    theLimit: tasksCollection(orderBy: {progress: DescNullsLast}) {\n      edges {\n        cursor\n        node {\n          id\n          title\n          cateogry\n          mentors\n          image\n          progress\n          end_at\n          task_categories {\n            name\n          }\n          image_hash\n          slug\n        }\n      }\n    }\n    newTask: tasksCollection(orderBy: {id: AscNullsLast}) {\n      edges {\n        cursor\n        node {\n          id\n          title\n          cateogry\n          mentors\n          image\n          progress\n          end_at\n          task_categories {\n            name\n          }\n          image_hash\n          slug\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query getMentorsData {\n    recentMentors: mentorsCollection(orderBy: {created_at: DescNullsLast}) {\n      edges {\n        cursor\n        node {\n          id\n          name\n          role\n          image\n          total_task\n          rating\n          total_review\n          is_followed\n          description\n          created_at\n        }\n      }\n    }\n    mentors: mentorsCollection(orderBy: {id: AscNullsLast}) {\n      edges {\n        cursor\n        node {\n          id\n          name\n          role\n          image\n          total_task\n          rating\n          total_review\n          is_followed\n          description\n          created_at\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  query getMentorsData {\n    recentMentors: mentorsCollection(orderBy: {created_at: DescNullsLast}) {\n      edges {\n        cursor\n        node {\n          id\n          name\n          role\n          image\n          total_task\n          rating\n          total_review\n          is_followed\n          description\n          created_at\n        }\n      }\n    }\n    mentors: mentorsCollection(orderBy: {id: AscNullsLast}) {\n      edges {\n        cursor\n        node {\n          id\n          name\n          role\n          image\n          total_task\n          rating\n          total_review\n          is_followed\n          description\n          created_at\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query getTaskDetail ($slug: String) {\n    taskDetail: tasksCollection(first: 1, filter: {slug: {eq: $slug}}) {\n      edges {\n        cursor\n        node {\n          id\n          title\n          registered_student\n          total_hour\n          description\n          video\n          assessment\n          task_categories {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  query getTaskDetail ($slug: String) {\n    taskDetail: tasksCollection(first: 1, filter: {slug: {eq: $slug}}) {\n      edges {\n        cursor\n        node {\n          id\n          title\n          registered_student\n          total_hour\n          description\n          video\n          assessment\n          task_categories {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
