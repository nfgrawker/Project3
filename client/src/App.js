import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import AdminPage from './components/pages/admin-page'




const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
{/*         
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/raffles/new" component={Profile} /> */}
          <Route path="/admin" component={AdminPage} />

        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

