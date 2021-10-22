import React from 'react';
import { Spinner } from 'react-bootstrap';
//import "../css/GeojsonLayer.css"

export default class SpinnerForLoading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

    console.log('contructor');
  }

  render() {
    console.log('render');
    return (
      <Spinner animation="border" variant="primary" size="sm"/>
    );
  }

  componentDidMount() {
    console.log('did mount');
  }

  componentWillUnmount() {
    console.log('will unmount');

  }
}