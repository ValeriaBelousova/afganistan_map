import L from 'leaflet';
//import Logo from '../../../../public/logo195.png';

const iconPerson = new L.Icon({
    iconUrl: "https://raw.githubusercontent.com/ValeriaBelousova/json_data/master/afganistan_icon_nato_leave.png",
    iconRetinaUrl: "https://raw.githubusercontent.com/ValeriaBelousova/json_data/master/afganistan_icon_nato_leave.png",
    iconAnchor: new L.Point(50, 82),
    popupAnchor: new L.Point(160, -15),
    shadowUrl: "https://raw.githubusercontent.com/ValeriaBelousova/json_data/master/afganistan_icon_nato_leave.png",
    shadowSize: new L.Point(50, 82),
    shadowAnchor: new L.Point(50, 82),
    iconSize: new L.Point(50, 82),
    className: 'leaflet-div-icon'
});

export { iconPerson };