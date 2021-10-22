import React from 'react';
import { GeoJSON, FeatureGroup, Popup } from 'react-leaflet';
import { Table } from 'react-bootstrap';
import { Circle, Tooltip } from 'leaflet';
//import "../css/GeojsonLayer.css"

export default class Afganistan_Layer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status_date: 'neutral',
      data: []
    };

    console.log('contructor poly');
  }

  myStyle = (f) => {
    return {
      color: 'white',
      weight: 1,
      fillOpacity: 1,
      fillColor: f.properties.color,
    }
  }

  neutralStyle = (f) => {
    return {
      color: '#9ea4c8',
      weight: 1,
      fillOpacity: 1,
      fillColor: 'white',
    }
  }

  render() {
    console.log('render poly');

    //console.info(this.state.data);
    return (
      <FeatureGroup>
        {this.state.data.map(f => {
          if (this.state.status_date === "neutral") {
          return (<GeoJSON key={f.properties.objectid} data={f} style={this.neutralStyle(f)} >
             <Popup>
             <Table striped bordered hover>
                <tbody>
                  <tr>
                    <td>Регион</td>
                    <td>{f.properties.name_1}</td>
                  </tr>
                  <tr>
                    <td>Район</td>
                    <td>{f.properties.name_2}</td>
                  </tr>
                </tbody>
              </Table>
             </Popup>
             {/*<Tooltip direction="right" offset={[0, 0]} opacity={1} permanent>{f.properties.name_rus}</Tooltip>*/}
          </GeoJSON>)
        }
        else if (this.state.status_date === "1_may_2021" ||
                  this.state.status_date === "june_2021" ||
                  this.state.status_date === "july_2021" ||
                  this.state.status_date === "august_2021" ||
                  this.state.status_date === "september_2021"
                  ) {
          return (<GeoJSON key={f.properties.objectid} data={f} style={this.myStyle(f)}>
             <Popup>
             <Table striped bordered hover>
                <tbody>
                  <tr>
                    <td>Регион</td>
                    <td>{f.properties.name_1}</td>
                  </tr>
                  <tr>
                    <td>Район</td>
                    <td>{f.properties.name_2}</td>
                  </tr>
                  <tr>
                    <td>Статус</td>
                    <td>{f.properties.status}</td>
                  </tr>
                </tbody>
              </Table>
             </Popup>
             {/*<Tooltip direction="right" offset={[0, 0]} opacity={1} permanent>{f.properties.name_rus}</Tooltip>*/}
          </GeoJSON>)
        }
      }
        )}
      </FeatureGroup>
    );
  }

  componentDidMount() {
    if (this.props.url) {
      this.fetchData(this.props.url);
    }
    this.setState({
      status_date: this.props.id,
    });
    //console.log(this.props);
  }

  componentWillUnmount() {
    console.log('will unmount');

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