import { Winnetou } from "../node_modules/winnetoujs/src/winnetou.js";
import { logo } from "./constructos/animation.js";
import { footerWow, logoText, navbar, wow } from "./constructos/wow.js";
import { anim } from "../node_modules/win-animate/src/animate.js";
import { splash } from "./constructos/homeBody.js";

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
  text: "Try the simplicity of WinnetouJS, the indie way to create web applications.",
}).create("#app");
