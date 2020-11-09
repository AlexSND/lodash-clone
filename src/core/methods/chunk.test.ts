import { chunk } from './chunk'

const testArray = ['Typescript', true, 'Javascript', false, 'ReactJS', 'Angular', 'Webpack', 'Lodash', 0, null]

test('To be equal array of elements split into groups the length of size', () => {
  expect(chunk(testArray, 3)).toEqual([['Typescript', true, 'Javascript'], [false, 'ReactJS', 'Angular'], ['Webpack', 'Lodash', 0], [null]])
  expect(chunk(testArray, 2)).toEqual([['Typescript', true], ['Javascript', false], ['ReactJS', 'Angular'], ['Webpack', 'Lodash'], [0, null]])
  expect(chunk(testArray, 6)).toEqual([['Typescript', true, 'Javascript', false, 'ReactJS', 'Angular'], ['Webpack', 'Lodash', 0, null]])
  expect(chunk(testArray, 0)).toEqual([])
})