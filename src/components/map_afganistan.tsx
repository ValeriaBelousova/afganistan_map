import React from 'react';
import '../App.css';
import {connect} from "react-redux";

//import Toolbox from './Toolbox/Toolbox';
import AfganistanMap from './Toolbox/TEST/Afganistan_Map';
import Toolbox from './Toolbox/TEST/AfganistanToolbox';

const Afganistan:React.FC = (props:any) => {
    return (
    <div className='page_iframe'>
    <Toolbox/>
        <div className="mapAfganistan">
          <AfganistanMap/>
        </div>
    </div>);
  }
  const mapStateToProps = (state:any) => {
    return {
      layers: state.layers
    };
  };
  
  export default connect(mapStateToProps)(Afganistan);