import { Winnetou } from "../node_modules/winnetoujs/src/winnetou.js";
import { wow } from "./constructos/animation.js";
import { anim } from "../node_modules/win-animate/src/animate.js";

(async () => {
  let w = wow({}).create("#app");
  await anim(w.ids.pillar_1, "zoomIn");
  Winnetou.select(w.ids.pillar_2).css("visibility", "visible");
  await anim(w.ids.pillar_2, "zoomIn");
  Winnetou.select(w.ids.pillar_3).css("visibility", "visible");
  await anim(w.ids.pillar_3, "zoomIn");

  setTimeout(() => {
    Winnetou.select(w.ids.pillar_1).addClass("animation");
    Winnetou.select(w.ids.pillar_2).addClass("animation");
    Winnetou.select(w.ids.pillar_3).addClass("animation");
  }, 500);
})();
