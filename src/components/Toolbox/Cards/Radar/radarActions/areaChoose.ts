export const actionArea = (area:any) => {

    return {
        type: "RADAR_AREA_CHOOSE",
        payload: { areaChecked: area }
    }
}
