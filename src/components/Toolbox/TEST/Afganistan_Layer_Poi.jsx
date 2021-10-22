import React from 'react';
import { GeoJSON, FeatureGroup, Popup, Tooltip,  Marker, Circle} from 'react-leaflet';
import { Table } from 'react-bootstrap';
//import "../css/GeojsonLayer.css"
import "leaflet/dist/leaflet.css";
import L from "leaflet";

L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";
//L.Icon.Default.imagePath = "https://raw.githubusercontent.com/ValeriaBelousova/json_data/master/marker-icon.png";

export default class Afganistan_Layer_Poi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status_date: 'neutral',
      data: []
    };

    console.log('contructor poi');
  }

  neutralStyle = (f) => {
    return {
      adius: 8,
      fillColor: "#ff7800",
      color: "#000",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    }
  }

  render() {
    console.log('render poi');

    console.info(this.state.data);
    return (
      <div>
        {this.state.data.map(f => {
          if (this.state.status_date === "neutral" && f.properties.name === "Кабул") {
          console.log(f.properties.name);
          return (
            <Marker position={[f.geometry.coordinates[1], f.geometry.coordinates[0]]}
            >
              <Tooltip permanent>
                <span>{f.properties.name}</span>
              </Tooltip>
            </Marker>
          )  
        }
        else if (this.state.status_date === "1_may_2021" && f.properties.name === "Кабул") {
          console.log(f.properties.name);
          return (
            <Marker position={[f.geometry.coordinates[1], f.geometry.coordinates[0]]}>
              <Tooltip permanent>
                <span>{f.properties.name}</span>
              </Tooltip>
            </Marker>
          )  
        }
        else if (this.state.status_date === "june_2021" && (f.properties.name === "Мазари-Шариф" || f.properties.name === "Кабул")) {
          console.log(f.properties.name);
          return (
            <Marker position={[f.geometry.coordinates[1], f.geometry.coordinates[0]]}>
              <Tooltip permanent>
                <span>{f.properties.name}</span>
              </Tooltip>
            </Marker>
          )  
        }
        else if (this.state.status_date === "july_2021" && (f.properties.name === "Баграм" || f.properties.name === "Кабул")) {
          console.log(f.properties.name);
          return (
            <Marker position={[f.geometry.coordinates[1], f.geometry.coordinates[0]]}>
              <Tooltip permanent>
                <span>{f.properties.name}</span>
              </Tooltip>
            </Marker>
          )  
        }
        else if (this.state.status_date === "august_2021" &&  f.properties.name === "Кабул") {
          console.log(f.properties.name);
          return (
            <Marker position={[f.geometry.coordinates[1], f.geometry.coordinates[0]]}>
              <Tooltip permanent>
                <span>{f.properties.name}</span>
              </Tooltip>
            </Marker>
          )  
        }
        else if (this.state.status_date === "september_2021" &&  (f.properties.name === "Базарак" || f.properties.name === "Кабул")) {
          console.log(f.properties.name);
          return (
            <Marker position={[f.geometry.coordinates[1], f.geometry.coordinates[0]]}>
              <Tooltip permanent>
                <span>{f.properties.name}</span>
              </Tooltip>
            </Marker>
          )  
        }
      }
        )}
      </div>
    );
  }

  componentDidMount() {
    if (this.props.url) {
      this.fetchData(this.props.url);
    }
    this.setState({
      status_date: this.props.id,
    });
    console.log(this.props);
  }

  componentWillUnmount() {
    console.log('will unmount poi');

  }

  fetchData(url) {
    let request = fetch(url)

    request
      .then(r => r.json())
      .then(data => {
        this.setState({
          data: data.features,
        });
      }, (error) => {
        console.error(error);
      });
  }
}