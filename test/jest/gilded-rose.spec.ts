import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  // it('should foo', () => {
  //   const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].name).toBe('fixme');
  // });

  describe('Special Items', () => {
    describe('Sulfuras, Hand of Ragnaros', () => {
      // TODO
      it('should not degrade quality', () => {
        // TODO
      });
      it('should never be sold', () => {
        // TODO
      });
    });

    describe('Aged Brie', () => {
      it('should increase quality every day passed', () => {
        // TODO
      });
      it('should have quality greater than 50', () => {
        // TODO
      });
    });

    describe('Backstage passes to a TAFKAL80ETC concert', () => {
      it('should increase quality every day passed', () => {
        // TODO
      });
      it('should increase quality by 2 if there are 10 days or less', () => {
        // TODO
      });
      it('should increase quality by 3 if there are 5 days or less', () => {
        // TODO
      });
      it('should set quality to 0 after it passed the sellIn date', () => {
        // TODO
      });
    });

    describe('Conjured Mana Cake', () => {
      it('should degrade quality twice as normal every day passed', () => {
        // TODO
      });
    });
  });

  describe('Non-Special Item', () => {
    it('should degrade quality every day passed', () => {
      // TODO
    });
    it('should lower sellIn every day passed', () => {
      // TODO
    });
    it('should not have a negative quality', () => {
      // TODO
    });
  });
});
