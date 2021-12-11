import { Item } from './gilded-rose';

export const isItemSulfuras = (item: Item) => item.name === 'Sulfuras, Hand of Ragnaros';
export const isItemAgedBrie = (item: Item) => item.name === 'Aged Brie';
export const isItemBackstagePass = (item: Item) => item.name === 'Backstage passes to a TAFKAL80ETC concert';
export const isItemConjured = (item: Item) => item.name === 'Conjured Mana Cake';

export const isSpecialItem = (item: Item) => isItemBackstagePass(item) || isItemSulfuras(item) || isItemAgedBrie(item) || isItemConjured(item);
