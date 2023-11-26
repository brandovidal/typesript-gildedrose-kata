import { ItemName } from './ItemName'
import { ItemQuality } from './ItemQuality'
import { ItemSellIn } from './ItemSellIn'

import { AgedBrie } from './AgedBrie'
import { BackstagePasses } from './BackstagePasses'
import { DefaultItem } from './DefaultItem'
import { Sulfuras } from './Sulfuras'

export class ItemFactory {
	static create (rawName: string, rawSellIn: number, rawQuality: number) {
		const name = new ItemName(rawName)
		const sellIn = new ItemSellIn(rawSellIn)
		const quality = new ItemQuality(rawQuality)

		if (name.isAgeBrie()) return new AgedBrie(name, sellIn, quality)
		if (name.isBackstagePasses()) return new BackstagePasses(name, sellIn, quality)
		if (name.isSulfuras()) return new Sulfuras(name, sellIn, quality)

		return new DefaultItem(name, sellIn, quality)
	}
}
