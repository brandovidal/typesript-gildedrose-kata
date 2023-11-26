import { GildedRose } from '@/gilded-rose'
import { Item } from '@/item'

describe('Gilded Rose Should', () => {
	it('Test that sellIn value is decreased', () => {
		const whateverItem = new Item('whatever', 10, 0)

		const gildedRose = new GildedRose([whateverItem])
		gildedRose.updateQuality()

		expect(whateverItem.sellIn).toEqual(9)
	})

	it('Test that quality value is decreased', () => {
		const whateverItem = new Item('whatever', 1, 10)

		const gildedRose = new GildedRose([whateverItem])
		gildedRose.updateQuality()

		expect(whateverItem.quality).toEqual(9)
	})

	it('Test that quality decreases twice as much when sellIn by is passed', () => {
		const whateverItem = new Item('whatever', 0, 10)

		const gildedRose = new GildedRose([whateverItem])
		gildedRose.updateQuality()

		expect(whateverItem.quality).toEqual(8)
	})

	it('Test that quality is never negative', () => {
		const whateverItem = new Item('whatever', 0, 0)

		const gildedRose = new GildedRose([whateverItem])
		gildedRose.updateQuality()

		expect(whateverItem.quality).toEqual(0)
	})

	it('Test Aged Brie increases quality with age', () => {
		const agedBrie = new Item('Aged Brie', 5, 1)

		const gildedRose = new GildedRose([agedBrie])
		gildedRose.updateQuality()

		expect(agedBrie.quality).toEqual(2)
	})

	it('Test Aged Brie increases quality past fifty', () => {
		const agedBrie = new Item('Aged Brie', 5, 50)

		const gildedRose = new GildedRose([agedBrie])
		gildedRose.updateQuality()

		expect(agedBrie.quality).toEqual(50)
	})

	it('Test Sulfuras never changes', () => {
		const sulfuras = new Item('Sulfuras, Hand of Ragnaros', 0, 25)

		const gildedRose = new GildedRose([sulfuras])
		gildedRose.updateQuality()

		expect(sulfuras.quality).toEqual(25)
		expect(sulfuras.sellIn).toEqual(0)
	})

	it('Test Backstage pass increases quality by one if sell by greater than 10', () => {
		const backstagePasses = new Item(
			'Backstage passes to a TAFKAL80ETC concert',
			11,
			20
		)

		const gildedRose = new GildedRose([backstagePasses])
		gildedRose.updateQuality()

		expect(backstagePasses.quality).toEqual(21)
	})

	it('Test Backstage pass increases quality by two if sell by smaller than 5', () => {
		const backstagePasses = new Item(
			'Backstage passes to a TAFKAL80ETC concert',
			5,
			20
		)

		const gildedRose = new GildedRose([backstagePasses])
		gildedRose.updateQuality()

		expect(backstagePasses.quality).toEqual(23)
	})

	it('Test Backstage pass loses value after sell by passes', () => {
		const backstagePasses = new Item(
			'Backstage passes to a TAFKAL80ETC concert',
			0,
			20
		)

		const gildedRose = new GildedRose([backstagePasses])
		gildedRose.updateQuality()

		expect(backstagePasses.quality).toEqual(0)
	})
})
