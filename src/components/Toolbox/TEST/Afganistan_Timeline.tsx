import React, {useState} from 'react';
import {Button, Accordion, Card, Form} from 'react-bootstrap';
import {actionTool} from '../Tools/toolAction/actionTool';
import SpinnerForLoading from '../../additional/Spinner/SpinnerForLoading';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { actionStatus_Date } from './actionTest/actionStatus_Date';
import { actionZoom } from "../Cards/Radar/radarActions/changeZoom";
import { actionCenter } from "../Cards/Radar/radarActions/changeCenter";
import { Afganistan_Timeline_P } from "./Afganistan_timeline_p";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Timeline.css';

const Afganistan_Timeline: React.FC = (props: any) => {

    const click_li = (e:any) => {
        console.log('e.target.id', e.target.id)
        console.log('props before', props.layers[2])
        if (e.target.id == 'july_2021') {
            props.setZoom(7);
            props.setCenter([35.874495, 68.928351]);
        }
        else if (e.target.id == 'september_2021') {
            props.setZoom(8);
            props.setCenter([34.994495, 68.928351]);
        }
        else if (e.target.id == 'june_2021') {
            props.setZoom(6.5);
            props.setCenter([34.674495, 68.928351]);
        }
        else if (e.target.id == 'august_2021') {
            props.setZoom(6.5);
            props.setCenter([34.674495, 68.928351]);
        }
        else if (e.target.id == '1_may_2021' || e.target.id == 'neutral') {
            props.setCenter([34.008630, 66.000947]);
            props.setZoom(6);
        }
        props.setStatus_Date(e.target.id);
        console.log('props after', props.layers[2])
    }
     return (
         <div className='tools'>
                 <Card.Body>
                     <div className="container mt-0 mb-0">
                            <div className="row">
                                <div className="col-md-0 offset-md-0">
                                    <h4 onClick={click_li} id="neutral">Война в Афганистане</h4>
                                    <ul className="timeline">
                                        <li onClick={click_li} id="1_may_2021">
                                            <h5 onClick={click_li} id="1_may_2021">1 мая 2021</h5>
                                            {props.layers[2].status_date === "1_may_2021" ? (<Afganistan_Timeline_P status={"1_may_2021"}/>) : null}
                                        </li>
                                        <li onClick={click_li} id="june_2021">
                                            <h5 onClick={click_li} id="june_2021">Июнь 2021</h5>
                                            {props.layers[2].status_date === "june_2021" ? (<Afganistan_Timeline_P status={"june_2021"}/>) : null}
                                        </li>
                                        <li onClick={click_li} id="july_2021">
                                        <h5 onClick={click_li} id="july_2021">Июль 2021</h5>
                                        {props.layers[2].status_date === "july_2021" ? (<Afganistan_Timeline_P status={"july_2021"}/>) : null}
                                        </li>
                                        <li onClick={click_li} id="august_2021">
                                            <h5 onClick={click_li} id="august_2021">Август 2021</h5>
                                            {props.layers[2].status_date === "august_2021" ? (<Afganistan_Timeline_P status={"august_2021"}/>) : null}
                                        </li>
                                        <li onClick={click_li} id="september_2021">
                                            <h5 onClick={click_li} id="september_2021">5 сентября 2021</h5>
                                            {props.layers[2].status_date === "september_2021" ? (<Afganistan_Timeline_P status={"september_2021"}/>) : null}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                 </Card.Body>
         </div>
     );
 }
 const mapStateToProps = (state:any) => {
     return {
       layers: state.layers
     }; 
   };
 const matchDispatchToProps = (dispatch:any) => {
    return bindActionCreators({
        setTool: actionTool,
        setStatus_Date: actionStatus_Date,
        setZoom: actionZoom,
        setCenter: actionCenter,
    }, dispatch);
  };
 
 export default connect(mapStateToProps, matchDispatchToProps)(Afganistan_Timeline);
