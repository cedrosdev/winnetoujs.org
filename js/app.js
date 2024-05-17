import { Winnetou } from "../node_modules/winnetoujs/src/winnetou.js";
import { logo, wow } from "./constructos/animation.js";
import { anim } from "../node_modules/win-animate/src/animate.js";

(async () => {
  let wowContainer = wow({}).create("#app").ids.wow;
  let winnetouLogo = logo({}).create(wowContainer);

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
