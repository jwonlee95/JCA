import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from 'config/routes';
import theme from 'config/theme';
import { ThemeProvider } from '@mui/material/styles';

export interface IApplicationProps {}

const App: React.FunctionComponent<IApplicationProps> = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
