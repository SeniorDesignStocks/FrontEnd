import React, { Component } from 'react';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form/immutable';
import { red, white } from 'styles/colors';

import DateInput from 'components/DateInput';
import SVG from 'components/SVG';

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
  display: flex;
  flex-direction: row;
`;

class DateFilterForm extends Component {
  initialState = {}
  ComponentDidMount() {
    this.initialState = this.props;
  }

  render() {
    return (
      <Wrapper>
        <Field name="startTime" component={DateInput} type="date" />
        <Field name="endTime" component={DateInput} type="date" />

        <FilterActiveFlag>
          Remove Filter
          <SVG type="cross" size="small" style={{ margin: '0 0 3px 5px' }} />
        </FilterActiveFlag>
      </Wrapper>
    );
  }
}

export default reduxForm({
  form: 'dateFilter',
})(DateFilterForm);
