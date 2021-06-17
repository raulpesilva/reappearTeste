export const mergeObject = (style1?: object, style2?: object) => {
  if (!style1 && !style2) return undefined
  if (!style1) return style2
  if (!style2) return style1
  if (style1 && style2) {
    return { ...style1, ...style2 }
  }
}
