import themeProps from "./themeProps";
import BioCard from "./BioCard";

// TODO: la idea es buena y puede funcionar, repasar y mejorar todo esto
// seria bueno que no sea necesario andar especificando colores y que tome todo por defecto
const StyledBioCard = ({ color, textColor, ...rest }) => {

  return (
    <BioCard className={`w-full bg-${color} text-${textColor}`} color={"primary"} {...rest} />

  );
};

StyledBioCard.propTypes = {
  ...themeProps,
};

StyledBioCard.defaultProps = {
  color: "primary",
  textColor: "text-on-primary"
};

export default StyledBioCard;