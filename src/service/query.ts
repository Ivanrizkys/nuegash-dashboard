import { graphql } from "@/src/libs/dto/index";

export const GET_OVERVIEW_DATA = graphql(`
  query getOverviewData {
    tasksCollection(orderBy: {id: AscNullsLast}) {
      edges {
        cursor
        node {
          id
          title
          cateogry
          mentors
          image
          progress
          end_at
          task_categories {
            name
          }
        }
      }
    }
    mentorsCollection(orderBy: {id: AscNullsLast}) {
      edges {
        cursor
        node {
          id
          name
          role
          image
          total_task
          rating
          total_review
          is_followed
          description
          created_at
        }
      }
    }
    taskToday: tasksCollection(filter: {id: {eq: "1643fb20-4a4e-497e-9bd6-4dc7515642fd"}}, first: 1) {
      edges {
        cursor
        node {
          id
          title
          cateogry
          mentors
          image
          progress
          end_at
          task_categories {
            name
          }
          assessment
        }
      }
    }
    activity: task_reportsCollection(first: 1, filter: {name: {eq: "Activity"}}) {
      edges {
        node {
          id
          name
          data
        }
      }
    }
    runningTask: task_reportsCollection(first: 1, filter: {name: {eq: "Running Task"}}) {
      edges {
        node {
          id
          name
          data
        }
      }
    }
  }
`)