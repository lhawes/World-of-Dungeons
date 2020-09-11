import * as React from 'react';
import { CharacterUnequippedEquipmentLayout } from 'src/components/characterSheet/layouts/CharacterUnequippedEquipmentLayout';
import { CharacterEquipmentLayout } from 'src/components/characterSheet/layouts/CharacterEquipmentLayout';
import { BodyContainer } from 'src/components/shared/BodyContainer/BodyContainer';
import { EquipmentManager } from 'src/components/EquipmentManager/EquipmentManager';


export const EquipmentPage = () => {
  return (
    <BodyContainer title='Character Equipment'>
      <CharacterEquipmentLayout />
      <CharacterUnequippedEquipmentLayout />
      <EquipmentManager />
    </BodyContainer>
  );
}