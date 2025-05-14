import axios from "axios";
import { useState } from "react";

const ReviewForm = ({ movie_id, refreshMovie }) => {

    const initialValue = {
        name: '',
        vote: 1,
        text: ''
    }

    const [formData, setFormData] = useState(initialValue);

    const setFieldValue = (event) => {
        const { name, value } = event.target;

        let currentValue = value
        if (name === 'vote') currentValue = parseInt(value);

        setFormData((formData) => ({
            ...formData,
            [name]: currentValue,
        }))
    };

    const sendData = (e) => {
        e.preventDefault()

        axios.post(`http://localhost:3000/api/movies/${movie_id}/reviews`, formData)
            .then(response => {
                refreshMovie();
                setFormData(initialValue);
            })
            .catch(err => console.log(err))

    };

    return (
        <div className="card shadow-sm mt-4 border-0">
            <div className="card-header bg-warning text-black fw-semibold">
                Leave a Comment
            </div>
            <div className="card-body">
                <form onSubmit={sendData}>
                    <div className="mb-3">
                        <label htmlFor="reviewName" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="reviewName" name="name"
                            placeholder="Insert your name" value={formData.name} onChange={setFieldValue} required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="reviewVote" className="form-label">Your Vote</label>
                        <select className="form-select" id="reviewVote" name="vote"
                            value={formData.vote} onChange={setFieldValue} required >
                            <option value="1">⭐</option>
                            <option value="2">⭐ ⭐</option>
                            <option value="3">⭐ ⭐ ⭐</option>
                            <option value="4">⭐ ⭐ ⭐ ⭐</option>
                            <option value="5">⭐ ⭐ ⭐ ⭐ ⭐</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="reviewText" className="form-label">Your Comment</label>
                        <textarea className="form-control" id="reviewText" name="text" rows="3"
                            placeholder="Write something cool..." value={formData.text} onChange={setFieldValue} required />
                    </div>

                    <div className="text-end">
                        <button type="submit" className="btn btn-primary">Add Review ✍️</button>
                    </div>
                </form>
            </div>
        </div>

    )

};

export default ReviewForm;