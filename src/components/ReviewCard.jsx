import StarRating from "./StarRating";

const ReviewCard = ({ data }) => {

    const { text, vote, name } = data;

    return (
        <>
            <div className="card mt-4">
                <div className="card-body">
                    <p>{text}</p>
                    <p>Vote: <StarRating vote={vote} /></p>
                    <p>By: {name}</p>
                </div>
            </div>
        </>
    )
};

export default ReviewCard;