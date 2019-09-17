import React, { Component } from 'react';

import Form from '../../shared/Form/Form';
import Label from '../../shared/Label/Label';
import Input from '../../shared/Input/Input';
import Button from '../../shared/Button/Button';

const labelStyles = `
  margin-bottom: 16px;
`;

export default class BudgetForm extends Component {
  state = { budget: 0 };

  handleChange = e => {
    this.setState({
      budget: Number(e.target.value),
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSave(this.state.budget);

    this.setState({ budget: 0 });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter your total budget
          <Input
            type="number"
            value={this.state.budget}
            onChange={this.handleChange}
          />
        </Label>

        <Button label="Save" type="submit" />
      </Form>
    );
  }
}
