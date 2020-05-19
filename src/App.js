import React, { Component } from "react";
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    { name:"ともき", age: 17 },
    { name:"rin", age: 17 },
    {  }
  ]

  return (
    <div>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />;
      })}
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age}years old!</div>
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}

User.defaultProps= {
  name: "NoName",
  age: 0
}

export default App;
