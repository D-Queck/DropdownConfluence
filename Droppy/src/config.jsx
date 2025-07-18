import React from 'react';
import ForgeReconciler, { Label, TextArea, Checkbox } from '@forge/react';

const ConfigScreen = () => (
  <>
    <Label labelFor="options">
      Options (one per line, optional | colour)
    </Label>
    <TextArea
      id="options"
      name="options"
      defaultValue="Red | #ff5630\nBlue | #0052cc"
      isRequired
    />
    <Checkbox name="isMulti" label="Allow multiple selections" />
  </>
);

ForgeReconciler.addConfig(<ConfigScreen />);
