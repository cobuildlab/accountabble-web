import React from 'react';
import Select from 'react-select';

const options = [
  { value: '25$', label: '25$' },
  { value: '50$', label: '50$' },
  { value: '100$', label: '100$' },
  { value: '200$', label: '200$' },
];

const BetSelect = ({ onChange, selected = null }) => {
  const handleChange = (selectedOption) => {
    onChange(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };
  return <Select value={selected} onChange={handleChange} options={options} />;
};

export { BetSelect };
