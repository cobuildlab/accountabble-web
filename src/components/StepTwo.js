import React from "react";
import '../assets/scss/style.scss';
import ButtonStep from './ButtonStep';
//MDB
import { MDBInput, MDBBtn, MDBRow, MDBCol, MDBFormInline } from "mdbreact";

const StepTwo = ({ onClick, onChange = function() {} }) => {
  const [weeks, setWeeks] = React.useState(0);

  /**
   * Changes the value of the input allows to enter only number values.
   */
  const onChangeWeeks = ({ target: { value }}) => {
    const inputArray = value.split('');
    const chars = inputArray.filter(char => char.charCodeAt() >= 48 && char.charCodeAt() <= 57);
    setWeeks(chars.join(''));
  };

  const categories = [
    { name: 'Meditation' },
    { name: 'Sleep Exercise' },
    { name: 'Write/Read' },
    { name: 'Diet/Eat' },
    { name: 'Healthy' }
  ];

  const frequencies = [3, 4, 5];
  return (
    <React.Fragment>
    <h1 className="title text-left text-weight-bold mt-4">Coaching</h1>
      <div>
        <h6 className="title mt-2 mb-3">Category</h6>
        <MDBRow>
          {categories.map((category, index) => (
            <MDBCol md="4" className="col-xs-btn-step-2" key={index}>
              <ButtonStep text={category.name} />
            </MDBCol>
          ))}
        </MDBRow>

        <MDBRow>
        </MDBRow>

        <h6 className="title mt-4 mb-3">Sets frequency a week</h6>
        <MDBRow className="mt-4">
          {frequencies.map((frequency, index) => (
            <MDBCol md="4" className="col-xs-btn-step-2" key={index}>
              <ButtonStep text={frequency} />
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
        <MDBBtn className="btn-step mr-3" onClick={() => onClick('previous')}>Previous</MDBBtn>
        <MDBBtn className="btn-step" onClick={() => onClick('next')}>Next</MDBBtn>
      </div>
    </React.Fragment>
  );
}

export default StepTwo;