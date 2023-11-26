export class ItemName {
	private static AGED_BRIE = 'Aged Brie'
	private static BACKSTAGE_PASSES = 'Backstage passes to a TAFKAL80ETC concert'
	private static SULFURAS = 'Sulfuras, Hand of Ragnaros'

	private value: string

	constructor (value: string) {
		this.value = value
	}

	isAgeBrie (): boolean {
		return this.value === ItemName.AGED_BRIE
	}

	isBackstagePasses (): boolean {
		return this.value === ItemName.BACKSTAGE_PASSES
	}

	isSulfuras (): boolean {
		return this.value === ItemName.SULFURAS
	}
}
