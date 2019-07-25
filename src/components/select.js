import React from 'react';
import Select from 'react-select';
 
const options = [
  { value: '25$', label: '25$' },
  // { value: '50$', label: '50$' },
  // { value: '100$', label: '100$' },
  // { value: '200$', label: '200$'}
];
const customStyle = {
    width:500
}
 
class SelectForm extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption.value);
  };
  render() {
    const { selectedOption } = this.state;
 
    return (
      <Select
        
        styles={customStyle}
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}

export default SelectForm;
