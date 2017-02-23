import { OpaqueToken } from '@angular/core';

export const lookupListToken = new OpaqueToken('lookupListToken');

export const lookupLists = {
  types: [
      {
          single: 'Cat',
          plural: 'Cats'
          },
      {
      single: 'Dog',
      plural: 'Dogs'
    }]

};