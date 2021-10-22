export const currentbounds = (bounds:any) => {

    return {
        type: "BOUNDS_CHANGE",
        payload: { layerBounds: bounds }
    }
}
