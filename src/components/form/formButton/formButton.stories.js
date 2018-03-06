import React from 'react';
import { storiesOf } from '@storybook/react';
import FormButton from './index';

storiesOf('FormButton', module)
  .add('primary', () => (
    <FormButton>Botão Primário</FormButton>
  ))
  .add('secundary', () => (
    <FormButton secondary>Botão Secundário</FormButton>
  ));   