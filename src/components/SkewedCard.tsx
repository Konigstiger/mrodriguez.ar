
export default function SkewedCard({ text }) {
    return (
        <div className="w-1/2 p-8 transform -skew-y-3 bg-tertiary border">
            <div className="transform skew-y-3">
                <h2 className="text-lg">Tailind Skew Cards</h2>
                <p>
                    {text}
                </p>
            </div>
        </div>

    );
}
