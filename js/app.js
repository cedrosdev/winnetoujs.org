import { Winnetou } from "../node_modules/winnetoujs/src/winnetou.js";
import { logo } from "./constructos/animation.js";
import { footerWow, logoText, navbar, wow } from "./constructos/wow.js";
import { anim } from "../node_modules/win-animate/src/animate.js";
import {
  buttonSnippet,
  codeDiv,
  divOutputSnippet,
  splash,
} from "./constructos/homeBody.js";

let wowContainer = wow({}).create("#app").ids.wow;
navbar().create(wowContainer);
footerWow().create(wowContainer);
logoText().create(wowContainer);
let winnetouLogo = logo({}).create(wowContainer);

(async () => {
  await anim(winnetouLogo.ids.pillar_1, "zoomIn");
  Winnetou.select(winnetouLogo.ids.pillar_2).css("visibility", "visible");
  await anim(winnetouLogo.ids.pillar_2, "zoomIn");
  Winnetou.select(winnetouLogo.ids.pillar_3).css("visibility", "visible");
  await anim(winnetouLogo.ids.pillar_3, "zoomIn");

  setTimeout(() => {
    Winnetou.select(winnetouLogo.ids.pillar_1).addClass("animation");
    Winnetou.select(winnetouLogo.ids.pillar_2).addClass("animation");
    Winnetou.select(winnetouLogo.ids.pillar_3).addClass("animation");
  }, 500);
})();

splash({
  text: "Try the simplicity of WinnetouJs, the indie way to create web applications",
}).create("#app");

let code1 = codeDiv({
  title: "Simple button increment",
  code: `
let clicks = 0;
let text = Winnetou.initMutable(\`You clicked me \${clicks} times.\`);
let btn = button({
  text: { mutable: text },
  onclick: Winnetou.fx(() => {
    clicks++;
    Winnetou.setMutable(text, \`You clicked me \${clicks} times.\`);
  }),
}).create(myDivOutput);`,
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
