import React, { useRef } from "react";
import {
  Map,
  TileLayer,
  FeatureGroup,
  Popup,
  WMSTileLayer,
  Marker,
  SVGOverlay,
  Circle,
  Pane,
  Tooltip,
} from "react-leaflet";
import { Button, Card } from "react-bootstrap";
import { LatLngTuple } from "leaflet";
import { EditControl } from "react-leaflet-draw";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { currentbounds } from "./actions/index";
import { actionZoom } from "../Cards/Radar/radarActions/changeZoom";
import { actionLevel } from "../Cards/Basemap/basemapActions/levelChoose";
import GeojsonLayer from "../Cards/Basemap/Layers";
import Afganistan_Layer from "./Afganistan_Layer";
import Afganistan_Layer_Poi from "./Afganistan_Layer_Poi";
//import iconPerson from "./Icon";
import "./Map.css";
import { idText } from "typescript";
import L from "leaflet";
import { iconPerson } from "./Icon";
import { icon_red } from "./Icon_red";
import { icon_black } from "./Icon_black";
import { icon_blue } from "./Icon_blue";

// style = 'https://api.mapbox.com/styles/v1/valeriabelousova/ckkgmiumn0idl17qp5eh7nuqh/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidmFsZXJpYWJlbG91c292YSIsImEiOiJjanBmMmt0c2cwNjQyM3FsZ2gzY2dvemNvIn0.skr82NeiNVFPUi-zxKKqiw'
// current = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

//const defaultLatLng: LatLngTuple = [52.865572, 37.283523];

const AfganistanMap: React.FC = (props: any) => {
  {
    props.layers.map((l: any) => {
      if (l.icon === "blue") {
      }
    });
  }
  L.Icon.Default.imagePath =
    "https://raw.githubusercontent.com/ValeriaBelousova/3d-model/master/";
  //const [zoom, setZoom] = useState(props.layers[0].zoom)
  const mapRef = useRef();

  const purpleOptions = { color: "purple" };

  const setZoom = (e: any) => {
    console.log(props.layers[0].zoom);
    if (e.zoom != props.layers[0].zoom) {
      props.zoomChange(e.zoom);
      if (props.layers[0].zoom <= 5 && props.layers[0].zoom_change === false) {
        props.setLevel("M10");
      } else if (props.layers[0].zoom > 5 && props.layers[0].zoom <= 7) {
        props.setLevel("M05");
      } else if (props.layers[0].zoom > 7 && props.layers[0].zoom <= 10) {
        props.setLevel("M01");
      }
    }
  };
  const additionalLyr = {
    "1_may_2021":
      "https://geo.emg24.ru/geoserver/publiclayers/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=publiclayers%3Argnpol_afganistan_1_may_2021&maxFeatures=350&outputFormat=application%2Fjson",
    june_2021:
      "https://geo.emg24.ru/geoserver/publiclayers/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=publiclayers%3Aafganistan_june_2021&maxFeatures=350&outputFormat=application%2Fjson",
    july_2021:
      "https://geo.emg24.ru/geoserver/publiclayers/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=publiclayers%3Aafganistan_july_2021&maxFeatures=350&outputFormat=application%2Fjson",
    august_2021:
      "https://geo.emg24.ru/geoserver/publiclayers/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=publiclayers%3Aafganistan_august_2021&maxFeatures=350&outputFormat=application%2Fjson",
    kabul:
      "https://geo.emg24.ru/geoserver/publiclayers/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=publiclayers%3Aafganistan_cities&maxFeatures=50&outputFormat=application%2Fjson",
    mazari_sharif: "",
    bagram:
      "https://geo.emg24.ru/geoserver/baselayers/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=baselayers%3Apoppnt11&maxFeatures=50&outputFormat=application%2Fjson",
    bazarak: "",
  };
  const baselayers = { M10: "baselayers:group_m11", M05: "", M01: "" };
  return (
    <Map
      //ref={mapRef}
      center={props.layers[0].center}
      zoom={props.layers[0].zoom}
      minZoom={6}
      maxZoom={8}
      onViewportChange={setZoom}
    >
      <WMSTileLayer
        layers={"baselayers:afganistan_base"}
        url="https://geo.emg24.ru/geoserver/baselayers/wms"
        transparent={true}
        format={"image/png"}
      />
      {props.layers.map((l: any) => {
        {
          /*if (l.visible===true) { */
        }
        let status_date: string = l.status_date;
        console.log("status_date", status_date);
        //console.log(L.Icon.Default.imagePath);
        if (status_date == "neutral") {
          return (
            <FeatureGroup>
              {/*<Afganistan_Layer_Poi key={status_date} id={status_date} url={additionalLyr["kabul"]}/>*/}
              <Afganistan_Layer
                key={status_date}
                id={status_date}
                url={additionalLyr["1_may_2021"]}
              />
              <Marker icon={icon_blue} position={[34.53278, 69.16583]}>
                <Tooltip
                  offset={[-5, 10]}
                  opacity={1}
                  className={"blue_tooltip"}
                  permanent
                >
                  <span>Кабул</span>
                </Tooltip>
              </Marker>
            </FeatureGroup>
          );
        }
        if (status_date == "1_may_2021") {
          return (
            <FeatureGroup>
              {/*<Afganistan_Layer_Poi key={status_date} id={status_date} url={additionalLyr["kabul"]}/>*/}
              <Afganistan_Layer
                key={status_date}
                id={status_date}
                url={additionalLyr["1_may_2021"]}
              />
              <Marker icon={icon_red} position={[34.53278, 69.16583]}>
                <Tooltip
                  offset={[-5, 10]}
                  opacity={1}
                  className={"red_tooltip"}
                  permanent
                >
                  <span>Кабул</span>
                </Tooltip>
              </Marker>
            </FeatureGroup>
          );
        } else if (status_date == "june_2021") {
          return (
            <FeatureGroup>
              {/*<Afganistan_Layer_Poi key={status_date} id={status_date} url={additionalLyr["kabul"]}/>*/}
              <Afganistan_Layer
                key={status_date}
                id={status_date}
                url={additionalLyr["june_2021"]}
              />
              <Marker icon={icon_red} position={[34.52023, 69.179961]}>
                <Tooltip className={"red_tooltip"} permanent>
                  <span>Кабул</span>
                </Tooltip>
              </Marker>
              <Marker icon={icon_black} position={[36.7089, 67.1108]}>
                <Tooltip className={"black_tooltip"} permanent>
                  <span>Мазари-Шариф</span>
                </Tooltip>
              </Marker>
            </FeatureGroup>
          );
        } else if (status_date == "july_2021") {
          return (
            <FeatureGroup>
              <Afganistan_Layer
                key={status_date}
                id={status_date}
                url={additionalLyr["1_may_2021"]}
              />
              {/*<Afganistan_Layer_Poi key={status_date} id={status_date} url={additionalLyr["kabul"]}/>*/}
              <Marker icon={icon_red} position={[34.52023, 69.179961]}>
                <Tooltip className={"red_tooltip"} permanent>
                  <span>Кабул</span>
                </Tooltip>
              </Marker>
              <Marker icon={iconPerson} position={[34.96667, 69.29278]}>
                <Popup className={"icon-leave"}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src="https://raw.githubusercontent.com/ValeriaBelousova/json_data/master/nato.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Баграм</Card.Title>
                      <Card.Text>
                        Последние военные США ушли с авиабазы в Баграме. Почему
                        это важно и чем опасно?
                      </Card.Text>
                      <Button
                        variant="dark"
                        href="https://www.bbc.com/russian/news-57684355"
                        target="_blank"
                      >
                        Читать
                      </Button>
                    </Card.Body>
                  </Card>
                </Popup>
              </Marker>
            </FeatureGroup>
          );
        } else if (status_date == "august_2021") {
          return (
            <FeatureGroup>
              <Afganistan_Layer
                key={status_date}
                id={status_date}
                url={additionalLyr["august_2021"]}
              />
              {/*<Afganistan_Layer_Poi key={status_date} id={status_date} url={additionalLyr["kabul"]}/>*/}
              <Marker icon={icon_black} position={[34.52023, 69.179961]}>
                <Tooltip className={"black_tooltip"} permanent>
                  <span>Кабул</span>
                </Tooltip>
              </Marker>
            </FeatureGroup>
          );
        } else if (status_date == "september_2021") {
          return (
            <FeatureGroup>
              <Afganistan_Layer
                key={status_date}
                id={status_date}
                url={additionalLyr["august_2021"]}
              />
              {/*<Afganistan_Layer_Poi key={status_date} id={status_date} url={additionalLyr["kabul"]}/>*/}
              <Marker icon={icon_red} position={[35.445, 69.752]}>
                <Tooltip className={"red_tooltip"} permanent>
                  <span>Базарак</span>
                </Tooltip>
              </Marker>
              <Marker icon={icon_black} position={[34.52023, 69.179961]}>
                <Tooltip className={"black_tooltip"} permanent>
                  <span>Кабул</span>
                </Tooltip>
              </Marker>
            </FeatureGroup>
          );
        }

        {
          /* } */
        }
      })}
      {/*{props.layers.map( (l:any) => {
              if (l.visible===true) {
                let status_date:string = l.status_date;
                  return ( <Afganistan_Layer_Poi key={status_date} id={status_date} url={additionalLyr["kabul"]}/>)
                  }})}*/}
    </Map>
  );
};
const mapStateToProps = (state: any) => {
  return {
    layers: state.layers,
  };
};

const matchDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      addBounds: currentbounds,
      zoomChange: actionZoom,
      setLevel: actionLevel,
    },
    dispatch
  );
};

export default connect(mapStateToProps, matchDispatchToProps)(AfganistanMap);
