export const actionPeriod = (period:any) => {

    return {
        type: "RADAR_PERIOD_CHOOSE",
        payload: { periodChecked: period }
    }
}
