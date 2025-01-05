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
        }
      },
      constructoString: () => obj.code(elementsToString)
    }
    component = obj.code(elementsToString);
    this._saveUsingMutable(`splash-win-${identifier}`, elements, options, splash_);
    return obj;
  }
} /**@private */
class splash2_ extends Constructos {

  // ========================================
  /**
   * 
   * @param {object} elements
   * @param {any} elements.text  
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
  <div id="splash2-win-${identifier}" class="splash2"><span>${(elements_?.text)}</span></div>
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
            splash2: `splash2-win-${identifier}`,
          },
        }
      },
      constructoString: () => obj.code(elementsToString)
    }
    component = obj.code(elementsToString);
    this._saveUsingMutable(`splash2-win-${identifier}`, elements, options, splash2_);
    return obj;
  }
} /**@private */
class startHere_ extends Constructos {

  // ========================================
  /**
   * 
   * @param {object} elements
   * @param {any} elements.onclick  
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
  <div class="startHere" id="startHere-win-${identifier}">
    <button onclick="${(elements_?.onclick)}">Start Here</button>
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
            startHere: `startHere-win-${identifier}`,
          },
        }
      },
      constructoString: () => obj.code(elementsToString)
    }
    component = obj.code(elementsToString);
    this._saveUsingMutable(`startHere-win-${identifier}`, elements, options, startHere_);
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
  <div id="codeDiv-win-${identifier}" class="codeDiv">
    <div class="_title">${(elements_?.title)}</div>

    <div class="_content">
      <div class="_result" id="result-win-${identifier}"></div>
      <div class="codeOutput">
        <pre><code>${(elements_?.code)}</code></pre>
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
        }
      },
      constructoString: () => obj.code(elementsToString)
    }
    component = obj.code(elementsToString);
    this._saveUsingMutable(`divOutputSnippet-win-${identifier}`, elements, options, divOutputSnippet_);
    return obj;
  }
} /**@private */
class myDiv_ extends Constructos {

  // ========================================
  /**
   * 
   * @param {object} elements
   * @param {any} elements.myDivStyle  
   * @param {any} [elements.content]  Set the text content of a div
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
  <div id="myDiv-win-${identifier}" style="${(elements_?.myDivStyle)}">
    ${(elements_?.content || "")}
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
            myDiv: `myDiv-win-${identifier}`,
          },
        }
      },
      constructoString: () => obj.code(elementsToString)
    }
    component = obj.code(elementsToString);
    this._saveUsingMutable(`myDiv-win-${identifier}`, elements, options, myDiv_);
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
        }
      },
      constructoString: () => obj.code(elementsToString)
    }
    component = obj.code(elementsToString);
    this._saveUsingMutable(`buttonSnippet-win-${identifier}`, elements, options, buttonSnippet_);
    return obj;
  }
} /**@private */
class myImg_ extends Constructos {

  // ========================================
  /**
   * 
   * @param {object} elements
   * @param {any} elements.myImgStyle  
   * @param {any} elements.myImgSrc  
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
  <img id="myImg-win-${identifier}" style="${(elements_?.myImgStyle)}" src="${(elements_?.myImgSrc)}" >
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
            myImg: `myImg-win-${identifier}`,
          },
        }
      },
      constructoString: () => obj.code(elementsToString)
    }
    component = obj.code(elementsToString);
    this._saveUsingMutable(`myImg-win-${identifier}`, elements, options, myImg_);
    return obj;
  }
} /**@private */
class extensionCard_ extends Constructos {

  // ========================================
  /**
   * 
   * @param {object} elements
   * @param {any} elements.onclickInstall  
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
  <div id="extensionCard-win-${identifier}" class="extensionCard">
    <div class="_left">
      <div class="glowBox">
        <div class="_1"></div>
        <div class="_2"></div>
        <div class="_3"></div>
      </div>
      <div class="_img">
        <img src="/images/extension.png" >
      </div>
    </div>
    <div class="_right">
      <div class="_title">Download the WinnetouJs official extension for Visual Studio Code</div>
      <div class="_text">
        Unlock all WinnetouJs power with the official extension for Visual Studio Code. It's free and open source. You will get:
        <ul>
          <li>Goto constructos: when press f12 over a constructo token, go to html source directly.</li>
          <li>
            Goto string: Use Ctrl + Shift + T to go to the string source of a constructo token.
          </li>
          <li>Create string: Use Ctrl + Shift + Y to create a new string entry over a string token in your code.</li>
          <li>Bundler View</li>
          <li>Bundles Size History View</li>
          <li>Strings View</li>
        </ul>
        <div class="_install">
          <button onclick="${(elements_?.onclickInstall)}">Install</button>
        </div>
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
            extensionCard: `extensionCard-win-${identifier}`,
          },
        }
      },
      constructoString: () => obj.code(elementsToString)
    }
    component = obj.code(elementsToString);
    this._saveUsingMutable(`extensionCard-win-${identifier}`, elements, options, extensionCard_);
    return obj;
  }
} /**@private */
class footer_ extends Constructos {

  // ========================================
  /**
   * 
   * @param {object} elements
   * @param {any} elements.year  
   * @param {any} elements.heart  
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
  <div id="footer-win-${identifier}" class="footer">
    <span>Copyright &copy; 2017-${(elements_?.year)} Cedros Development</span>
    <span>WinnetouJs and its plugins are shared under the MIT license.</span>
    <span>Made with ${(elements_?.heart)} by Pamela Sedrez</span>
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
            footer: `footer-win-${identifier}`,
          },
        }
      },
      constructoString: () => obj.code(elementsToString)
    }
    component = obj.code(elementsToString);
    this._saveUsingMutable(`footer-win-${identifier}`, elements, options, footer_);
    return obj;
  }
}

export const splash = new splash_().constructo;
export const splash2 = new splash2_().constructo;
export const startHere = new startHere_().constructo;
export const codeDiv = new codeDiv_().constructo;
export const divOutputSnippet = new divOutputSnippet_().constructo;
export const myDiv = new myDiv_().constructo;
export const buttonSnippet = new buttonSnippet_().constructo;
export const myImg = new myImg_().constructo;
export const extensionCard = new extensionCard_().constructo;
export const footer = new footer_().constructo;