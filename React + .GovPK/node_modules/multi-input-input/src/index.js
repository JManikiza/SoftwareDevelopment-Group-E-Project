import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Modifies a component that contains multiple inputs to behave as though it was a single input by:
// - merging values in to an object
// - not calling onBlur when going from field to field within the same component
// - not calling onFocus when going frmo field to field within the same component
export default (ComposedComponent) => {
  class MultiInputInput extends Component {
    mergeValueFromEvent = (e, key) => ({
      ...this.props.value,
      [key]: e.target.value,
    })

    handleChange = (e, key) => {
      this.props.onChange(this.mergeValueFromEvent(e, key));
    }

    handleBlur = (e, key) => {
      if (!Object.values(this.inputs).some(input => e.relatedTarget === input)) {
        this.props.onBlur(this.mergeValueFromEvent(e, key));
      }
    }

    handleFocus = (e, key) => {
      if (!Object.values(this.inputs).some(input => e.relatedTarget === input)) {
        this.props.onFocus(this.mergeValueFromEvent(e, key));
      }
    }

    render() {
      return (<ComposedComponent
        refs={(inputs) => { this.inputs = inputs; }}
        {...this.props}
        {...this.state}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}
      />);
    }
  }

  MultiInputInput.propTypes = {
    value: PropTypes.object,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
  };

  MultiInputInput.defaultProps = {
    value: {},
    onChange: () => null,
    onBlur: () => null,
    onFocus: () => null,
  };


  return MultiInputInput;
};
