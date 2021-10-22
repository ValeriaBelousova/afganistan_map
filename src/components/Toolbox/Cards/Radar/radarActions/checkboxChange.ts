export const actionCheckbox = (rain:boolean) => {

    return {
        type: "RADAR_RAINVIEWER_CHOOSE",
        payload: { checkboxChecked: rain }
    }
}