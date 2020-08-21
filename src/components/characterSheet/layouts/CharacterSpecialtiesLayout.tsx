/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { whiteScoopBackground } from 'src/sharedStyles/whiteScoopTheme';
import { whiteScoopOffset, grayScoopBackground } from 'src/sharedStyles/grayScoopTheme';
import { Section } from 'src/components/shared/Section/Section';
import * as React from 'react';
import { Block } from 'src/components/shared/Block/Block';
import { Attributes } from '../Attributes/Attributes';
import { CharacterAbilities } from '../CharacterAbilities/CharacterAbilities';
import { CharacterSkills } from '../CharacterSkills/CharacterSkills';

const CharacterAttributesLayout = css({
  gridColumn: 1,
  gridRow: 1,
}, whiteScoopBackground);

const CharacterSkillsLayout = css({
  gridColumn: 3,
  gridRow: 1,
}, whiteScoopBackground);

const CharacterAbilitiesLayout = css({
  gridColumn: 5,
  gridRow: 1,
}, whiteScoopBackground);

const gridLayout = css({
  gridTemplateColumns: `3fr ${whiteScoopOffset} 1fr ${whiteScoopOffset} 2fr`,
  gridTemplateRows: '1fr',
}, grayScoopBackground);

export const CharacterSpecialtiesLayout: React.FC = () => {

  return (
    <Section layout={gridLayout}>
      <Block themedCss={CharacterAttributesLayout}>
        <Attributes/>
      </Block>
      <Block themedCss={CharacterSkillsLayout}>
        <CharacterSkills />
      </Block>
      <Block themedCss={CharacterAbilitiesLayout}>
        <CharacterAbilities />
      </Block>
    </Section>
  );
}