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
  import: "const",
  export: "const",
  from: "let",
};

function highlightCode(code) {
  // Step 1: Replace strings with placeholders
  const strings = [];
  const stringRegex = /(['"])(?:(?=(\\?))\2.)*?\1/g;
  code = code.replace(stringRegex, match => {
    strings.push(match);
    return `___STRING${strings.length - 1}___`;
  });

  // Step 2: Replace keys with span elements
  const escapedKeys = Object.keys(keys).map(
    key => escapeRegExp(key)
    // key.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
  );
  const keysRegex = new RegExp(`(${escapedKeys.join("|")})`, "g");
  code = code.replace(
    keysRegex,
    match => `<span class="${keys[match.trim()]}">${match}</span>`
  );

  // Step 3: Restore strings with span elements
  code = code.replace(
    /___STRING(\d+)___/g,
    (_, index) => `<span class="string">${strings[index]}</span>`
  );

  return code;
}

/**
 * HIGHLIGHT CODE
 * @param {string} text
 * @returns {string}
 */
export const transform = text => {
  // return highlightKeywords(text, keys).trim();
  return highlightCode(text);
};

window.addEventListener("load", function (event) {
  let code = document.querySelectorAll(".onloadCode");

  code.forEach(el => {
    // let transformed = highlightKeywords(el.innerHTML, keys);
    let transformed = highlightCode(el.innerHTML);

    el.innerHTML = transformed.trim();
  });
});
