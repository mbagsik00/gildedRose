import {
  isItemAgedBrie,
  isItemBackstagePass,
  isItemConjured,
  isItemSulfuras,
  isSpecialItem
} from './helper';

/**
 * Represents an Item.
 * @param {string} name - The name of the item
 * @param {number} sellIn - The number of days to sell the item
 * @param {number} quality - The number of how valuable the item
 */
export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items: Array<Item> = []) {
    this.items = items;
  }

  private degradeNonSpecialItemQuality(item: Item) {
    if (item.sellIn < 0) {
      item.quality -= 2;
    } else {
      item.quality -= 1;
    }

    item.quality = item.quality >= 0 ? item.quality : 0;

    return item;
  }

  updateQuality() {
    this.items.forEach((item) => {
      if (isItemSulfuras(item)) {
        return item;
      }

      if (isItemAgedBrie(item)) {
        if (item.quality < 50) {
          item.quality += 1;
        }
      }

      if (isItemConjured(item)) {
        item.quality -= 2;

        item.quality = item.quality >= 0 ? item.quality : 0;
      }
    
      if (isItemBackstagePass(item)) {
        if (item.sellIn <= 10 && item.sellIn > 5) {
          item.quality += 2;
        } else if (item.sellIn <= 5 && item.sellIn >= 0) {
          item.quality += 3;
        } else if (item.sellIn < 0) {
          item.quality = 0;
        } else {
          item.quality += 1;
        }
      }

      if (!isSpecialItem(item)) {
        item = this.degradeNonSpecialItemQuality(item);
      }

      // day passed
      item.sellIn -= 1;

      return item;
    });

    return this.items;
  }
}
