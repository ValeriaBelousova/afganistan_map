export const actionMinute = (minute:any) => {

    return {
        type: "RADAR_MINUTE_CHOOSE",
        payload: { minuteChecked: minute }
    }
}
