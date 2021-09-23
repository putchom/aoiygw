figma.showUI(__html__, { width: 440, height: 640 });

figma.ui.onmessage = (msg) => {
  if (msg.type === 'fill-node') {
    const replaceImages = (
      node: any,
      arrayBuffer: Uint8Array
    ) => {
      const newFills = []
      for (const paint of node.fills) {
        const newPaint = JSON.parse(JSON.stringify(paint))
        newPaint.imageHash = figma.createImage(arrayBuffer).hash
        newFills.push(newPaint)
      }
      node.fills = newFills
    }

    const selected = figma.currentPage.selection[0] as GeometryMixin
    replaceImages(selected, msg.arrayBuffer)
  }
};