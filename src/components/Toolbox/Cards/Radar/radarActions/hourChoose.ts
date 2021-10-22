export const actionHour = (hour:any) => {

    return {
        type: "RADAR_HOUR_CHOOSE",
        payload: { hourChecked: hour }
    }
}
