/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateS3Object = /* GraphQL */ `
  subscription OnCreateS3Object($filter: ModelSubscriptionS3ObjectFilterInput) {
    onCreateS3Object(filter: $filter) {
      bucket
      region
      key
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateS3Object = /* GraphQL */ `
  subscription OnUpdateS3Object($filter: ModelSubscriptionS3ObjectFilterInput) {
    onUpdateS3Object(filter: $filter) {
      bucket
      region
      key
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteS3Object = /* GraphQL */ `
  subscription OnDeleteS3Object($filter: ModelSubscriptionS3ObjectFilterInput) {
    onDeleteS3Object(filter: $filter) {
      bucket
      region
      key
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreatePicture = /* GraphQL */ `
  subscription OnCreatePicture($filter: ModelSubscriptionPictureFilterInput) {
    onCreatePicture(filter: $filter) {
      id
      name
      owner
      file {
        bucket
        region
        key
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdatePicture = /* GraphQL */ `
  subscription OnUpdatePicture($filter: ModelSubscriptionPictureFilterInput) {
    onUpdatePicture(filter: $filter) {
      id
      name
      owner
      file {
        bucket
        region
        key
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeletePicture = /* GraphQL */ `
  subscription OnDeletePicture($filter: ModelSubscriptionPictureFilterInput) {
    onDeletePicture(filter: $filter) {
      id
      name
      owner
      file {
        bucket
        region
        key
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateCandidates = /* GraphQL */ `
  subscription OnCreateCandidates(
    $filter: ModelSubscriptionCandidatesFilterInput
  ) {
    onCreateCandidates(filter: $filter) {
      id
      name
      currentTitle
      workExp
      Score
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCandidates = /* GraphQL */ `
  subscription OnUpdateCandidates(
    $filter: ModelSubscriptionCandidatesFilterInput
  ) {
    onUpdateCandidates(filter: $filter) {
      id
      name
      currentTitle
      workExp
      Score
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCandidates = /* GraphQL */ `
  subscription OnDeleteCandidates(
    $filter: ModelSubscriptionCandidatesFilterInput
  ) {
    onDeleteCandidates(filter: $filter) {
      id
      name
      currentTitle
      workExp
      Score
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
