export const actionStyle = (style:any) => {

    return {
        type: "CORONA_STYLE_CHOOSE",
        payload: { styleChecked: style }
    }
}
