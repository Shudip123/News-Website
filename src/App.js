// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import Info from './component/info';
import {
  BrowserRouter,
 Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {

  state={
    progress :0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  };
 
  render() {
    return (
      
      <div>
         <BrowserRouter>
          <Navbar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />
          
              <Routes>

                <Route exact path="/"element={<Info setProgress={this.setProgress} key="General" pageSize={6} category="General"/>} > </Route> 
                <Route exact path="/Business"element={<Info setProgress={this.setProgress} key="Business" pageSize={6} category="Business"/>}> </Route>
                <Route exact path="/Entertainment"element={<Info setProgress={this.setProgress} key="Entertainment" pageSize={6} category="Entertainment"/>}> </Route>
                <Route exact path="/Health"element={<Info setProgress={this.setProgress} key="Health" pageSize={6} category="Health"/>}> </Route>
                <Route exact path="/Science"element={<Info setProgress={this.setProgress} key="Science" pageSize={6} category="Science"/>}> </Route>
                <Route exact path="/Sports"element={<Info setProgress={this.setProgress} key="Sports" pageSize={6} category="Sports"/>}> </Route>
                <Route exact path="/Technology"element={<Info setProgress={this.setProgress} key="Technology" pageSize={6} category="Technology"/>}> </Route>
                    
              </Routes>

          </BrowserRouter>      
             
        </div>
        
    )
  }
}

