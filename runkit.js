// import { caseKeys } from 'mirror-keys';
const { caseKeys } = require('case-keys');

const toLower = (value) => value.toLowerCase()

const sourceObj = {
  NAME: 'Some name here',
  SITE: 'http://somewhere',
}

console.log(
  caseKeys(sourceObj, toLower)
)
