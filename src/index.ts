import '~/scss/style.scss'
import { _ } from './core/LodashClone'

const testArray = ['Typescript', true, 'Javascript', false, 'ReactJS', 'Angular', 'Webpack', 'Lodash', 0, null]

console.log(_.chunk(testArray, 2))