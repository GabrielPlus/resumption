import React from 'react';

const ButtonComponent = ({ handleDownload }) => {
  return (
    <button type="button" onClick={handleDownload}>
      Download/Share
    </button>
  );
};

export default ButtonComponent;
