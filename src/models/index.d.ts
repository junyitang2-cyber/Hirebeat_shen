import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerS3Object = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<S3Object, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly bucket: string;
  readonly region: string;
  readonly key: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyS3Object = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<S3Object, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly bucket: string;
  readonly region: string;
  readonly key: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type S3Object = LazyLoading extends LazyLoadingDisabled ? EagerS3Object : LazyS3Object

export declare const S3Object: (new (init: ModelInit<S3Object>) => S3Object) & {
  copyOf(source: S3Object, mutator: (draft: MutableModel<S3Object>) => MutableModel<S3Object> | void): S3Object;
}

type EagerPicture = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Picture, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPicture = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Picture, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Picture = LazyLoading extends LazyLoadingDisabled ? EagerPicture : LazyPicture

export declare const Picture: (new (init: ModelInit<Picture>) => Picture) & {
  copyOf(source: Picture, mutator: (draft: MutableModel<Picture>) => MutableModel<Picture> | void): Picture;
}

type EagerCandidates = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Candidates, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly currentTitle: string;
  readonly workExp: string;
  readonly Score?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCandidates = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Candidates, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly currentTitle: string;
  readonly workExp: string;
  readonly Score?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Candidates = LazyLoading extends LazyLoadingDisabled ? EagerCandidates : LazyCandidates

export declare const Candidates: (new (init: ModelInit<Candidates>) => Candidates) & {
  copyOf(source: Candidates, mutator: (draft: MutableModel<Candidates>) => MutableModel<Candidates> | void): Candidates;
}