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
        id: 'radar',
        area: 'etr',
        cellsize: 20,
        hour: 9,
        minute: 0,
        period: 1,
        rainviewer: false,
        overmap: false,
        extent: [[28.49, -16.08], [77.5, 110.06]],
        downloadChecked: false,
    },
    {
        id: 'gismeteo',
        area: 'mo',
        extent: false,
        downloadChecked: false,
    },
    {
        id: 'corona',
        area: 'rus',
        style: 'rik',
        value: 'sick',
        ratio: false,
        scale: [5000, 10000, 20000, 40000],
        downloadChecked: false,
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
        id: 'meteored',
        area: 'etr_mercator',
        extent: false,
        value: 'temperature',
        downloadChecked: false,
        seqChecked: false,
    },
    {
        id: 'shapefile',
        name: 'New_shape',
        om: 'overmap',
        satellite: false,
        downloadChecked: false,
    },
    {
        id: 'hydro',
        url: 'https://meteoinfo.ru/novosti/17891-gidrologicheskij-obzor-7-aprelya-2021-g',
        downloadChecked: false,
    },
    {
        id: 'fires',
        site: false,
        downloadChecked: false,
    },
    {
        id: 'satellite',
        om_layers: [],
        downloadChecked: false,
    },
    {
        id: 'temperature',
        temp_lyr: false,
        downloadChecked: false,
    },
    {
        id: 'tools',
        toolChange: 'Gismeteo',
    },
    {
        id: 'vybory',
        vybory_lyr: false,
        data_type: 'gd',
        value: 'ed_ros',
        scale: [2, 5, 10, 15],
        colors: ["#c9cfec", "#82a0dd", "#4d58f4", "#030fae", "#000256"],
        csv_om: false,
        excel: true
    },
    {
        id: 'datamos',
        dataset_id: 0,
        atd_div: ['district', 'okruga'],
        csv_om: false,
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
        case 'RADAR_BUTTON_PUSH':
            return state.map(l => {
                if (l.id === 'radar') {
                    l.downloadChecked = action.payload.downloadCheckedButton;
                }
                return l;
            });
        case 'RADAR_AREA_CHOOSE':
            return state.map(l => {
                if (l.id === 'radar') {
                    l.area = action.payload.areaChecked;
                }
                return l;
            });
        case 'RADAR_CELL_SIZE_CHOOSE':
            return state.map(l => {
                if (l.id === 'radar') {
                    l.cellsize = action.payload.cellsizeChecked;
                }
                return l;
            });
        case 'RADAR_HOUR_CHOOSE':
            return state.map(l => {
                if (l.id === 'radar') {
                    l.hour = action.payload.hourChecked;
                }
                return l;
            });
        case 'RADAR_MINUTE_CHOOSE':
            return state.map(l => {
                if (l.id === 'radar') {
                    l.minute = action.payload.minuteChecked;
                }
                return l;
            });
        case 'RADAR_PERIOD_CHOOSE':
            return state.map(l => {
                if (l.id === 'radar') {
                    l.period = action.payload.periodChecked;
                }
                return l;
            });
        case 'RADAR_RAINVIEWER_CHOOSE':
            return state.map(l => {
                if (l.id === 'radar') {
                    l.rainviewer = action.payload.checkboxChecked;
                }
                return l;
            });
        case 'GISMETEO_BUTTON_PUSH':
            return state.map(l => {
                if (l.id === 'gismeteo') {
                    l.downloadChecked = action.payload.downloadCheckedButton;
                }
                return l;
            });
        case 'GISMETEO_AREA_CHOOSE':
            return state.map(l => {
                if (l.id === 'gismeteo') {
                    l.area = action.payload.areaChecked;
                }
                return l;
            });
        case 'GISMETEO_EXTENT_CHOOSE':
            return state.map(l => {
                if (l.id === 'gismeteo') {
                    l.extent = action.payload.checkboxChecked;
                }
                return l;
            });
        case 'CORONA_BUTTON_PUSH':
            return state.map(l => {
                if (l.id === 'corona') {
                    l.downloadChecked = action.payload.downloadCheckedButton;
                }
                return l;
            });
        case 'CORONA_AREA_CHOOSE':
            return state.map(l => {
                if (l.id === 'corona') {
                    l.area = action.payload.areaChecked;
                }
                return l;
            });
        case 'CORONA_STYLE_CHOOSE':
            return state.map(l => {
                if (l.id === 'corona') {
                    l.style = action.payload.styleChecked;
                }
                return l;
            });
        case 'CORONA_VALUE_CHOOSE':
            return state.map(l => {
                if (l.id === 'corona') {
                    l.value = action.payload.valueChecked;
                }
                return l;
            });
        case 'CORONA_CHECKBOX_CHOOSE':
            return state.map(l => {
                if (l.id === 'corona') {
                    l.ratio = action.payload.checkboxChecked;
                }
                return l;
            });
        case 'CORONA_SCALE_CHOOSE':
            return state.map(l => {
                if (l.id === 'corona') {
                    l.scale = action.payload.scaleChecked;
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
        case 'METEORED_BUTTON_PUSH':
            return state.map(l => {
                if (l.id === 'meteored') {
                    l.downloadChecked = action.payload.downloadCheckedButton;
                }
                return l;
            });
        case 'METEORED_VALUE_CHOOSE':
            return state.map(l => {
                if (l.id === 'meteored') {
                    l.value = action.payload.valueChecked;
                }
                return l;
            });
        case 'METEORED_AREA_CHOOSE':
            return state.map(l => {
                if (l.id === 'meteored') {
                    l.area = action.payload.areaChecked;
                }
                return l;
            });
        case 'METEORED_EXTENT_CHOOSE':
            return state.map(l => {
                if (l.id === 'meteored') {
                    l.extent = action.payload.checkboxChecked;
                }
                return l;
            });
        case 'SHAPEFILE_BUTTON_PUSH':
            return state.map(l => {
                if (l.id === 'shapefile') {
                    l.downloadChecked = action.payload.downloadCheckedButton;
                }
                return l;
            });
        case 'SHAPEFILE_SAT_ADD':
            return state.map(l => {
                if (l.id === 'shapefile') {
                    l.satellite = action.payload.addSatellite;
                }
                return l;
            });
        case 'SHAPEFILE_OM_CHANGE':
            return state.map(l => {
                if (l.id === 'shapefile') {
                    l.om = action.payload.omChoose;
                }
                return l;
            });
        case 'SHAPEFILE_NAME_CHANGE':
            return state.map(l => {
                if (l.id === 'shapefile') {
                    l.name = action.payload.shapefileName;
                }
                return l;
            });
        case 'SATELLITE_BUTTON_PUSH':
                return state.map(l => {
                    if (l.id === 'satellite') {
                        l.downloadChecked = action.payload.downloadCheckedButton;
                    }
                    return l;
                });
        case 'SATELLITE_OM_LYR':
            return state.map(l => {
                if (l.id === 'satellite') {
                    l.om_layers = action.payload.om_layers;
                }
                return l;
            });
        case 'HYDRO_URL_CHANGE':
            return state.map(l => {
                if (l.id === 'hydro') {
                    l.url = action.payload.urlChange;
                }
                return l;
            });
        case 'HYDRO_BUTTON_PUSH':
            return state.map(l => {
                if (l.id === 'hydro') {
                    l.downloadChecked = action.payload.downloadCheckedButton;
                }
                return l;
            });
        case 'FIRES_BUTTON_PUSH':
            return state.map(l => {
                if (l.id === 'fires') {
                    l.downloadChecked = action.payload.downloadCheckedButton;
                }
                return l;
            });
        case 'DOWNLOAD_FROM_SITE':
            return state.map(l => {
                if (l.id === 'fires') {
                    l.site = action.payload.downloadFromSite;
                }
                return l;
            });
        case 'TEMP_BUTTON_PUSH':
            return state.map(l => {
                if (l.id === 'temperature') {
                    l.downloadChecked = action.payload.downloadCheckedButton;
                }
                return l;
            });
        case 'TEMP_LYR_ADD':
            return state.map(l => {
                if (l.id === 'temperature') {
                    l.temp_lyr = action.payload.lyrAdd;
                }
                return l;
            });
        case 'TOOLS_TOOL_CHOOSE':
                return state.map(l => {
                    if (l.id === 'tools') {
                        l.toolChange = action.payload.toolChange;
                    }
                    return l;
                });
                case 'VYBORY_BUTTON_PUSH':
                    return state.map(l => {
                        if (l.id === 'vybory') {
                            l.downloadChecked = action.payload.downloadCheckedButton;
                        }
                        return l;
                    });
                case 'VYBORY_AREA_CHOOSE':
                    return state.map(l => {
                        if (l.id === 'vybory') {
                            l.data_type = action.payload.areaChecked;
                        }
                        return l;
                    });
                case 'VYBORY_STYLE_CHOOSE':
                    return state.map(l => {
                        if (l.id === 'vybory') {
                            l.value = action.payload.styleChecked;
                        }
                        return l;
                    });
                case 'VYBORY_CHECKBOX_CHOOSE':
                    return state.map(l => {
                        if (l.id === 'vybory') {
                            l.csv_om = action.payload.checkboxChecked;
                        }
                        return l;
                    });
                case 'VYBORY_SCALE_CHOOSE':
                    return state.map(l => {
                        if (l.id === 'vybory') {
                            l.scale = action.payload.scaleChecked;
                        }
                        return l;
                    });
                case 'VYBORY_COLOR_CHOOSE':
                    return state.map(l => {
                        if (l.id === 'vybory') {
                            l.colors = action.payload.colorChecked;
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
