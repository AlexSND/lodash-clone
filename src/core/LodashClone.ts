import { chunk } from './methods/chunk'

class LodashClone {
  chunk = chunk
}

export const _ = new LodashClone()