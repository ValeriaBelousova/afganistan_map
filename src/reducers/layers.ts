const INITIAL_STATE = [
    {
        id: 'map',
        zoom: 4,
        center: [34.532780, 69.165830],
        style: 'https://api.mapbox.com/styles/v1/valeriabelousova/ckko1s46x69o217o2qi6rtrg2/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidmFsZXJpYWJlbG91c292YSIsImEiOiJjanBmMmt0c2cwNjQyM3FsZ2gzY2dvemNvIn0.skr82NeiNVFPUi-zxKKqiw',
        bounds: [],
        polygonsArr: {},
        polygons: [],
        zoom_change: false,
    },
    {
        id: 'basemap',
        level: 'M10',
        level_name: '1:100 000 000',
        style: 'rikNews',
        export_size: 2000,
        downloadChecked: false,
    },
    {
        id: 'afganistan',
        visible: false,
        status_date: 'neutral',
        visible_poly: false,
        visible_poi: false,
        downloadChecked: false,
    }
]

type tplotOptions = {
    [key: string]: string
}

const level_name : tplotOptions = {
    M10:"1:100 000 000",
    M05:"1:50 000 000",
    M01:"1:10 000 000",
    M500:"1:500 000",
    M200:"1:200 000",
}

export default function (state = INITIAL_STATE, action: any) {
    console.log(action);
    switch (action.type) {
        case 'BOUNDS_CHANGE':
            return state.map(l => {
                if (l.id === 'map') {
                    l.bounds = action.payload.layerBounds;
                }
                return l;
            });
        case 'ADD_SHAPES':
            return state.map(l => {
                if (l.id === 'map') {
                    l.polygons = action.payload.shapes;
                }
                return l;
            });
        case 'DELETE_SHAPES':
            return state.map(l => {
                if (l.id === 'map') {
                    l.polygons = action.payload.shapes;
                }
                return l;
            });
        case 'ADD_POLYGONS_ARR':
            return state.map(l => {
                if (l.id === 'map') {
                    l.polygonsArr = action.payload.polygonsArr;
                }
                return l;
            });
        case 'MAP_ZOOM_CHANGE':
            return state.map(l => {
                if (l.id === 'map') {
                    l.zoom = action.payload.zoom;
                }
                return l;
            });
        case 'MAP_CENTER_CHANGE':
            return state.map(l => {
                if (l.id === 'map') {
                    l.center = action.payload.center;
                }
                return l;
            });
        case 'MAP_ZOOM_CHANGE_MANUALLY':
            return state.map(l => {
                if (l.id === 'map') {
                    l.zoom_change = action.payload.checkboxChecked;
                }
                return l;
            });
        case 'BASEMAP_BUTTON_PUSH':
            return state.map(l => {
                if (l.id === 'basemap') {
                    l.downloadChecked = action.payload.downloadCheckedButton;
                }
                return l;
            });
        case 'BASEMAP_LEVEL_CHOOSE':
            return state.map(l => {
                if (l.id === 'basemap') {
                    l.level = action.payload.levelChecked;
                    l.level_name = level_name[action.payload.levelChecked]
                }
                return l;
            });
        case 'BASEMAP_STYLE_CHOOSE':
            return state.map(l => {
                if (l.id === 'map') {
                    l.style = action.payload.style;
                }
                return l;
            });
        case 'BASEMAP_STYLEEXPORT_CHOOSE':
            return state.map(l => {
                if (l.id === 'basemap') {
                    l.style = action.payload.styleChecked;
                }
                return l;
            });
        case 'BASEMAP_CHANGE_EXPORT_SIZE':
                return state.map(l => {
                    if (l.id === 'basemap') {
                        l.export_size = action.payload.export_size;
                    }
                    return l;
                });
                case 'AFGANISTAN_BUTTON_PUSH':
                    return state.map(l => {
                        if (l.id === 'afganistan') {
                            l.visible = action.payload.downloadCheckedButton;
                        }
                        return l;
                    });
                case 'AFGANISTAN_STATUS_DATE':
                    return state.map(l => {
                        if (l.id === 'afganistan') {
                            l.status_date = action.payload.status_date;
                        }
                        return l;
                    });
        default:
            return state
    }
    ;
}
