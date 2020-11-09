import compact from './compact'

const testArray = ['Typescript', true, 'Javascript', false, 'ReactJS', NaN, 'Angular', 'Webpack', 'Lodash', 0, null]

test('Creates an array with all falsey values removed', () => {
  expect(compact(testArray)).toEqual(['Typescript', true, 'Javascript', 'ReactJS', 'Angular', 'Webpack', 'Lodash'])
})