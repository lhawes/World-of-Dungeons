import * as React from 'react';
import { useMemo, useContext } from 'react';
import { StateContext } from 'src/App';
import { getSelectedCharacterClass } from 'src/state/characters/characterSelectors';
import { CharacterStateKey } from 'src/state/characters/characterReducer';

export interface CharacterClassProps {
  [key: string]: any;
}

export const CharacterClass: React.FC<CharacterClassProps> = ({}) => {
  const state = useContext(StateContext);
  const characterClass = useMemo(() => getSelectedCharacterClass(state), [state[CharacterStateKey]]);

  return (<>
    CharacterClass: {characterClass}
  </>);
}