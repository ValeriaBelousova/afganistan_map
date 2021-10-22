import React from 'react';
import { TileLayer } from 'react-leaflet';
//import "../css/GeojsonLayer.css"

export default class RainviewerTiles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    };
  }

  render() {
    return (
        <TileLayer
            url={'https://tilecache.rainviewer.com/v2/radar/' + this.state.data.time + '/512/{z}/{x}/{y}/2/1_1.png'}
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            opacity={0.9}>
        </TileLayer>
    );
  }

  componentDidMount() {
    if (this.props.url) {
      this.fetchData(this.props.url);
    }
  }

  fetchData(url) {
    let request = fetch(url)

    request
      .then(r => r.json())
      .then(data => {
        let len = data.radar.past.length;

        this.setState({
          data: data.radar.past[len - 1]
        });
      }, (error) => {
        console.error(error);
      });
  }
}