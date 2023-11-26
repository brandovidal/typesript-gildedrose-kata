import { Item } from './Item';

import { ItemName } from './ItemName';
import { ItemQuality } from './ItemQuality';
import { ItemSellIn } from './ItemSellIn';

export class DefaultItem extends Item {
  private static DOUBLE_QUALITY_INCREASE_SELL_IN_THRESHOLD = 0

  constructor(name: ItemName, sellIn: ItemSellIn, quality: ItemQuality) {
		super(name, sellIn, quality)
	}

	update (): void {
		this.decreaseSellIn()

		this.decreaseQuality()

		if (this.hasToBeSoldInLessThan(DefaultItem.DOUBLE_QUALITY_INCREASE_SELL_IN_THRESHOLD)) {
			this.decreaseQuality()
		}
	}
}
