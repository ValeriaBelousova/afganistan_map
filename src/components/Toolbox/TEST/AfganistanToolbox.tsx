import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import { connect } from "react-redux";
import '../Toolbox.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Afganistan_Timeline from "../TEST/Afganistan_Timeline";

const Toolbox:React.FC = (props:any) => {
    const [checked, setChecked] = useState(props.layers[1].downloadChecked);

    return (
        <div className='toolbox'>
            <Afganistan_Timeline/>    
        </div>
    );
}
const mapStateToProps = (state:any) => {
    return {
        layers: state.layers
    };
};

export default connect(mapStateToProps)(Toolbox);
