import * as React from 'react';
import { StateContext } from 'src/App';
import { useContext, useMemo } from 'react';
import { getSelectedCharacterName } from 'src/state/characters/characterSelectors';
import { CharacterStateKey } from 'src/state/characters/characterReducer';


export interface CharacterNameProps {
  [key: string]: any;
}

export const CharacterName: React.FC<CharacterNameProps> = ({}) => {
  const state = useContext(StateContext);
  const characterName = useMemo(() => getSelectedCharacterName(state), [state[CharacterStateKey]])

  return (
    <>
      <div>
        Character Name:
      </div>
      <div>
        {characterName}
      </div>
      </>
  );
}