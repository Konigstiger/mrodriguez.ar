import { oneOf } from "prop-types";
const props = {
  color: oneOf([
    "primary",
    "primary-light",
    "primary-dark",
    "secondary",
    "secondary-light",
    "secondary-dark",
    "tertiary",
    "tertiary-light",
    "tertiary-dark",    
    "accent-primary",
    "accent-secondary",
    "text-on-primary",
    "text-on-secondary"]),
};
export default props;