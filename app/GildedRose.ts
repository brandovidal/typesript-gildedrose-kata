import { ItemBase } from './ItemBase'

export class GildedRose {
  items: Array<ItemBase>

  constructor (items = [] as Array<ItemBase>) {
    this.items = items
  }

  updateQuality () {
    for (const item of this.items) {
			item.update()
    }

    return this.items
  }
}
