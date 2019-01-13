# object-casing

[![npm version](https://badge.fury.io/js/object-casing.svg)](https://badge.fury.io/js/object-casing)
[![Coverage Status](https://coveralls.io/repos/github/brunolm/object-casing/badge.svg?branch=master)](https://coveralls.io/github/brunolm/object-casing?branch=master)

`object-casing` is a package that walks throught an object using a callback function to convert the object key, returning a new object with new keys.

## Install

```bash
npm i -S object-casing
```

## Example

```ts
import camelCase from 'lodash.camelcase'
import snakeCase from 'lodash.snakecase'

import { caseKeys } from 'object-casing'

const dbData = {
  id: 1,
  first_name: 'some name',
  last_name: 'last',
  created_at: new Date(),
}

const obj = caseKeys(dbData, camelCase)
/*
obj = {
  id: 1,
  firstName: 'some name',
  lastName: 'last',
  createdAt: new Date(),
}
*/

const objToDb = caseKeys(obj, snakeCase)
/*
objToDb = {
  id: 1,
  first_name: 'some name',
  last_name: 'last',
  created_at: new Date(),
}
*/
```
