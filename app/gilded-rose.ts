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

  updateQuality () {
    for (const item of this.items) {
      if (item.name == GildedRose.SULFURAS) {
        continue
      }

      if (
        item.name != GildedRose.AGED_BRIE &&
        item.name != GildedRose.BACKSTAGE_PASSES
      ) {
        if (item.name != GildedRose.SULFURAS) {
          this.decreaseQuality(item)
        }
      } else {
        this.increaseQuality(item)

        if (item.name == GildedRose.BACKSTAGE_PASSES) {
          if (item.sellIn < 11) {
            this.increaseQuality(item)
          }
          if (item.sellIn < 6) {
            this.increaseQuality(item)
          }
        }
      }

      if (item.sellIn < 0) {
        if (item.name != GildedRose.AGED_BRIE) {
          if (item.name != GildedRose.BACKSTAGE_PASSES) {
            if (item.name != GildedRose.SULFURAS) {
              this.decreaseQuality(item)
            }
          } else {
            item.quality = item.quality - item.quality
          }
        } else {
          this.increaseQuality(item)
        }
      }
    }

    return this.items
  }
}
