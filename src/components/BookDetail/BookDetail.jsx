import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { addToStoredList, addToStoreWishList } from "../../Utility/addToDB";


const BookDetail = () => {
    const { bookId } = useParams();
    // console.log(bookId);

    const data = useLoaderData();
    // console.log(data);

    const id = parseInt(bookId)

    // console.log(typeof bookId, typeof id, typeof data[0].bookId);

    const book = data.find(book => book.bookId == id);
    // console.log(book);

    // bookId ,bookName,author,image,image,review,totalPages,rating,category,tags,publisher

    const navigate = useNavigate();
    const handleBackToBookFromBookDetail = () => {
        navigate(-1); // one step back
        // navigate (`/`); // direct path call
        // jekono ekta hoilei hobe
    }

    const handleMarkAsRead = (id) => {
        /**
               * 1. undderstand what to store  or save : => bokId
               * 2.where to store:
               * 3.array,list, collection:
               * 4.check: if the book is already in the readList.
               * 5. if not , than add the book to the list
               * 6. if yes, do not add the book
               */
              addToStoredList(id);
    }

    const handleWishList = (id) =>{
        addToStoreWishList (id);
    }
    return (
        <div>
            <h2>book Id :{bookId}</h2>
            <div className=" flex flex-col lg:flex-row mx-5 p-4 gap-2 ">
                <div className=" rounded-xl w-[573px] shadow-xl  p-[73px] ">
                    <img className="  w-[425px] h-[564px] mx-auto" src={book.image} alt={book.bookName} />
                </div>

                <div className="w-[573px]">
                    <h1 className="font-bold ">{book.bookName}</h1>
                    <h2>by: {book.author}</h2>
                    <br />
                    <div className="border-t-2 border-collapse"></div>

                    <h3>Category: {book.category}</h3>
                    <div className="border-t-2 border-collapse"></div>
                    <br />

                    <p><span className="font-bold">Review:</span>{book.review}</p>
                    <br />




                    <div className="flex justify-start gap-4 shadow-2xl rounded-xl">
                        <p className="font-bold">Tags:</p>
                        {

                            book.tags.map((tag, index) => <button key={index} className="btn btn-xs  text-green-600 ">#{tag}</button>)
                        }
                    </div> <br />
                    <div className="border-t-2 border-collapse"></div>
                    <br />
                    <div className="flex gap-14">
                        <div>
                            <p>Number of Pages:</p>
                            <p>Publisher:</p>
                            <p>Year of Publishing:</p>
                            <p>Rating:</p>
                        </div>
                        <div className="font-bold">
                            <p>{book.totalPages}</p>
                            <p>{book.publisher}</p>
                            <p>{book.yearOfPublishing}</p>
                            <p>{book.rating}</p>

                        </div>

                    </div><br />

                    {/* <div >
                        <div className=" flex">
                           <div>
                             <p>Number of Pages:</p>
                           </div>
                            <p className="font-bold">{book.totalPages}</p>
                        </div>
                        <div className="flex ">
                            <p>Publisher:</p>
                            <p className="font-bold">{book.publisher}</p>
                        </div>
                        <div className="flex ">
                            <p>Year of Publishing:</p>
                            <p className="font-bold">{book.yearOfPublishing}</p>
                        </div>
                        <div className="flex ">
                            <p>Rating:</p>
                            <p className="font-bold">{book.rating}</p>
                        </div>

                    </div> */}


                    <button onClick={() =>handleMarkAsRead (book.bookId)} className="btn btn-outline btn-accent m-4">Mark as Read</button>
                    <button onClick={() =>handleWishList(book.bookId)} className="btn  btn-accent">Add to WishList</button>
                </div>


            </div>
            <div className=" m-2 flex justify-center items-center ">
                <button className=" btn"
                    onClick={handleBackToBookFromBookDetail}>Go Home</button>
            </div>


        </div>
    );
};

export default BookDetail;