import { ItemName } from "./ItemName"
import { ItemQuality } from "./ItemQuality"
import { ItemSellIn } from "./ItemSellIn"

export abstract class ItemBase {
  private itemName: ItemName
  private itemSellIn: ItemSellIn
  private itemQuality: ItemQuality

  constructor(name: ItemName, sellIn: ItemSellIn, quality: ItemQuality) {
    this.itemName = name
    this.itemSellIn = sellIn
    this.itemQuality = quality
  }

	abstract update(): void

	sellIn () {
		return this.itemSellIn
	}

	quality () {
		return this.itemQuality
	}

	decreaseSellIn (): void {
		this.itemSellIn.decrease()
	}

	hasToBeSoldInLessThan (days: number) {
		return this.itemSellIn.isLessThan(days)
	}

	increaseQuality (): void {
		this.itemQuality.increase()
	}

	decreaseQuality (): void {
		this.itemQuality.decrease()
	}

	resetQuality (): void {
		this.itemQuality.reset()
	}
}
