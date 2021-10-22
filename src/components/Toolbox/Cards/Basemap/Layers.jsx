import React from 'react';
import { GeoJSON, FeatureGroup, Popup, Tooltip } from 'react-leaflet';
//import "../css/GeojsonLayer.css"

export default class GeojsonLayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

    console.log('contructor');
  }

  myStyle = () => {
    return {
      color: 'green',
      weight: 1,
      opacity: 1,
      fillColor: 'green',
    }
  }

  render() {
    console.log('render');

    console.info(this.state.data);
    return (
      <FeatureGroup>
        {this.state.data.map(f => {
          {/*return <GeoJSON key={f.properties.objectid} data={f} style={this.myStyle}>*/}
          return <GeoJSON key={f.properties.objectid} data={f} style={this.myStyle()}>
             <Popup>Территория для скачивания</Popup>
             {/*<Tooltip direction="right" offset={[0, 0]} opacity={1} permanent>{f.properties.name_rus}</Tooltip>*/}
          </GeoJSON>
        })}
      </FeatureGroup>
    );
  }

  componentDidMount() {
    if (this.props.url) {
      this.fetchData(this.props.url);
    }
    console.log('did mount');
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
          data: data.features
        });
      }, (error) => {
        console.error(error);
      });
  }
}