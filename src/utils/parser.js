import DOM from 'cheerio';

/**
 * @param {HTMLElement} nodeType
 * @param {string} rawHTML
 * @description
 * Parses a string to a htmlElement
 */
export const parseStringIntoDOM = (rawHTML) => {
  return DOM.load(rawHTML);
};

export const getSourceAttribute = (nodeType, rawHTML) => {
  const src = DOM(nodeType, rawHTML);
  if(src[0] !== undefined) {
    return src[0].attribs.href;
  }
  return null;
};

export const getPreviewText = (nodeType, rawHTML) => {
  const preview = DOM(nodeType, rawHTML);
  return preview.text();
};