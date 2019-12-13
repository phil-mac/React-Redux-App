import React from 'react';
import ApiApp from './components';

import {Container} from '@material-ui/core';

function App() {
  return (
    <Container maxWidth='sm' style={{marginTop: '100px'}}>
      <ApiApp />
    </Container>
  );
}

export default App;
