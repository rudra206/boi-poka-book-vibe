import { useParams } from "react-router-dom";


const BookDetail = () => {
const {bookId} = useParams();
console.log(bookId);

    return (
        <div>
            <h2>book Id :{bookId}</h2>
            {/* <p>Review : {bookId.review}</p> */}
        </div>
    );
};

export default BookDetail;