export const actionArea = (area:any) => {

    return {
        type: "CORONA_AREA_CHOOSE",
        payload: { areaChecked: area }
    }
}
