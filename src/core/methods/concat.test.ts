import { concat } from "./concat"

const testArray = [['Typescript'], true, 'Javascript', [false], 'ReactJS', [['Angular'], ['Webpack']], 'Lodash', 0, null]
const testArray2 = [['Typescript'], true, 'Javascript', [false], 'ReactJS', [[['Angular'], ['Webpack']]], 'Lodash', 0, null]

test('Creates a new array concatenating array with any additional arrays and/or values.', () => {
  expect(concat(testArray)).toEqual(['Typescript', true, 'Javascript', false, 'ReactJS', ['Angular'], ['Webpack'], 'Lodash', 0, null])
  expect(concat(testArray2)).toEqual(['Typescript', true, 'Javascript', false, 'ReactJS', [['Angular'], ['Webpack']], 'Lodash', 0, null])
})