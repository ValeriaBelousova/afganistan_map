export const pushButton = (checkedButton:boolean) => {

    return {
        type: "RADAR_BUTTON_PUSH",
        payload: { downloadCheckedButton: checkedButton }
    }
}
