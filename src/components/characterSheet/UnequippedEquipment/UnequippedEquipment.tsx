import * as React from 'react';
import { useContext, useMemo } from 'react';
import { StateContext } from 'src/App';
import { getSelectedCharacterUnequippedEquipment } from 'src/state/characters/characterSelectors';
import { CharacterStateKey } from 'src/state/characters/characterReducer';
import { normalizeData } from 'src/utils/normalizeData';
import { ItemInstance } from 'src/state/models/Item';

export interface UnequippedEquipmentProps {
  [key: string]: any;
}

export const UnequippedEquipment = ({}: UnequippedEquipmentProps) => {
  const state = useContext(StateContext);
  const unequippedEquipment = useMemo(() => getSelectedCharacterUnequippedEquipment(state), [state[CharacterStateKey]]);
  const unequippedEquipmentNames = unequippedEquipment.map((item: ItemInstance) => {
    return { name: item.name };
  })

  return (<div>
    UnequippedEquipment: { normalizeData(unequippedEquipmentNames) }
  </div>);
}