import React from "react";
import ReactDOM from "react-dom";
import useAxios from "axios-hooks";

interface IQuoteCardProps {
    endpoint: string
}

const QuoteCard: React.FC<IQuoteCardProps> = (props) => {
    const [{ data, loading, error }, refetch] = useAxios(props.endpoint);

    // TODO: disable on production
    console.log(data);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error!</div>;

    return (
        <div>
            {JSON.stringify(data, null, 2)}
        </div>
    );
}

export default QuoteCard