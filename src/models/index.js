// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { S3Object, Picture, Candidates } = initSchema(schema);

export {
  S3Object,
  Picture,
  Candidates
};