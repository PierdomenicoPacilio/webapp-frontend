import StarRating from "./StarRating";

const ReviewCard = ({ data }) => {

    const { text, vote, name } = data;

    return (
        <>
            <div className="card mt-4 shadow-sm border-0">
                <div className="card-body">
                    <p className="mb-2 fst-italic">"{text}"</p>
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <span className="fw-bold me-2">Vote:</span>
                            <StarRating vote={vote} />
                        </div>
                        <div className="text-muted small">– {name}</div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ReviewCard;