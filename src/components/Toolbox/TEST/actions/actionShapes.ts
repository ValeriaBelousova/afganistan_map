export const actionShapes = (polygons:any) => {

    return {
        type: "ADD_SHAPES",
        payload: { shapes: polygons }
    }
}
