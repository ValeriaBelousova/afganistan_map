export const actionCheckboxMapZoom = (ext:boolean) => {

    return {
        type: "MAP_ZOOM_CHANGE_MANUALLY",
        payload: { checkboxChecked: ext }
    }
}