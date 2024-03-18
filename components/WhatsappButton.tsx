import React from 'react';

const EmbeddedComponent = () => {
  return (
    <div style={{ position: 'fixed', width: '100%', height: '100vh' }}>
      <iframe src='https://d0154eeced72450e91097b478603b930.elf.site' width='100%' height='100%' frameBorder='0'></iframe>
      <button style={{ position: 'absolute', bottom: '20px', right: '20px', zIndex: '999' }}></button>
    </div>
  );
}

export default EmbeddedComponent;
