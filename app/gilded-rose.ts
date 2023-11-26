import { Item } from './item'

export class GildedRose {
  items: Array<Item>

  private static AGED_BRIE = 'Aged Brie'
  private static BACKSTAGE_PASSES = 'Backstage passes to a TAFKAL80ETC concert'
  private static SULFURAS = 'Sulfuras, Hand of Ragnaros'

  private static MAX_QUALITY = 50
  private static MIN_QUALITY = 0

  constructor (items = [] as Array<Item>) {
    this.items = items
  }

  decreaseSellIn (item: Item) {
    item.sellIn -= 1
  }

  increaseQuality (item: Item) {
    if (item.quality < GildedRose.MAX_QUALITY) {
      item.quality += 1
    }
  }

  decreaseQuality (item: Item) {
    if (item.quality > GildedRose.MIN_QUALITY) {
      item.quality -= 1
    }
  }

  resetQuality (item: Item) {
    item.quality = 0
  }

  updateQuality () {
    for (const item of this.items) {
      if (item.name == GildedRose.SULFURAS) {
        continue
      }

      this.decreaseSellIn(item)

      if (item.name == GildedRose.AGED_BRIE) {
        this.increaseQuality(item)

        if (item.sellIn < 0) {
          this.increaseQuality(item)
        }
      } else if (item.name == GildedRose.BACKSTAGE_PASSES) {
        this.increaseQuality(item)

        if (item.sellIn < 10) {
          this.increaseQuality(item)
        }
        if (item.sellIn < 5) {
          this.increaseQuality(item)
        }
        if (item.sellIn < 0) {
          this.resetQuality(item)
        }
      } else {
        this.decreaseQuality(item)

        if (item.sellIn < 0) {
          this.decreaseQuality(item)
        }
      }
    }

    return this.items
  }
}
