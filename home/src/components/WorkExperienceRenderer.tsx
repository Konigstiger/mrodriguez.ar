import "../index.css";
import TitledAlert from "./TitledAlert";

export default function WorkExperienceRenderer({ items }) {
    const workDetailList = items.map((item) => <p>{item.description}</p>);

    return (
    <TitledAlert
        title="Details" 
        message={workDetailList} />
        
      );
}
