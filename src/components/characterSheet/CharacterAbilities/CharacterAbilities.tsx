/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { StateContext } from 'src/App';
import { CharacterStateKey } from 'src/state/characters/characterReducer';
import { useContext, useMemo } from 'react';
import { getSelectedCharacterAbilities } from 'src/state/characters/characterSelectors';
import { ClericAbilities, FighterAbilities, ThiefAbilities, WizardAbilities, RangerAbilities, Abilities } from 'src/state/models/Character';
import { SubLayout } from 'src/components/shared/SubLayout/SubLayout';

export interface AbilitiesProps {
  [key: string]: any;
}

const allClassAbilites = [
  ClericAbilities,
  FighterAbilities,
  ThiefAbilities,
  WizardAbilities,
  RangerAbilities,
];

interface ClassAbility {
  name: Abilities,
  active: boolean,
}

interface ClassAbilityBlockProps {
  abilityList: ClassAbility[]
}

const ClassAbilityItem = css({
  display: 'inline-div',
  margin: '0 2rem',
  color: '#c8c8c8',
})

const activeClassAbilityItem = css({
  color: 'black',
});

const classAbilityContainer = css({
  ':not(:last-child)': {
    borderBottom: '1px solid black',
  }
})

const gridLayout = css({
  gridTemplateColumns: `1fr`,
  gridTemplateRows: '1fr 1fr 1fr 1fr 1fr',
});

const ClassAbilityBlock: React.FC<ClassAbilityBlockProps> = ({ abilityList }) => {
  return (
    <div css={classAbilityContainer}>
      { 
        abilityList.map((ability) => {
          const activeStyle = ability.active ? activeClassAbilityItem : {};
          return (<div key={ability.name} css={[ClassAbilityItem, activeStyle]}>{ ability.name }</div>);
        }) 
      }
    </div>
  )
}

export const CharacterAbilities: React.FC<AbilitiesProps> = ({}) => {
  const state = useContext(StateContext);
  const specialAbilities = useMemo(() => getSelectedCharacterAbilities(state), [state[CharacterStateKey]]);

  return (
    <SubLayout layout={gridLayout}>
      <div>Special Abilities:</div>
        {
          specialAbilities ? 
          allClassAbilites.map((classAbilities, i) => {
            const formattedAbilities = Object.keys(classAbilities).reduce((acc: ClassAbility[], abilityKey: Abilities) => {
              acc.push({ name: abilityKey, active: specialAbilities[abilityKey]});
              return acc;
            }, []);
            
            return (
              <ClassAbilityBlock key={i} abilityList={formattedAbilities} />
            );
          })
          : null
        }
    </SubLayout>);
}