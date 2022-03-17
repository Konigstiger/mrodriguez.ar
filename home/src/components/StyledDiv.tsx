import themeProps from "./themeProps";

const StyledDiv = ({ children, color, textColor, ...rest }) => {
    return (
      <div className={`w-full bg-${color} text-${textColor}`} {...rest}>
        {children}
      </div>
    );
  };
  
  StyledDiv.propTypes = {
    ...themeProps,
  };
  
  StyledDiv.defaultProps = {
    color: "primary",
    textColor: "text-on-primary"
  };
  
  export default StyledDiv;