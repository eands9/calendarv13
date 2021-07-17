/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCalEvent = /* GraphQL */ `
  subscription OnCreateCalEvent($owner: String!) {
    onCreateCalEvent(owner: $owner) {
      id
      name
      details
      start
      end
      time_of_day
      color
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateCalEvent = /* GraphQL */ `
  subscription OnUpdateCalEvent($owner: String!) {
    onUpdateCalEvent(owner: $owner) {
      id
      name
      details
      start
      end
      time_of_day
      color
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteCalEvent = /* GraphQL */ `
  subscription OnDeleteCalEvent($owner: String!) {
    onDeleteCalEvent(owner: $owner) {
      id
      name
      details
      start
      end
      time_of_day
      color
      createdAt
      updatedAt
      owner
    }
  }
`;
