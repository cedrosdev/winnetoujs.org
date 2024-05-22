import {
  Winnetou
} from "../../node_modules/winnetoujs/src/winnetou.js";
import {
  Constructos
} from "../../node_modules/winnetoujs/src/constructos.js";



/**@private */
class splash_ extends Constructos {

  // ========================================
  /**
   * 
   * @param {object} elements
   * @param {any} elements.text 
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
  <div id="splash-win-${identifier}" class="splash"><span>${(elements_?.text)}</span></div>
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
            splash: `splash-win-${identifier}`,
          },
          code: obj.code(elementsToString),
        }
      },
      constructoString: () => obj.code(elementsToString)
    }
    component = obj.code(elementsToString);
    this._saveUsingMutable(`splash-win-${identifier}`, elements, options, splash_);
    return obj;
  }
} /**@private */
class codeDiv_ extends Constructos {

  // ========================================
  /**
   * 
   * @param {object} elements
   * @param {any} elements.title 
   * @param {any} elements.code 
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
  <div id="codeDiv-win-${identifier}" class="codeDiv">
    <div class="_title">${(elements_?.title)}</div>
    <div class="_content">
      <div class="_result" id="result-win-${identifier}"></div>
      <div class="_code">
        <pre><code class="javascript">${(elements_?.code)}</code></pre>
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
            codeDiv: `codeDiv-win-${identifier}`,
            result: `result-win-${identifier}`,
          },
          code: obj.code(elementsToString),
        }
      },
      constructoString: () => obj.code(elementsToString)
    }
    component = obj.code(elementsToString);
    this._saveUsingMutable(`codeDiv-win-${identifier}`, elements, options, codeDiv_);
    return obj;
  }
} /**@private */
class divOutputSnippet_ extends Constructos {

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
  <div class="divOutputSnippet" id="divOutputSnippet-win-${identifier}"></div>
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
            divOutputSnippet: `divOutputSnippet-win-${identifier}`,
          },
          code: obj.code(elementsToString),
        }
      },
      constructoString: () => obj.code(elementsToString)
    }
    component = obj.code(elementsToString);
    this._saveUsingMutable(`divOutputSnippet-win-${identifier}`, elements, options, divOutputSnippet_);
    return obj;
  }
} /**@private */
class buttonSnippet_ extends Constructos {

  // ========================================
  /**
   * 
   * @param {object} elements
   * @param {any} elements.onclick 
   * @param {any} elements.buttonText 
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
  <button onclick="${(elements_?.onclick)}" class="buttonSnippet" id="buttonSnippet-win-${identifier}">
    ${(elements_?.buttonText)}
  </button>
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
            buttonSnippet: `buttonSnippet-win-${identifier}`,
          },
          code: obj.code(elementsToString),
        }
      },
      constructoString: () => obj.code(elementsToString)
    }
    component = obj.code(elementsToString);
    this._saveUsingMutable(`buttonSnippet-win-${identifier}`, elements, options, buttonSnippet_);
    return obj;
  }
}

export const splash = new splash_().constructo;
export const codeDiv = new codeDiv_().constructo;
export const divOutputSnippet = new divOutputSnippet_().constructo;
export const buttonSnippet = new buttonSnippet_().constructo;