// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Levels, Navigation, PageHeading } = initSchema(schema);

export {
  Levels,
  Navigation,
  PageHeading
};