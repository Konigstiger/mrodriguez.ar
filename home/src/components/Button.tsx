import themeProps from "./themeProps";

// podria llamarse de otra forma, como StyledButton o algo asi si se deseara.
// podria tal vez esconder la implementacion de la libreria MUI interiormente, entre otras posibilidades.

// deberia probar con otros elementos html y de MUI, y extendiendo las propiedades, por ejemplo, de color: 
// bgColor, textColor

const Button = ({ children, color, ...rest }) => {
    return (
      <button className={`rounded-md bg-${color} hover:bg-${color}-light text-text-base px-3 py-1`} {...rest}>
        {children}
      </button>
    );
  };
  
  Button.propTypes = {
    ...themeProps,
  };
  
  Button.defaultProps = {
    color: "primary",
  };
  
  export default Button;