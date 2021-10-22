export const actionZoom = (newzoom:any) => {

    return {
        type: "MAP_ZOOM_CHANGE",
        payload: { zoom: newzoom }
    }
}