import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchGreeting } from '../store';

const Greeting = props => {
  useEffect(() => {
    props.dispatch(fetchGreeting());
  }, []);

  return (
    <div>
      <h1>{props.greeting}</h1>
    </div>
  );
};

const mapStateToProps = state => ({
  greeting: state.greeting,
});

export default connect(mapStateToProps)(Greeting);
