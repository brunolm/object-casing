import { caseKeys } from './'

describe('caseKeys', () => {
  it('converts keys in an object to target casing using a callback', () => {
    const input = {
      CREATEDAT: 'CREATEDAT',
      UPDATEDAT: 'UPDATEDAT',
      USERITEMS: [
        {
          CREATEDAT: 'CREATEDAT',
          UPDATEDAT: 'UPDATEDAT',
        },
      ],
    }

    const expected = {
      createdat: 'CREATEDAT',
      updatedat: 'UPDATEDAT',
      useritems: [
        {
          createdat: 'CREATEDAT',
          updatedat: 'UPDATEDAT',
        },
      ],
    }

    expect(caseKeys(input, (value) => value.toLowerCase())).toEqual(expected)
  })
})
