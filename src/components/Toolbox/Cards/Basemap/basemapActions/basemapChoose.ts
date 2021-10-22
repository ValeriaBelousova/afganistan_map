export const actionMapStyle = (url:any) => {

    return {
        type: "BASEMAP_STYLE_CHOOSE",
        payload: { style: url }
    }
}