import {
  Winnetou
} from "../../node_modules/winnetoujs/src/winnetou.js";
import {
  Constructos
} from "../../node_modules/winnetoujs/src/constructos.js";



/**@private */
class wow_ extends Constructos {

  // ========================================
  /**
   * 
   * @param {object} [elements]
   * @param {any} [elements.class]  Define the class of wow
   * @param {object} [options]
   * @param {string} [options.identifier]
   */
  constructo = (elements, options) => {

    let identifier = this._mutableToString(options);
    identifier = this._getIdentifier(options ? identifier.identifier || 'notSet' : 'notSet');
    let elementsToString = this._mutableToString(elements);
    let component;
    let obj = {
      code(elements_) {
        return `
  <div class="wow ${(elements_?.class || "")}" id="wow-win-${identifier}"></div>
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
            wow: `wow-win-${identifier}`,
          },
        }
      },
      constructoString: () => obj.code(elementsToString)
    }
    component = obj.code(elementsToString);
    this._saveUsingMutable(`wow-win-${identifier}`, elements, options, wow_);
    return obj;
  }
} /**@private */
class logoText_ extends Constructos {

  // ========================================
  /**
   * 
   * @param {object} [options]
   * @param {string} [options.identifier]
   * @param {object} [oldOptions]
   * @param {string} [oldOptions.identifier]
   */
  constructo = (options, oldOptions) => {
    if (!options?.identifier && oldOptions?.identifier) {
      options = oldOptions;
    }


    let elements = {};

    let identifier = this._mutableToString(options);
    identifier = this._getIdentifier(options ? identifier.identifier || 'notSet' : 'notSet');
    let elementsToString = this._mutableToString(elements);
    let component;
    let obj = {
      code(elements_) {
        return `
  <div class="logoText" id="logoText-win-${identifier}">
    <span class="title">WinnetouJs 2</span>
    <span class="subLogoText">Simple. Strong. Powerful.</span>
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
            logoText: `logoText-win-${identifier}`,
          },
        }
      },
      constructoString: () => obj.code(elementsToString)
    }
    component = obj.code(elementsToString);
    this._saveUsingMutable(`logoText-win-${identifier}`, elements, options, logoText_);
    return obj;
  }
} /**@private */
class navbar_ extends Constructos {

  // ========================================
  /**
   * 
   * @param {object} [options]
   * @param {string} [options.identifier]
   * @param {object} [oldOptions]
   * @param {string} [oldOptions.identifier]
   */
  constructo = (options, oldOptions) => {
    if (!options?.identifier && oldOptions?.identifier) {
      options = oldOptions;
    }


    let elements = {};

    let identifier = this._mutableToString(options);
    identifier = this._getIdentifier(options ? identifier.identifier || 'notSet' : 'notSet');
    let elementsToString = this._mutableToString(elements);
    let component;
    let obj = {
      code(elements_) {
        return `
  <div id="navbar-win-${identifier}" class="navbar">
    <div class="inner">
      <div class="left">
        <a href="https://google.com">Cedros Development</a>
      </div>
      <div class="right">
        <a href="/docs/about">About</a>
        <a href="https://github.com/cedrosdev/winnetoujs" target="_blank">GitHub</a>
        <a href="/docs">Documentation</a>
        <a href="/api">API Reference</a>
        <a href="/docs/get-in-touch">Contact</a>
      </div>
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
            navbar: `navbar-win-${identifier}`,
          },
        }
      },
      constructoString: () => obj.code(elementsToString)
    }
    component = obj.code(elementsToString);
    this._saveUsingMutable(`navbar-win-${identifier}`, elements, options, navbar_);
    return obj;
  }
} /**@private */
class footerWow_ extends Constructos {

  // ========================================
  /**
   * 
   * @param {object} elements
   * @param {any} elements.getStarted  
   * @param {any} elements.icon  
   * @param {object} [options]
   * @param {string} [options.identifier]
   */
  constructo = (elements, options) => {

    let identifier = this._mutableToString(options);
    identifier = this._getIdentifier(options ? identifier.identifier || 'notSet' : 'notSet');
    let elementsToString = this._mutableToString(elements);
    let component;
    let obj = {
      code(elements_) {
        return `
  <div id="footerWow-win-${identifier}" class="footerWow">
    <div class="btn" onclick="${(elements_?.getStarted)}">Get started ${(elements_?.icon)}</div>
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
            footerWow: `footerWow-win-${identifier}`,
          },
        }
      },
      constructoString: () => obj.code(elementsToString)
    }
    component = obj.code(elementsToString);
    this._saveUsingMutable(`footerWow-win-${identifier}`, elements, options, footerWow_);
    return obj;
  }
}

export const wow = new wow_().constructo;
export const logoText = new logoText_().constructo;
export const navbar = new navbar_().constructo;
export const footerWow = new footerWow_().constructo;