import { ItemBase } from "./ItemBase";

import { ItemName } from "./ItemName";
import { ItemQuality } from "./ItemQuality";
import { ItemSellIn } from "./ItemSellIn";

export class Sulfuras extends ItemBase {
  constructor(name: ItemName, sellIn: ItemSellIn, quality: ItemQuality) {
		super(name, sellIn, quality)
	}

	update (): void {
		console.log('Sulfuras, Hand of Ragnaros')
	}
}
