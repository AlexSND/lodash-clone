import { chunk } from './methods/chunk'
import { compact } from './methods/compact'
import { concat } from './methods/concat'

class LodashClone {
  chunk = chunk
  compact = compact
  concat = concat
}

export const _ = new LodashClone()