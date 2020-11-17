import React from 'react';

const TableNoRecord = ({ message = 'No record Found' }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      height: '300px',
      background: '#fff',
    }}
  >
    {message}
  </div>
);

export default TableNoRecord;
