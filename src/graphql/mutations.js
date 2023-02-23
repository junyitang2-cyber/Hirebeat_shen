/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processOrder = /* GraphQL */ `
  mutation ProcessOrder($input: ProcessOrderInput!) {
    processOrder(input: $input)
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      userId
      userName
      email
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      userId
      userName
      email
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      userId
      userName
      email
      createdAt
      updatedAt
    }
  }
`;
export const createPlans = /* GraphQL */ `
  mutation CreatePlans(
    $input: CreatePlansInput!
    $condition: ModelPlansConditionInput
  ) {
    createPlans(input: $input, condition: $condition) {
      planId
      orderId
      planName
      price
      createdAt
      updatedAt
      customer
    }
  }
`;
export const updatePlans = /* GraphQL */ `
  mutation UpdatePlans(
    $input: UpdatePlansInput!
    $condition: ModelPlansConditionInput
  ) {
    updatePlans(input: $input, condition: $condition) {
      planId
      orderId
      planName
      price
      createdAt
      updatedAt
      customer
    }
  }
`;
export const deletePlans = /* GraphQL */ `
  mutation DeletePlans(
    $input: DeletePlansInput!
    $condition: ModelPlansConditionInput
  ) {
    deletePlans(input: $input, condition: $condition) {
      planId
      orderId
      planName
      price
      createdAt
      updatedAt
      customer
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      orderId
      userId
      date
      total
      planId
      createdAt
      updatedAt
      customer
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      orderId
      userId
      date
      total
      planId
      createdAt
      updatedAt
      customer
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      orderId
      userId
      date
      total
      planId
      createdAt
      updatedAt
      customer
    }
  }
`;
