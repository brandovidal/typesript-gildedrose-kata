import { Item } from './item'

export class GildedRose {
	items: Array<Item>

	private static AGED_BRIE = 'Aged Brie'
	private static BACKSTAGE_PASSES = 'Backstage passes to a TAFKAL80ETC concert'
	private static SULFURAS = 'Sulfuras, Hand of Ragnaros'

	private static MAX_QUALITY = 50
	private static MIN_QUALITY = 0

	private static AGED_BRIE_DOUBLE_QUALITY_INCREASE_SELL_IN_THRESHOLD = 0

	private static BACKSTAGE_PASSES_DOUBLE_QUALITY_INCREASE_SELL_IN_THRESHOLD = 10
	private static BACKSTAGE_PASSES_TRIPLE_QUALITY_INCREASE_SELL_IN_THRESHOLD = 5
	private static BACKSTAGE_PASSES_RESET_QUALITY_INCREASE_SELL_IN_THRESHOLD = 0

	private static DEFAULT_ITEM_DOUBLE_QUALITY_DECREASE_SELL_INTHRESHOLD = 0

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

	updateAgedBrieQuality (item: Item) {
		this.increaseQuality(item)

		if (
			item.sellIn <
			GildedRose.AGED_BRIE_DOUBLE_QUALITY_INCREASE_SELL_IN_THRESHOLD
		) {
			this.increaseQuality(item)
		}
	}

	updateBackstagePassesQuality (item: Item) {
		this.increaseQuality(item)

		if (
			item.sellIn <
			GildedRose.BACKSTAGE_PASSES_DOUBLE_QUALITY_INCREASE_SELL_IN_THRESHOLD
		) {
			this.increaseQuality(item)
		}
		if (
			item.sellIn <
			GildedRose.BACKSTAGE_PASSES_TRIPLE_QUALITY_INCREASE_SELL_IN_THRESHOLD
		) {
			this.increaseQuality(item)
		}
		if (
			item.sellIn <
			GildedRose.BACKSTAGE_PASSES_RESET_QUALITY_INCREASE_SELL_IN_THRESHOLD
		) {
			this.resetQuality(item)
		}
	}

	updateDefaultItemQuality (item: Item) {
		this.decreaseQuality(item)

		if (
			item.sellIn <
			GildedRose.DEFAULT_ITEM_DOUBLE_QUALITY_DECREASE_SELL_INTHRESHOLD
		) {
			this.decreaseQuality(item)
		}
	}

	updateQuality () {
		for (const item of this.items) {
			switch (item.name) {
				case GildedRose.AGED_BRIE:
					this.decreaseSellIn(item)
					this.updateAgedBrieQuality(item)
					break

				case GildedRose.BACKSTAGE_PASSES:
					this.decreaseSellIn(item)
					this.updateBackstagePassesQuality(item)
					break

				case GildedRose.SULFURAS:
					break

				default:
					this.decreaseSellIn(item)
					this.updateDefaultItemQuality(item)
					break
			}
		}

		return this.items
	}
}
