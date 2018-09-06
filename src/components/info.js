import React from 'react';
import {Field, reduxForm, Form} from 'redux-form';
import './info.css';

export class About extends React.Component {
  render() {      
      return (
          
            <div>
              <h1>"Travle with 'Karpul' and help reduce Global Warming"</h1>
              <h2>Search by 'Destination', 'Arrival Time' or 'Miles from destination'</h2>
              <h3>Know your carpool memebers from their profile</h3>      
              <h4>Send a request to the 'Host' to join the 'Karpul'</h4>                
            </div>
      );
  }
}

export default reduxForm({
  form: 'about'  
})(About);