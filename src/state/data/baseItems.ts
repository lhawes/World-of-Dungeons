import { 
  Handed, 
  Item, 
  ItemClassificationType, 
  ItemTemplateConfig,
  ArmorWeight
} from '../models/Item';

const rawData: ItemTemplateConfig[] = [
  {
    armor: null,
    cost: 10, 
    damage: {
      bonus: 0, 
      dice: 1, 
      hands: Handed.off,
    },
    description: 'May be weilded as an off handed weapon to re-roll damage once per attack.',
    maxUses: null, 
    name: 'Dagger, short sword, or hand axe',
    packable: true, 
    type: ItemClassificationType.lightWeapon,
  },
  {
    name: 'Long sword, hammers, axes, or spears',
    cost: 30,
    packable: true, 
    damage: {
      dice: 1, 
      bonus: 1, 
      hands: Handed.main,
    }, 
    description: 'Must be weilded in main hand.',
    type: ItemClassificationType.martialWeapon,
    maxUses: null, 
    armor: null,
  },
  {
    name: 'Two handed swords, battle-axes, or pole-arms',
    cost: 40,
    packable: true, 
    damage: {
      dice: 1, 
      bonus: 2, 
      hands: Handed.two,
    }, 
    description: 'Must be weilded in main hand.',
    type: ItemClassificationType.greatWeapon,
    maxUses: null, 
    armor: null,
  },
  {
    name: 'Shortbow',
    cost: 10,
    packable: true, 
    damage: {
      dice: 1, 
      bonus: 0, 
      hands: Handed.two,
    }, 
    description: 'Also slings etc.',
    type: ItemClassificationType.shortbow,
    maxUses: null, 
    armor: null,
  },
  {
    name: 'Bow',
    cost: 30,
    packable: true, 
    damage: {
      dice: 1, 
      bonus: 1, 
      hands: Handed.two,
    }, 
    description: 'Also crossbows, pistols, etc.',
    type: ItemClassificationType.bow,
    maxUses: null, 
    armor: null,
  },
  {
    name: 'Heavy Bow/Gun',
    cost: 50,
    packable: true, 
    damage: {
      dice: 1, 
      bonus: 2, 
      hands: Handed.two,
    }, 
    description: 'Damage if firing from a stationary position. Includes arbalests and musckets.',
    type: ItemClassificationType.heavyBow,
    maxUses: null, 
    armor: null,
  },
  {
    name: 'Light Armor',
    cost: 30,
    packable: true, 
    damage: null, 
    description: 'Light Armor',
    type: ItemClassificationType.lightArmor,
    maxUses: null, 
    armor: {
      base: 1,
      bonus: 0,
      class: ArmorWeight.light,
    },
  },
  {
    name: 'Full Armor',
    cost: 60,
    packable: true, 
    damage: null, 
    description: 'Always includes a helm. Makes it very hard to run, move quietly, swim, leap etc.',
    type: ItemClassificationType.lightArmor,
    maxUses: null, 
    armor: {
      base: 2,
      bonus: 0,
      class: ArmorWeight.full,
    },
  },
  {
    name: 'Shield',
    cost: 10,
    packable: true, 
    damage: null, 
    description: '',
    type: ItemClassificationType.shield,
    maxUses: null, 
    armor: {
      base: 0,
      bonus: 1,
      class: ArmorWeight.none,
    },
  },
  {
    name: 'Adventuring Gear',
    cost: 2,
    packable: true, 
    damage: null, 
    description: '20ft Rops. Iron Spike, Chalk, Parchment, Flint/Steel, Torches x4, Tent, Dice, Caltrops (slows pursuers), Bandages, Travel Rations, Waterskin, Wineskin.',
    type: ItemClassificationType.advGear,
    maxUses: null, 
    armor: null,
  },
  {
    name: 'Tools',
    cost: 5,
    packable: true, 
    damage: null, 
    description: 'Crowbar, Hatchet, Animal Trap, Lockpicks, Pen & Pot of Ink, Fishing Pole, Shovel, Grappling Hook, Pickaxe, Collapsible Pole.',
    type: ItemClassificationType.tools,
    maxUses: null, 
    armor: null,
  },
  {
    name: 'Occult Items',
    cost: 10,
    packable: true, 
    damage: null, 
    description: 'Quicksilver (per dose), Pouch of Bone Dust, Vial of Holy Water (one use), Vial of Blood, Ritual Incense and Oils.',
    type: ItemClassificationType.occultItems,
    maxUses: null, 
    armor: null,
  },
  {
    name: 'Fancy Items',
    cost: 20,
    packable: true, 
    damage: null, 
    description: 'Mirror, Lantern, Spyglass, Sand Timer, Board Game, Elaborate Clothes, Holy Symbols and other charms.',
    type: ItemClassificationType.fancyItems,
    maxUses: null, 
    armor: null,
  },
  {
    name: 'Fire Oil',
    cost: 20,
    packable: true, 
    damage: null, 
    description: 'Sets an area on fire (1d6 + 1 damage/round for 3 rounds unless extinguished). Fills a lantern 10 times.',
    type: ItemClassificationType.oil,
    maxUses: null, 
    armor: null,
  },
  {
    name: 'Boats',
    cost: null,
    packable: false, 
    damage: null, 
    description: 'Row boat (50s) to Galley (200,000s).',
    type: ItemClassificationType.boats,
    maxUses: null, 
    armor: null,
  },
  {
    name: 'Carts',
    cost: null,
    packable: false, 
    damage: null, 
    description: 'Cart (30s) to Wagon (100s).',
    type: ItemClassificationType.carts,
    maxUses: null, 
    armor: null,
  },
  {
    name: 'Property',
    cost: null,
    packable: false, 
    damage: null, 
    description: 'House (1,000s) to Manor (100,000s).',
    type: ItemClassificationType.property,
    maxUses: null, 
    armor: null,
  },
  {
    name: 'Horses',
    cost: null,
    packable: false, 
    damage: null, 
    description: 'Mule (30s), Horse (100s), Warhorse (1000s).',
    type: ItemClassificationType.horses,
    maxUses: null, 
    armor: null,
  }
];

export const baseItems: Item[] = rawData.map((item: ItemTemplateConfig) => Item.createItemTemplate(item));