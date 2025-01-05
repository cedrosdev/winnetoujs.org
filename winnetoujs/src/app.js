import { Winnetou } from "winnetoujs";
import { logo } from "./constructos/animation.js";
import { footerWow, logoText, navbar, wow } from "./constructos/wow.js";
import { anim } from "../node_modules/win-animate/src/animate.js";
import {
  buttonSnippet,
  codeDiv,
  divOutputSnippet,
  footer,
  myDiv,
  myImg,
  splash,
  splash2,
  startHere,
  extensionCard,
} from "./constructos/homeBody.js";
import { transform } from "./code_highlighter.js";
import { icons_arrow_right_long, icons_heart } from "./constructos/_icons.js";

let wowContainer = wow({}).create("#app").ids.wow;
navbar().create(wowContainer);
footerWow({
  icon: icons_arrow_right_long().constructoString(),
  getStarted: Winnetou.fx(() => (location.href = "/docs/get-started")),
}).create(wowContainer);
logoText().create(wowContainer);
let winnetouLogo = logo({}).create(wowContainer);

// (async () => {
//   await anim(winnetouLogo.ids.pillar_1, "zoomIn");
//   Winnetou.select(winnetouLogo.ids.pillar_2).css("visibility", "visible");
//   await anim(winnetouLogo.ids.pillar_2, "zoomIn");
//   Winnetou.select(winnetouLogo.ids.pillar_3).css("visibility", "visible");
//   await anim(winnetouLogo.ids.pillar_3, "zoomIn");
//   setTimeout(() => {
//     Winnetou.select(winnetouLogo.ids.pillar_1).addClass("animation");
//     Winnetou.select(winnetouLogo.ids.pillar_2).addClass("animation");
//     Winnetou.select(winnetouLogo.ids.pillar_3).addClass("animation");
//   }, 500);
// })();

splash({
  text: "Elevate your web development with WinnetouJs - the alternative choice that makes building vanilla JavaScript applications simple, sleek, and stress-free.",
}).create("#app");

let code1 = codeDiv({
  title: "Simple button increment example",
  code: transform(`
let clicks = 0,
 text = Winnetou.initMutable(\`You clicked me \${clicks} times.\`),
 btn = button({
  text: { mutable: text },
  onclick: Winnetou.fx(() => {
    clicks++;
    Winnetou.setMutable(text, \`You clicked me \${clicks} times.\`);
  }),
}).create('#app');`),
}).create("#app").ids.result;

let output = divOutputSnippet().create(code1);
let clicks = 0;
let text = Winnetou.initMutable(`You clicked me ${clicks} times.`);
let btn = buttonSnippet({
  buttonText: { mutable: text },
  onclick: Winnetou.fx(() => {
    clicks++;
    Winnetou.setMutable(text, `You clicked me ${clicks} times.`);
  }),
}).create(output.ids.divOutputSnippet);

// ------------------------

splash({
  text: "Feel the strength of an integrated workflow to build web components: constructos",
}).create("#app");

let code2 = codeDiv({
  title: "Example of creating dynamic lists",
  code: transform(
    `// myComponents.html
&ltwinnetou&gt
  &ltdiv id=&quot[[myDiv]]&quot&gt
    {{?content%Set the text content of a div}}
  &lt/div&gt
&lt/winnetou&gt
&ltwinnetou&gt
  &ltimg id=&quot[[myImg]]&quot src=&quot{{myImgSrc}}&quot /&gt
&lt/winnetou&gt

// app.js
import { myDiv, myImg } from './constructos/myComponents';
for (let i = 0; i < 10; i++) {
  let card = myDiv().create('#app').ids.myDiv;
  myImg({
    myImgSrc: \`https://api.multiavatar.com/mary\${i}.png\`
  }).create(card);
  myDiv({
    content: "Mary " + i
  }).create(card);
}`
  ),
}).create("#app").ids.result;

let output2 = myDiv({
  myDivStyle: `
  width:100%;
  max-height:100%;
  overflow-y:scroll;
  padding:20px;
  `,
}).create(code2).ids.myDiv;

for (let i = 0; i < 10; i++) {
  let card = myDiv({
    myDivStyle:
      "display:flex;border:2px solid #777;padding:20px;border-radius:5px;margin:5px; align-items:center;",
  }).create(output2).ids.myDiv;

  myImg({
    myImgSrc: `../images/avatars/mary${i}.png`,
    myImgStyle: "width:50px;",
  }).create(card);

  myDiv({
    myDivStyle: "margin-left:10px;color:#ccc;",
    content: "Mary " + i,
  }).create(card);
}

// ------------------------

splash({
  text: "Get the power of not relying on jsx, typescript and/or any other type of javascript abstraction",
}).create("#app");

let code3 = codeDiv({
  title: "Using jsdoc to get type checking in webstorm and vscode",
  code: transform(`/**
  * Changes background color
  * @param {string} class_ Set class name to toggle
  */
 const toggleBg = class_ => Winnetou.select('#app').toggleClass(class_)
 
 button({
   buttonText: "Change my color",
   onclick: Winnetou.fx(() => toggleBg("alt")),
 }).create('#app');`),
}).create("#app").ids.result;

/**
 * Changes background color
 * @param {string} class_ Set class name to toggle
 */
const toggleBg = class_ => Winnetou.select(code3).toggleClass(class_);

buttonSnippet({
  buttonText: "Change my color",
  onclick: Winnetou.fx(() => toggleBg("alt")),
}).create(code3);

// ------------------------

splash({
  text: "Turn Visual Studio Code into an IDE with official WinnetouJs Extension developed by Cedros Development team",
}).create("#app");

extensionCard({
  onclickInstall: Winnetou.fx(() => {
    window.open(
      "https://marketplace.visualstudio.com/items?itemName=cedros-development.winnetoujs-vscode-framework"
    );
  }),
}).create("#app");

// ------------------------

splash({
  text: "Welcome to your new web development home. Your code flow, simplified.",
}).create("#app");

splash2({
  text: "You don't need to \"learn\" WinnetouJs, it's pure vanilla javascript. If you know js you know winnetou. Get started today.",
}).create("#app");

startHere({
  onclick: Winnetou.fx(() => {
    location.href = "/docs";
  }),
}).create("#app");
// ------------------------

footer({
  heart: icons_heart().constructoString(),
  year: new Date().getFullYear(),
}).create("#app");
