import React, { Component } from 'react';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form/immutable';
import { red, white } from 'styles/colors';

import DateInput from 'components/DateInput';

const Wrapper = styled.form`
  margin: 10px;
  display: flex;
  flex-direction: row;
`;

const FilterActiveFlag = styled.div`
  margin-left: auto;
  line-height: 40px;
  background-color: ${red};
  color: ${white};
  padding: 0 10px;
  border-radius: 2px;
`;

class DateFilterForm extends Component {
  initialState = {}
  ComponentDidMount() {
    this.initialState = props;
  }

  render() {
    return (
      <Wrapper>
        <Field name="startTime" component={DateInput} type="date" />
        <Field name="endTime" component={DateInput} type="date" />

        <FilterActiveFlag>Remove Filter X</FilterActiveFlag>
      </Wrapper>
    );
  }
}

export default reduxForm({
  form: 'dateFilter',
})(DateFilterForm);
