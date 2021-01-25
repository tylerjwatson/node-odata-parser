export interface ODataNode {
  type: LogicalOperator | string;
}

export type LogicalOperator =
  | "eq"
  | "ne"
  | "gt"
  | "ge"
  | "lt"
  | "le"
  | "and"
  | "or"
  | "not";

export interface ConditionalNode extends ODataNode {
  type: LogicalOperator;
  left: ODataNode;
  right: ODataNode;
}

export interface PropertyNode extends ODataNode {
  type: "property";
  name: string;
}

export interface LiteralNode extends ODataNode {
  type: "literal";
  value: any;
}

export interface FunctionCallNode extends ODataNode {
  type: "functioncall";

  /**
   * Gets the OData function name declared in this node, e.g. 'substringof',
   * 'startswith'
   */

  func: string;
  args: (LiteralNode | PropertyNode)[];
}

export interface BinaryExpressionNode extends ODataNode {
  type: "and" | "or";
  left: ODataNode;
  right: ODataNode;
}

export interface ODataQuery {
  $filter: ODataNode;
  $select: string[];
  $sort: string[][];
  $top: number;
  $skip: number;
}

export interface PegOptions {
  startRule: string;
}

declare function peg$SyntaxError(
  message: any,
  expected: any,
  found: any,
  location: any
): void;

declare class peg$SyntaxError {
  constructor(message: any, expected: any, found: any, location: any);
  message: any;
  expected: any;
  found: any;
  location: any;
  name: string;
}
declare namespace peg$SyntaxError {
  function buildMessage(expected: any, found: any): string;
}
declare function peg$parse(input: string, options?: Partial<PegOptions>): Partial<ODataQuery>;
export { peg$SyntaxError as SyntaxError, peg$parse as parse };
