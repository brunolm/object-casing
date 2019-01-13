# case-keys

[![Coverage Status](https://coveralls.io/repos/github/brunolm/case-keys/badge.svg?branch=master)](https://coveralls.io/github/brunolm/case-keys?branch=master)

`case-keys` is a package that walks throught an object using a callback function to convert the object key, returning a new object with new keys.

## Install

```bash
npm i -S case-keys
```

## Example

```ts
import camelCase from 'lodash.camelcase'
import snakeCase from 'lodash.snakecase'

import { caseKeys } from 'case-keys'

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
