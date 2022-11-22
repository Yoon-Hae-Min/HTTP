import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './pages/GlobalStyles';
import Main from './pages/Main';
import Providers from './providers';

const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Providers>
    <GlobalStyle />
    <Main />
  </Providers>
);
