import React from "react";
import ButtonStep from './ButtonStep';
import '../assets/scss/style.scss';
//MDB
import { MDBBtn, MDBRow, MDBCol, MDBFormInline } from "mdbreact";

const StepTwo = ({ onClick, onChange = function() {}, value }) => {
  const [frequency, setFrequency] = React.useState(value.frequency);
  const [categories, setCategory] = React.useState(value.categories);
  const [weeks, setWeeks] = React.useState(value.weeks);

  /**
   * Changes the value of the input allows to enter only number values.
   * @param {event}
   */
  const onChangeWeeks = ({ target: { value }}) => {
    const inputArray = value.split('');
    const chars = inputArray.filter(char => char.charCodeAt() >= 48 && char.charCodeAt() <= 57);
    setWeeks(chars.join(''));
    onChange({
      category: categories.find((category) => category.selected).name,
      frequency,
      weeks: chars.join(''),
      categories: [...categories]
    });
  };

  /**
   * Set the category selected of the stepper.
   * @param {number} categoryIndex
   */
  const onSelectCategory = (categoryIndex) => {
    const categorySelected = categories.map((category, index) => {
      if(categoryIndex === index) return {...category, selected: true };
      return {...category, selected: false };
    });
    onChange({ 
      category: categorySelected.find((category) => category.selected).name, 
      frequency: frequency, 
      categories: categorySelected,
      weeks });
    setCategory(categorySelected);
  };

  /**
   * Set the frequency of the Stepper.
   * @param {number} frequency 
   */
  const onSetFrequency = (frequency) => {
    onChange({ 
      category: categories.find((category) => category.selected).name, 
      frequency: frequency, 
      categories: [...categories], 
      weeks });
    setFrequency(frequency);
  };

  const frequencies = [3, 4, 5];
  return (
    <React.Fragment>
    <h1 className="title text-left text-weight-bold mt-4">Coaching</h1>
      <div>
        <h6 className="title mt-2 mb-3">Category</h6>
        <MDBRow>
          {categories.map((category, index) => (
            <MDBCol md="4" className="col-xs-btn-step-2" key={index}>
              <ButtonStep 
                text={category.name} 
                active={category.selected} 
                onClick={() => onSelectCategory(index)}
              />
            </MDBCol>
          ))}
        </MDBRow>

        <MDBRow>
        </MDBRow>

        <h6 className="title mt-4 mb-3">Sets frequency a week</h6>
        <MDBRow className="mt-4">
          {frequencies.map((freq, index) => (
            <MDBCol md="4" className="col-xs-btn-step-2" key={index}>
              <ButtonStep 
                text={freq} 
                onClick={() => onSetFrequency(freq)} 
                active={freq === frequency}
                />
            </MDBCol>
          ))}
        </MDBRow>

      </div>
      <h6 className="title mt-4 mb-3">
        Weeks
      </h6>
      <MDBFormInline className="md-form ">
        <input 
          className="form-control input-bg-blue-step" 
          type="text" 
          placeholder="Weeks" 
          aria-label="Weeks"
          value={weeks} 
          onChange={onChangeWeeks}
          />
      </MDBFormInline>
      <div className="text-right">
        <MDBBtn className="btn-step mr-3" onClick={() => onClick('previous')}>
          Previous
        </MDBBtn>
        <MDBBtn className="btn-step" onClick={() => onClick('next')}>
          Next
        </MDBBtn>
      </div>
    </React.Fragment>
  );
}

export default StepTwo;