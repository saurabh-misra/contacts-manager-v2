import { schema } from 'normalizr';

export const contactSchema = new schema.Entity('contacts');
export const contactListSchema = new schema.Array(contactSchema);