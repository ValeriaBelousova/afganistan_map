export const pushButton = (checkedButton:boolean) => {

    return {
        type: "AFGANISTAN_BUTTON_PUSH",
        payload: { downloadCheckedButton: checkedButton }
    }
}
