import '../index.css';

export default function WorkExperienceCard(props) {
    return (
        <div>
        <p>{props.title}</p>
        <p>{props.dateStart} - {props.dateEnd}</p>
        </div>
    );
}



