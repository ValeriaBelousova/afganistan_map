import React, {useState} from 'react';
import {Button, Accordion, Card, Form} from 'react-bootstrap';
import {actionTool} from '../Tools/toolAction/actionTool';
import SpinnerForLoading from '../../additional/Spinner/SpinnerForLoading';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { pushButton } from "./actionTest/buttonPush";
import { actionStatus_Date } from './actionTest/actionStatus_Date';
import { actionZoom } from "../Cards/Radar/radarActions/changeZoom";
import { actionCenter } from "../Cards/Radar/radarActions/changeCenter";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Timeline.css';



const Afganistan_Timeline: React.FC = (props: any) => {

    const click_li = (e:any) => {
        
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
                                            {props.layers.map( (l:any) => {
                                                if (l.visible===true) {
                                                    let status_date:string = l.status_date;
                                                    console.log('status_date', status_date);
                                                    if (status_date == "1_may_2021") {
                                                    return ( 
                                            <p>Официальная дата окончательного вывода вооружённых сил НАТО</p>)}}})}
                                        </li>
                                        <li onClick={click_li} id="june_2021">
                                            <h5 onClick={click_li} id="june_2021">Июнь 2021</h5>
                                            {props.layers.map( (l:any) => {
                                                if (l.visible===true) {
                                                    let status_date:string = l.status_date;
                                                    console.log('status_date', status_date);
                                                    if (status_date == "june_2021") {
                                                    return (
                                            <p>Активизация Талибан</p>)}}})}
                                        </li>
                                        <li onClick={click_li} id="july_2021">
                                        <h5 onClick={click_li} id="july_2021">Июль 2021</h5>
                                            {props.layers.map( (l:any) => {
                                                if (l.visible===true) {
                                                    let status_date:string = l.status_date;
                                                    console.log('status_date', status_date);
                                                    if (status_date == "july_2021") {
                                                    return (
                                            <p>Войска НАТО покидают Баграм</p>)}}})}
                                        </li>
                                        <li onClick={click_li} id="august_2021">
                                            <h5 onClick={click_li} id="august_2021">Август 2021</h5>
                                            {props.layers.map( (l:any) => {
                                                if (l.visible===true) {
                                                    let status_date:string = l.status_date;
                                                    console.log('status_date', status_date);
                                                    if (status_date == "august_2021") {
                                                    return (
                                            <p>Окружение и взятие Кабула. Бегство президента Ашрафа Гани</p>)}}})}
                                        </li>
                                        <li onClick={click_li} id="september_2021">
                                            <h5 onClick={click_li} id="september_2021">5 сентября 2021</h5>
                                            {props.layers.map( (l:any) => {
                                                if (l.visible===true) {
                                                    let status_date:string = l.status_date;
                                                    console.log('status_date', status_date);
                                                    if (status_date == "september_2021") {
                                                    return (
                                            <p>Силы сопротивления передислоцировались в Панджшер</p>)}}})}
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
