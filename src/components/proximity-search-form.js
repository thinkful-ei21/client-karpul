import React from 'react';
import {Field, reduxForm, focus, Form} from 'redux-form';
import Input from './input';
import {required, nonEmpty} from '../validators';
import { fetchNearbyCarpools } from '../actions/carpools';

export class ProximitySearchForm extends React.Component {
  onSubmit(values) {
    return this.props.dispatch(fetchNearbyCarpools(values));
  }

  render() {
    let error;

    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      )
    }

    return (
      <Form
        className="proximity-search-form"
        aria-live="polite"
        aria-atomic="true"
        role="complementary"
        onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values)
        )}>

        {error}
        <label htmlFor="proximitySearch">Find Karpüls</label>
          <Field
              component={Input}
              type="text"
              name="proximitySearch"
              id="proximitySearch"
              validate={[required, nonEmpty]}
          />
        <button type="submit" className="proximity-search-button" disabled={this.props.pristine || this.props.submitting}>
          Search
        </button>
      </Form>
    )
  }
}

export default reduxForm({
  form: 'proximitySearch',
  obSubmitFail: (errors, dispatch) => dispatch(focus('proximitySearch', 'proximitySearch'))
})(ProximitySearchForm);