import { Item } from './item'

export class GildedRose {
  items: Array<Item>

  private static AGED_BRIE = 'Aged Brie'
  private static BACKSTAGE_PASSES = 'Backstage passes to a TAFKAL80ETC concert'
  private static SULFURAS = 'Sulfuras, Hand of Ragnaros'

  constructor (items = [] as Array<Item>) {
    this.items = items
  }

  decreaseSellIn (item: Item) {
    item.sellIn -= 1
  }

  decreaseQuality (item: Item) {
    item.quality -= 1
  }

  increaseQuality (item: Item) {
    item.quality += 1
  }

  updateQuality () {
    for (let i = 0; i < this.items.length; i++) {
      if (
        this.items[i].name != GildedRose.AGED_BRIE &&
        this.items[i].name != GildedRose.BACKSTAGE_PASSES
      ) {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != GildedRose.SULFURAS) {
            this.decreaseQuality(this.items[i])
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.increaseQuality(this.items[i])

          if (this.items[i].name == GildedRose.BACKSTAGE_PASSES) {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.increaseQuality(this.items[i])
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.increaseQuality(this.items[i])
              }
            }
          }
        }
      }
      if (this.items[i].name != GildedRose.SULFURAS) {
        this.decreaseSellIn(this.items[i])
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != GildedRose.AGED_BRIE) {
          if (this.items[i].name != GildedRose.BACKSTAGE_PASSES) {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != GildedRose.SULFURAS) {
                this.decreaseQuality(this.items[i])
              }
            }
          } else {
            this.items[i].quality =
              this.items[i].quality - this.items[i].quality
          }
        } else {
          if (this.items[i].quality < 50) {
            this.increaseQuality(this.items[i])
          }
        }
      }
    }

    return this.items
  }
}
