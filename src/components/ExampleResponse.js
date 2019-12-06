import React from "react";
import PropTypes from "prop-types";

import { DocPrismStyles } from "basics/NewDocPrism";
import { MethodTable } from "components/MethodTable";

export const ExampleResponse = ({ children, title = "Example" }) => (
  <MethodTable title={title}>
    <DocPrismStyles hasNoLineNumber />
    {children}
  </MethodTable>
);

ExampleResponse.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node.isRequired,
};
