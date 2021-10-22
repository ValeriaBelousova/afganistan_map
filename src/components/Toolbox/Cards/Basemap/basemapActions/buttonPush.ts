export const pushButton = (checkedButton:boolean) => {

    return {
        type: "BASEMAP_BUTTON_PUSH",
        payload: { downloadCheckedButton: checkedButton }
    }
}