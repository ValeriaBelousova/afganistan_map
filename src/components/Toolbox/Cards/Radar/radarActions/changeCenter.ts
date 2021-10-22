export const actionCenter = (newcenter:any) => {

    return {
        type: "MAP_CENTER_CHANGE",
        payload: { center: newcenter }
    }
}