import React from 'react';
import ReactDom from 'react-dom';
//import renderRoutes from './routes/renderRoutes';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import routes from './routes/routes';

function App() {
  return (
    <BrowserRouter>
      <Switch>{renderRoutes(routes)}</Switch>
    </BrowserRouter>
  );
  // return <Button type="primary">Primary</Button>;
}
ReactDom.render(<App />, document.getElementById('root'));
//document.body.appendChild(createElement());
