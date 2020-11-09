import chunk from './methods/chunk'
import compact from './methods/compact'

class LodashClone {
  chunk = chunk
  compact = compact
}

export const _ = new LodashClone()