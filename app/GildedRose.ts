import { Item } from './Item'

export class GildedRose {
  items: Array<Item>

  constructor (items = [] as Array<Item>) {
    this.items = items
  }

  updateQuality () {
    for (const item of this.items) {
			item.update()
    }

    return this.items
  }
}
