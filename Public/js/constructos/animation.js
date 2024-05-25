import {
  Winnetou
} from "../../node_modules/winnetoujs/src/winnetou.js";
import {
  Constructos
} from "../../node_modules/winnetoujs/src/constructos.js";



/**@private */
class logo_ extends Constructos {

  // ========================================
  /**
   * 
   * @param {object} [elements]
   * @param {object} [options]
   * @param {any=} options.identifier
   */
  constructo = (elements, options) => {

    let identifier = this._mutableToString(options);
    identifier = this._getIdentifier(options ? identifier.identifier || 'notSet' : 'notSet');

    let elementsToString = this._mutableToString(elements);
    let component;
    let obj = {
      code(elements_) {
        return `
  <div class="logo" id="logo-win-${identifier}">
    <div class="pillar pillar_1" id="pillar_1-win-${identifier}">
      <div class="box box_1"></div>
      <div class="box box_2"></div>
      <div class="box box_3"></div>
    </div>
    <div class="pillar pillar_2" id="pillar_2-win-${identifier}">
      <div class="box box_1"></div>
      <div class="box box_2"></div>
      <div class="box box_3"></div>
    </div>
    <div class="pillar pillar_3" id="pillar_3-win-${identifier}">
      <div class="box box_1"></div>
      <div class="box box_2"></div>
      <div class="box box_3"></div>
    </div>
  </div>
`
      },

      /**
       * Create Winnetou Constructo        
       * @param  {object|string} output The node or list of nodes where the component will be created
       * @param  {object} [options] Options to control how the construct is inserted. Optional.
       * @param  {boolean} [options.clear] Clean the node before inserting the construct
       * @param  {boolean} [options.reverse] Place the construct in front of other constructs
       * @param {object} [options.vdom] Winnetou.vdom() fragment
       * @param {boolean} [options.replace] Replace a constructo
       */

      "create": (output, options) => {
        this.create(component, output, options);
        return {
          ids: {
            logo: `logo-win-${identifier}`,
            pillar_1: `pillar_1-win-${identifier}`,
            pillar_2: `pillar_2-win-${identifier}`,
            pillar_3: `pillar_3-win-${identifier}`,
          },
          code: obj.code(elementsToString),
        }
      },
      constructoString: () => obj.code(elementsToString)
    }
    component = obj.code(elementsToString);
    this._saveUsingMutable(`logo-win-${identifier}`, elements, options, logo_);
    return obj;
  }
}

export const logo = new logo_().constructo;