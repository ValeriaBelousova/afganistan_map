export const pushButton = (checkedButton:boolean) => {

    return {
        type: "CORONA_BUTTON_PUSH",
        payload: { downloadCheckedButton: checkedButton }
    }
}
