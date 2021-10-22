export const actionCheckbox = (ext:boolean) => {

    return {
        type: "GISMETEO_EXTENT_CHOOSE",
        payload: { checkboxChecked: ext }
    }
}