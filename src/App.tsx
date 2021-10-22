import React from 'react';
import './App.css';
import {connect} from "react-redux";
import Afganistan from './components/map_afganistan';

{/*
const App :React.FC = (props:any) => { 
  document.title = "Geo Server"
  return (
    <div className="app">
      <Router>
        <div>
          <Route exact path="/" component={Main_map} />
          <Route exact path="/afganistan" component={Afganistan} />
        </div>
      </Router>
    </div>)};
  */}


function App() {
    document.title = "Geo Server"
  return (
      <div className="app">
        <Afganistan/>
      </div>
  );
}


{/*
const App:React.FC = (props:any) => {
  document.title = "Geo Server"
  return (
    <div id="app">
      <Toolbox/>
      <div id="map">
      {props.layers.map( (l:any) => {
        let mode:string = l.toolChange;
        if (mode === "Afganistan") {
          console.log('new map');
          return (
            <AfganistanMap/>
          )
        }
      else if (mode === "Gismeteo" || 
              mode === "temperature" ||
              mode === "hydro" ||
              mode === "fires" ||
              mode === "sat" ||
              mode === "shp" ||
              mode === "meteored" ||
              mode === "corona" ||
              mode === "radar" ||
              mode === "vybory") {
        console.log('old map');
        return (<LeafletMap/>)
      }})}
        
      </div>
    </div>
);
}
*/}
const mapStateToProps = (state:any) => {
  return {
    layers: state.layers
  };
};

export default connect(mapStateToProps)(App);