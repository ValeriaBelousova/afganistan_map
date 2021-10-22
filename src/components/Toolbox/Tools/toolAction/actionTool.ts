export const actionTool = (tools:string) => {

    return {
        type: "TOOLS_TOOL_CHOOSE",
        payload: { toolChange: tools }
    }
}
