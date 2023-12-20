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
          image_hash
          slug
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
          image_hash
          slug
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
    performance: task_reportsCollection(first: 1, filter: {name: {eq: "Performance"}}) {
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

export const GET_TASK_DATA = graphql(`
  query getTaskData {
    theLimit: tasksCollection(orderBy: {progress: DescNullsLast}) {
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
          image_hash
          slug
        }
      }
    }
    newTask: tasksCollection(orderBy: {id: AscNullsLast}) {
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
          image_hash
          slug
        }
      }
    }
  }
`)

export const GET_MENTORS_DATA = graphql(`
  query getMentorsData {
    recentMentors: mentorsCollection(orderBy: {created_at: DescNullsLast}) {
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
    mentors: mentorsCollection(orderBy: {id: AscNullsLast}) {
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
  }
`)

export const GET_TASK_DETAIL = graphql(`
  query getTaskDetail ($slug: String) {
    taskDetail: tasksCollection(first: 1, filter: {slug: {eq: $slug}}) {
      edges {
        cursor
        node {
          id
          title
          registered_student
          total_hour
          description
          video
          assessment
          task_categories {
            id
            name
          }
        }
      }
    }
  }
`)