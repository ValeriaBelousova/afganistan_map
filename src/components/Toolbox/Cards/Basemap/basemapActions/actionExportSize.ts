export const actionExportSize = (export_size:number) => {
    return {
        type: "BASEMAP_CHANGE_EXPORT_SIZE",
        payload: { export_size: export_size }
    }
}