import { oneOf } from "prop-types";
const props = {
  color: oneOf(["primary", "secondary", "accent", "text-on-primary", "text-on-secondary"]),
};
export default props;