import React from "react";
import ReactDOM from "react-dom";
import useAxios from "axios-hooks";

interface IConsumerCardProps {
    endpoint: string
}

const ConsumerCard: React.FC<IConsumerCardProps> = (props) => {
    const [{ data, loading, error }, refetch] = useAxios(props.endpoint);

    // TODO: disable on production
    console.log(data);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error!</div>;

    return (
        <div>
            {/* this doesnt work? Why? */}
            {/* <input onClick={refetch}>refetch</input> */}
            {/* <pre></pre> */}
            {JSON.stringify(data, null, 2)}
            
        </div>
    );
}

export default ConsumerCard