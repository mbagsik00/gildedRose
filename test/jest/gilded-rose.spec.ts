import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  
  describe('Special Items', () => {

    describe('Sulfuras, Hand of Ragnaros', () => {
      it('should not degrade quality', () => {
        const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 2, 80)]);
        const items = gildedRose.updateQuality();

        expect(items[0].quality).toEqual(80);
      });
      it('should never be sold', () => {
        const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 2, 80)]);
        const items = gildedRose.updateQuality();

        expect(items[0].sellIn).toEqual(2);
      });
    });

    describe('Aged Brie', () => {
      it('should increase quality every day passed', () => {
        const gildedRose = new GildedRose([new Item('Aged Brie', 2, 10)]);
        const items = gildedRose.updateQuality();

        expect(items[0].sellIn).toEqual(1);
        expect(items[0].quality).toEqual(11);
      });
      it('should not have quality greater than 50', () => {
        const gildedRose = new GildedRose([new Item('Aged Brie', 2, 50)]);
        const items = gildedRose.updateQuality();

        expect(items[0].sellIn).toEqual(1);
        expect(items[0].quality).toEqual(50);
      });
    });

    describe('Backstage passes to a TAFKAL80ETC concert', () => {
      it('should increase quality every day passed', () => {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 15, 10)]);
        const items = gildedRose.updateQuality();

        expect(items[0].sellIn).toEqual(14);
        expect(items[0].quality).toEqual(11);
      });
      it('should increase quality by 2 if there are 10 days or less', () => {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 9, 10)]);
        const items = gildedRose.updateQuality();

        expect(items[0].sellIn).toEqual(8);
        expect(items[0].quality).toEqual(12);
      });
      it('should increase quality by 3 if there are 5 days or less', () => {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 3, 10)]);
        const items = gildedRose.updateQuality();

        expect(items[0].sellIn).toEqual(2);
        expect(items[0].quality).toEqual(13);
      });
      it('should set quality to 0 after it passed the sellIn date', () => {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', -1, 10)]);
        const items = gildedRose.updateQuality();

        expect(items[0].sellIn).toEqual(-2);
        expect(items[0].quality).toEqual(0);
      });
    });

    describe('Conjured Mana Cake', () => {
      it('should degrade quality twice as normal every day passed', () => {
        const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 3, 10)]);
        const items = gildedRose.updateQuality();

        expect(items[0].sellIn).toEqual(2);
        expect(items[0].quality).toEqual(8);
      });
    });
  });

  describe('Non-Special Item', () => {
    it('should degrade quality every day passed', () => {
      const gildedRose = new GildedRose([new Item('Sword', 3, 10)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toEqual(9);
    });
    it('should lower sellIn every day passed', () => {
      const gildedRose = new GildedRose([new Item('Sword', 3, 10)]);
      const items = gildedRose.updateQuality();

      expect(items[0].sellIn).toEqual(2);
    });
    it('should not have a negative quality', () => {
      const gildedRose = new GildedRose([new Item('Sword', 3, 0)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toEqual(0);
    });
  });
});
