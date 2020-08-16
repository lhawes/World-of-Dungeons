import { Character, CharacterConfigType, Attribute, CharacterClassType } from '../models/Character'
import { ItemClassificationType, Handed, ArmorWeight } from '../models/Item';


export const rawCharacterData: CharacterConfigType = {
  attributes: {
    [Attribute.STR]: 1,
    [Attribute.DEX]: 1,
    [Attribute.CON]: 2,
    [Attribute.INT]: 0,
    [Attribute.WIS]: 1,
    [Attribute.CHA]: 2,
  },
  name: 'Harud',
  notes: 'Harud left his family farm after it was pillaged and burnt to the ground by a roving band of Orken.',
  class: CharacterClassType.fighter,
  coin: 11,
  rawEquipment: [{
    name: 'Family Long Sword',
    cost: 30,
    packable: true, 
    damage: {
      dice: 1, 
      bonus: 1, 
      hands: Handed.main,
    }, 
    description: 'Passed down by his Uncle.',
    type: ItemClassificationType.martialWeapon,
    maxUses: null, 
    armor: null,
  },{
    name: 'Leather Armor',
    cost: 24,
    packable: true, 
    damage: null, 
    description: 'Light Armor, worn with battle.',
    type: ItemClassificationType.lightArmor,
    maxUses: null, 
    armor: {
      base: 1,
      bonus: 0,
      class: ArmorWeight.light,
    },
  },],
  rawHirelings: [],
  level: 1,
  maxHitPoints: 8,
  currentHitPoints: 8,
  skills: {
    athletics: true,
    awareness: true,
    deception: false,
    decipher: false,
    heal: false,
    leadership: false,
    lore: false,
    stealth: false,
    survival: false,
  },
  specialAbilities: {
    bless: false,
    cure: false,
    turn: false,
    vision: false,
    hardy: false,
    skirmish: true,
    slay: true,
    tough: false,
    backstab: false,
    lucky: false,
    reflexes: false,
    tinker: false,
    cantrips: false,
    command: false,
    ritual: false,
    summon: false,
    pet: false,
    scout: false,
    volley: false,
    wild: false,
  },
  xp: 0,
}

export const baseCharacter = Character.createCharacter(rawCharacterData);