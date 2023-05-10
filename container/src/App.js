import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import MarketingAppComponent from './components/MarketingApp'

export default () => {
    console.log("Container running");
    return (
    <div>
      <MarketingAppComponent/>
    </div>
    );  
}

