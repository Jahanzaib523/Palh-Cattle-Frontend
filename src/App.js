/* This is the main app component where all the abstract level components are import and redered
   The base url is also handle in this component and 404 page condition is also check in 
   this component. */

   import React, { useState, useEffect } from 'react';
   import Home from './components/Home/Routes'
   import PageNotFound from './components/404/PageNotFound';
   import Shop from './components/Shop/Index'
   import {routes} from './Routes';
   import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
   import './components/Styles/style.css';
   import './app.scss';

    function App() {
      const [SiteType] = useState("development");
      const [developmentURL] = useState("http://localhost:3000");
      const [productionURL] = useState("http://localhost:5000");
      const [validlink, setValidLink] = useState(false);
      const [show, setShow] = useState(false);
      const [Loader, setLoader] = useState(true);
   
      useEffect(() => {
        setTimeout(() => { setShow(true) }, 1000);
        var link = window.location.href;
        routes.map(route => {
              const CompleteRoute = SiteType === "development" ? developmentURL + route : productionURL + route
              if (link === CompleteRoute) {
                  setValidLink(true);
                  setTimeout(() => { setLoader(false) }, 5000);
              }
              return null;
        })

      }, [validlink, developmentURL, SiteType, productionURL])
       return ( 
            <div>
              <Router>
                  <div> 
                    {
                      validlink ?
                      <div> 
                          {
                            Loader ?
                            <div className="container">
                              <div className="box">
                                <div className="title">
                                  <span className="block"></span>
                                  <h1>Palh<span></span></h1>
                                </div>
                                <div className="role">
                                  <div className="block"></div>
                                  <p>Cattle Farm</p>
                                </div>
                              </div>
                            </div>
                            :
                            <Switch>
                              <Route path ='/shop' component = { () => ( <Shop BaseURL = { SiteType === "development" ? developmentURL : productionURL }/>)}/>
                              <Route path ='/home' component = { () => ( <Home BaseURL = { SiteType === "development" ? developmentURL : productionURL }/>)}/>
                              <Redirect from = '/' to = '/home'/>
                            </Switch>
                          } 
                      </div> : 
                      <div> { show ? < PageNotFound BaseURL = { SiteType === "development" ? developmentURL : productionURL } />: <div/> } </div> 
                    } 
                  </div>
              </Router>
            </div>
          )
    }
export default App