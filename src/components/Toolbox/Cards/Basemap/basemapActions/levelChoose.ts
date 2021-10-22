export const actionLevel = (level:string) => {
    console.log(level)

    return {
        type: "BASEMAP_LEVEL_CHOOSE",
        payload: { levelChecked: level }
    }
}