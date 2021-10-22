export const actionValue = (value:any) => {

    return {
        type: "CORONA_VALUE_CHOOSE",
        payload: { valueChecked: value }
    }
}
