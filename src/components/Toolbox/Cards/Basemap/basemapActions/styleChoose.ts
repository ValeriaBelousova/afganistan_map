export const actionStyle = (style:any) => {
    console.log(style)

    return {
        type: "BASEMAP_STYLEEXPORT_CHOOSE",
        payload: { styleChecked: style }
    }
}