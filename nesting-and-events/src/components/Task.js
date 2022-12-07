import React from 'react';
import PropTypes from 'prop-types'

function Task(props) { 
  
  return (
      <div className={"task"+(props.isComplete?" checked":"")} >
        <span>{props.title}</span>
        <span className="status" onClick={() => props.handleClick(props.id)}>{props.isComplete ? "✔️":"🔘"}</span>
      </div>
  );
}

Task.propTypes = {
  handleClick: PropTypes.func,
  title: PropTypes.string,
  isComplete: PropTypes.bool,
  id: PropTypes.string
}

export default Task