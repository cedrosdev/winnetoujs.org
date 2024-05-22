const escapeRegExp = string => {
  return string.replace(
    /[\=|\;|\.|\*|\+|\?|\^|\$|\{|\}|\(|\)|\[|\]|\\]/g,
    "\\$&"
  );
};
const highlightKeywords = (text, keywordClasses) => {
  const keywordPattern = new RegExp(
    `${Object.keys(keywordClasses).map(escapeRegExp).join("|")}`,
    "gi"
  );
  return text.replace(keywordPattern, match => {
    const cssClass = keywordClasses[match];
    return `<span class="${cssClass}">${match}</span>`;
  });
};

const keys = {
  let: "let",
  const: "const",
  "=": "sign",
  ";": "sign",
  Winnetou: "winnetou",
  setMutable: "method",
  initMutable: "method",
  "(": "sign",
  ")": "sign",
  "+": "sign",
  ".": "sign",
  $: "sign2",
  "{": "sign2",
  "}": "sign2",
  create: "method",
};

/**
 * HIGHLIGHT CODE
 * @param {string} text
 * @returns {string}
 */
export const transform = text => {
  return highlightKeywords(text, keys);
};
