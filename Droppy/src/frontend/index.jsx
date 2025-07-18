import React, { useState } from 'react';
import ForgeReconciler, { Select, Lozenge, useConfig } from '@forge/react';

const parseLines = (raw = '') =>
  raw.split('\n').map(l => l.trim()).filter(Boolean).map(l => {
    const [label, colour] = l.split('|').map(s => s.trim());
    return { label, colour };
  });

const DroppyMacro = () => {
  const { options = '', isMulti = false } = useConfig() ?? {};
  const items = parseLines(options);
  const [value, setValue] = useState(isMulti ? [] : undefined);

  const renderChip = val => {
    const { colour = 'new' } = items.find(i => i.label === val) ?? {};
    return (
      <Lozenge appearance="custom" type={colour} key={val}>
        {val}
      </Lozenge>
    );
  };

  return (
    <>
      <Select
        options={items.map(({ label }) => ({ label, value: label }))}
        value={value}
        onChange={setValue}
        isMulti={isMulti}
        placeholder="Choose"
      />
      {isMulti ? value?.map(renderChip) : value && renderChip(value)}
    </>
  );
};

ForgeReconciler.render(<DroppyMacro />);      // kein render() mehr
