export const actionCheckbox = (ratio:boolean) => {

    return {
        type: "CORONA_CHECKBOX_CHOOSE",
        payload: { checkboxChecked: ratio }
    }
}
