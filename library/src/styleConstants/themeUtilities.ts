export const getFinalShowBoxShadow = (
  showBoxShadow: boolean | undefined,
  defaultShowBoxShadow: boolean
) => (showBoxShadow !== undefined ? showBoxShadow : defaultShowBoxShadow);