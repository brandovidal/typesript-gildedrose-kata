import { Item } from './Item';

import { ItemName } from './ItemName';
import { ItemQuality } from './ItemQuality';
import { ItemSellIn } from './ItemSellIn';

export class BackstagePasses extends Item {
  private static DOUBLE_QUALITY_INCREASE_SELL_IN_THRESHOLD = 10
  private static TRIPLE_QUALITY_INCREASE_SELL_IN_THRESHOLD = 5
  private static RESET_QUALITY_INCREASE_SELL_IN_THRESHOLD = 0

  constructor(name: ItemName, sellIn: ItemSellIn, quality: ItemQuality) {
		super(name, sellIn, quality)
	}

	update (): void {
		this.decreaseSellIn()

		this.increaseQuality()

		if (this.hasToBeSoldInLessThan(BackstagePasses.DOUBLE_QUALITY_INCREASE_SELL_IN_THRESHOLD)) {
			this.increaseQuality()
		}
		if (this.hasToBeSoldInLessThan(BackstagePasses.TRIPLE_QUALITY_INCREASE_SELL_IN_THRESHOLD)) {
			this.increaseQuality()
		}
		if (this.hasToBeSoldInLessThan(BackstagePasses.RESET_QUALITY_INCREASE_SELL_IN_THRESHOLD)) {
			this.resetQuality()
		}
	}
}
