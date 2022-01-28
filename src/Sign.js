import React from 'react';

export default function Sign(props) {
  return (
    <div className='sign'>
      { props.isOpen ? 'OPEN' : 'CLOSED' }
      {/* <div>
        { props.isOpen && 'this shows only if props.isOpen is truthy'}
        { props.isOpen || 'this shows only if props.isOpen is falsey'}
      </div> */}
    </div>
  );
}