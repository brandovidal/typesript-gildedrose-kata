import { Item, GildedRose } from '@/gilded-rose'

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
})
