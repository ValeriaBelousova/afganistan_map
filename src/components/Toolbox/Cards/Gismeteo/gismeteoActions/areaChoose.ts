export const actionArea = (area:any) => {

    return {
        type: "GISMETEO_AREA_CHOOSE",
        payload: { areaChecked: area }
    }
}
