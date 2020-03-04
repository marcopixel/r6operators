import cheerio from "cheerio";
import classnames from "classnames";
import { IOperator } from "../interfaces/operator";

import iconData from "../icons.json";

export interface Operator extends IOperator {
  /** ID of the operator. */
  id: string;

  /** SVG icon object. */
  svg: {
    /** SVG contents without HTML tags. */
    contents: string;
    /** SVG attributes as an object. */
    attributes: {
      [key: string]: unknown;
    };
  };
  /**
   * Returns the current icon as an SVG string.
   * @param userAttributes Object containing additional element attributes.
   * @returns String containing the SVG element.
   */
  toSVG(userAttributes?: {}): string | Error;
}

/**
 * Convert attributes object to string of HTML attributes.
 * @param {Object} attributes - Object containing the attributes.
 * @returns {string}
 */
function attributesToString(attributes: object): string {
  return Object.keys(attributes)
    .map(key => `${key}="${attributes[key]}"`)
    .join(" ");
}

export default function Operator(id: string, contents: IOperator): Operator {
  // get attributes + values of the SVG string
  const $ = cheerio.load(`${iconData[id]}`);
  const attributes = {
    ...$("svg").get(0).attribs,
    ...{ class: `r6operators r6operators-${id}` }
  };

  // create new icon object
  const icon = {
    svg: { contents: $("svg").html(), attributes }
  };

  // eslint-disable-next-line unicorn/consistent-function-scoping
  function toSVG(userAttributes?: { [key: string]: unknown }): string | Error {
    // check if parameter is an object
    if (userAttributes && typeof userAttributes !== "object") {
      return new Error("The parameters are not supplied as an object.");
    }
    // create an object containing all attributes from the icon + user attributes
    const combinedAttributes = {
      ...this.svg.attributes,
      ...userAttributes,
      ...{
        class: classnames(
          this.svg.attributes.class,
          userAttributes === undefined ? "" : userAttributes.class
        )
      }
    };
    // return as a SVG string
    return `<svg ${attributesToString(combinedAttributes)}>${this.svg.contents}</svg>`;
  }

  return {
    id,
    ...contents,
    ...icon,
    toSVG
  };
}
