import { oneOf } from "prop-types";
const props = {
  color: oneOf(["primary", "secondary", "text-on-primary"]),
};
export default props;