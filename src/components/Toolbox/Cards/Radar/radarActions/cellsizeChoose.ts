export const actionCellsize = (cellsize:any) => {

    return {
        type: "RADAR_CELL_SIZE_CHOOSE",
        payload: { cellsizeChecked: cellsize }
    }
}