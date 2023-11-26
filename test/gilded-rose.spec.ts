import { GildedRose } from '@/GildedRose'
import { ItemFactory } from '@/ItemFactory'
import { ItemQuality } from '@/ItemQuality'
import { ItemSellIn } from '@/ItemSellIn'

describe('Gilded Rose Should', () => {
	it('Test that sellIn value is decreased', () => {
		const whateverItemFactory = ItemFactory.create('whatever', 10, 0)

		const gildedRose = new GildedRose([whateverItemFactory])
		gildedRose.updateQuality()

		const expectedSellIn = new ItemSellIn(9)
		expect(whateverItemFactory.sellIn()).toEqual(expectedSellIn)
	})

	it('Test that quality value is decreased', () => {
		const whateverItemFactory = ItemFactory.create('whatever', 1, 10)

		const gildedRose = new GildedRose([whateverItemFactory])
		gildedRose.updateQuality()

		const expectedQuality = new ItemQuality(9)
		expect(whateverItemFactory.quality()).toEqual(expectedQuality)
	})

	it('Test that quality decreases twice as much when sellIn by is passed', () => {
		const whateverItemFactory = ItemFactory.create('whatever', 0, 10)

		const gildedRose = new GildedRose([whateverItemFactory])
		gildedRose.updateQuality()

		const expectedQuality = new ItemQuality(8)
		expect(whateverItemFactory.quality()).toEqual(expectedQuality)
	})

	it('Test that quality is never negative', () => {
		const whateverItemFactory = ItemFactory.create('whatever', 0, 0)

		const gildedRose = new GildedRose([whateverItemFactory])
		gildedRose.updateQuality()

		const expectedQuality = new ItemQuality(0)
		expect(whateverItemFactory.quality()).toEqual(expectedQuality)
	})

	it('Test Aged Brie increases quality with age', () => {
		const agedBrie = ItemFactory.create('Aged Brie', 5, 1)

		const gildedRose = new GildedRose([agedBrie])
		gildedRose.updateQuality()

		const expectedQuality = new ItemQuality(2)
		expect(agedBrie.quality()).toEqual(expectedQuality)
	})

	it('Test Aged Brie increases quality past fifty', () => {
		const agedBrie = ItemFactory.create('Aged Brie', 5, 50)

		const gildedRose = new GildedRose([agedBrie])
		gildedRose.updateQuality()

		const expectedQuality = new ItemQuality(50)
		expect(agedBrie.quality()).toEqual(expectedQuality)
	})

	it('Test Sulfuras never changes', () => {
		const sulfuras = ItemFactory.create('Sulfuras, Hand of Ragnaros', 0, 25)

		const gildedRose = new GildedRose([sulfuras])
		gildedRose.updateQuality()

		const expectedQuality = new ItemQuality(25)
		expect(sulfuras.quality()).toEqual(expectedQuality)

		const expectedSellIn = new ItemSellIn(0)
		expect(sulfuras.sellIn()).toEqual(expectedSellIn)
	})

	it('Test Backstage pass increases quality by one if sell by greater than 10', () => {
		const backstagePasses = ItemFactory.create(
			'Backstage passes to a TAFKAL80ETC concert',
			11,
			20
		)

		const gildedRose = new GildedRose([backstagePasses])
		gildedRose.updateQuality()

		const expectedQuality = new ItemQuality(21)
		expect(backstagePasses.quality()).toEqual(expectedQuality)
	})

	it('Test Backstage pass increases quality by two if sell by smaller than 5', () => {
		const backstagePasses = ItemFactory.create(
			'Backstage passes to a TAFKAL80ETC concert',
			5,
			20
		)

		const gildedRose = new GildedRose([backstagePasses])
		gildedRose.updateQuality()

		const expectedQuality = new ItemQuality(23)
		expect(backstagePasses.quality()).toEqual(expectedQuality)
	})

	it('Test Backstage pass loses value after sell by passes', () => {
		const backstagePasses = ItemFactory.create(
			'Backstage passes to a TAFKAL80ETC concert',
			0,
			20
		)

		const gildedRose = new GildedRose([backstagePasses])
		gildedRose.updateQuality()

		const expectedQuality = new ItemQuality(0)
		expect(backstagePasses.quality()).toEqual(expectedQuality)
	})
})
