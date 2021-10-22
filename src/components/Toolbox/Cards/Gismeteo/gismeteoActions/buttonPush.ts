export const pushButton = (checkedButton:boolean) => {

    return {
        type: "GISMETEO_BUTTON_PUSH",
        payload: { downloadCheckedButton: checkedButton }
    }
}
