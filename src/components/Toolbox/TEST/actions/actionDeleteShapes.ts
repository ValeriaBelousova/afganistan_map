export const actionDeleteShapes = (polygons:any) => {

    return {
        type: "DELETE_SHAPES",
        payload: { shapes: polygons }
    }
}
