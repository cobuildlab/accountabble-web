import React from 'react';
import Select from 'react-select';

const options = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6', label: '6' },
  { value: '7', label: '7' },
  { value: '8', label: '8' },
  { value: '9', label: '9' },
  { value: '10', label: '10' },
  { value: '11', label: '11' },
  { value: '12', label: '12' },
];

const HourSelect = ({ onChange, selected = null }) => {
  const handleChange = (selectedOption) => {
    onChange(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };
  return <Select value={selected} onChange={handleChange} options={options} />;
};

export { HourSelect };
