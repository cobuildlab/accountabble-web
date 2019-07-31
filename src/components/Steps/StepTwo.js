import React from 'react';
import ButtonStep from './ButtonStep';
import '../../assets/scss/style.scss';
import { MDBBtn, MDBRow, MDBCol, MDBFormInline } from 'mdbreact';
import InputInfomration from '../InputInformation';
import StepTitle from './StepTitle';
import { BetSelect } from '../BetSelect';
import { HourSelect } from '../HourSelect';

const StepTwo = ({ onClick, onChange = () => {}, data }) => {
  const [validation, setValidation] = React.useState(false);

  const onChangeWeeks = ({ target: { value } }) => {
    const inputArray = value.split('');
    const chars = inputArray.filter((char) => char.charCodeAt() >= 48 && char.charCodeAt() <= 57);
    onChange({
      category: data.categories.find((category) => category.selected).name,
      frequency: data.frequency,
      weeks: chars.join(''),
      categories: [...data.categories],
      sleepByWakeUpBy: data.sleepByWakeUpBy,
      bet: data.bet,
      amPm: data.amPm,
    });
    setValidation(value === '0' || value.split('').every((char) => char === '0'));
  };

  /**
   * Set the category selected of the stepper.
   * @param {number} categoryIndex
   */
  const onSelectCategory = (categoryIndex) => {
    const categorySelected = data.categories.map((category, index) => {
      if (categoryIndex === index) return { ...category, selected: true };
      return { ...category, selected: false };
    });
    onChange({
      category: categorySelected.find((category) => category.selected).name,
      frequency: data.frequency,
      categories: categorySelected,
      weeks: data.weeks,
      sleepByWakeUpBy: data.sleepByWakeUpBy,
      bet: data.bet,
      amPm: data.amPm,
    });
  };

  const onSetFrequency = (frequency) => {
    onChange({
      category: data.categories.find((category) => category.selected).name,
      frequency,
      categories: [...data.categories],
      weeks: data.weeks,
      sleepByWakeUpBy: data.sleepByWakeUpBy,
      bet: data.bet,
      amPm: data.amPm,
    });
  };

  const onSetBet = (bet) => {
    onChange({
      category: data.categories.find((category) => category.selected).name,
      frequency: data.frequency,
      categories: [...data.categories],
      weeks: data.weeks,
      sleepByWakeUpBy: data.sleepByWakeUpBy,
      bet,
      amPm: data.amPm,
    });
  };

  const onSetSleepByWakeUpBy = (sleepByWakeUpBy) => {
    onChange({
      category: data.categories.find((category) => category.selected).name,
      frequency: data.frequency,
      categories: [...data.categories],
      weeks: data.weeks,
      bet: data.bet,
      sleepByWakeUpBy,
      amPm: data.amPm,
    });
  };

  const onSetAmPm = (amPm) => {
    onChange({
      category: data.categories.find((category) => category.selected).name,
      frequency: data.frequency,
      categories: [...data.categories],
      weeks: data.weeks,
      bet: data.bet,
      sleepByWakeUpBy: data.sleepByWakeUpBy,
      amPm,
    });
  };

  const frequencies = [2, 3, 4, 5];

  const isSleepBetter = data.category === 'Sleep Better';

  return (
    <div className="animated fadeIn">
      <StepTitle message={'Goal'} />
      {/*<h6 className="title mt-2 mb-3">Category</h6>*/}
      <MDBRow>
        {data.categories.map((category, index) => (
          <MDBCol md="4" className="col-xs-btn-step-2" key={index}>
            <ButtonStep
              text={category.name}
              active={category.selected}
              onClick={() => onSelectCategory(index)}
            />
          </MDBCol>
        ))}
      </MDBRow>
      <h6 className="change-text">
        We are currently in beta. We will be adding more goals and different behaviors as well as
        letting users add multiple goals under the same contract. Hold tight
      </h6>
      <div>
        <h6 className="title">Bet</h6>
        <BetSelect onChange={onSetBet} selected={data.bet} />
        <h6 className={'change-text'}>I will pay this amount if i do not keep my word</h6>
      </div>

      <h6 className="title mt-4 mb-3">Sets frequency a week</h6>
      <MDBRow className="mt-4">
        {frequencies.map((freq, index) => (
          <MDBCol md="3" className="col-xs-btn-step-2" key={index}>
            <ButtonStep
              text={freq}
              onClick={() => onSetFrequency(freq)}
              active={freq === data.frequency}
            />
          </MDBCol>
        ))}
      </MDBRow>
      {/* Sleep By, Wake up By*/}
      {isSleepBetter && (
        <div className="d-flex p-2 flex-row align-items-start">
          <div className="p-4 flex-fill">
            <h6 className="title mt-4 mb-3">Sleep until: / Wake up by:</h6>
            <HourSelect onChange={onSetSleepByWakeUpBy} selected={data.sleepByWakeUpBy} />
          </div>
          <div className="p-4 flex-fill">
            <h6 className="title mt-4 mb-3">AM / PM:</h6>
            <div className="p-2 flex-fill d-flex align-items-center flex-row justify-content-center">
              <ButtonStep text={'AM'} onClick={() => onSetAmPm('AM')} active={'AM' === data.amPm} />
              <ButtonStep text={'PM'} onClick={() => onSetAmPm('PM')} active={'PM' === data.amPm} />
            </div>
          </div>
        </div>
      )}

      <h6 className="title mt-4 mb-3">Weeks</h6>
      <MDBFormInline className="md-form ">
        <input
          className={`form-control ${
            validation ? 'input-bg-blue-step-invalid' : 'input-bg-blue-step'
          }`}
          type="text"
          placeholder="Weeks"
          aria-label="Weeks"
          value={data.weeks}
          onChange={onChangeWeeks}
        />
        {validation && <InputInfomration message={"Weeks can't be zero"} style={{ top: 2 }} />}
      </MDBFormInline>
      <div className="text-right">
        <MDBBtn className="btn-step mr-3" onClick={() => onClick('previous')}>
          Previous
        </MDBBtn>
        <MDBBtn className="btn-step" onClick={!validation ? () => onClick('next') : null}>
          Next
        </MDBBtn>
      </div>
    </div>
  );
};

export default StepTwo;
