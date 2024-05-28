const escapeRegExp = string => {
  return string.replace(/[\=|\.|\*|\+|\?|\^|\$|\{|\}|\(|\)|\[|\]|\\]/g, "\\$&");
};
const highlightKeywords = (text, keywordClasses) => {
  const keywordPattern = new RegExp(
    `${Object.keys(keywordClasses).map(escapeRegExp).join("|")}`,
    "gi"
  );
  let text1 = text.replace(keywordPattern, match => {
    const cssClass = keywordClasses[match];
    return `<span class="${cssClass}">${match}</span>`;
  });

  return text1;
};

const keys = {
  "let ": "let",
  "const ": "const",
  "=": "sign",
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
  "[": "sign2",
  "]": "sign2",
  create: "method",
  "&lt;": "sign2",
  "&gt;": "sign2",
  winnetou: "sign2",
  "import ": "const",
  "export ": "const",
  "default ": "method",
  "from ": "let",
};

/**
 * HIGHLIGHT CODE
 * @param {string} text
 * @returns {string}
 */
export const transform = text => {
  return highlightKeywords(text, keys).trim();
};

window.addEventListener("load", function (event) {
  let code = document.querySelectorAll(".onloadCode");

  code.forEach(el => {
    let transformed = highlightKeywords(el.innerHTML, keys);

    el.innerHTML = transformed.trim();
  });
});
