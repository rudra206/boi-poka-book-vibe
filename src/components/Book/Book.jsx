import React from "react";
// bookId ,bookName,author,image,image,review,totalPages,rating,category,tags,publisher

import { Link } from "react-router-dom";

const Book = ({ book }) => {
    return (
    <Link to={`/books/${book.bookId}`}>
     <div className="card bg-base-100 w-96 shadow-xl  p-6">
            <figure className="bg-blue-200 py-8 rounded-2xl ">
                <img
                    src={book.image}
                    className="h-[166px] w-[125px]"
                    alt={book.bookName} />
            </figure>
            <div className="card-body">
                <div className="flex justify-center gap-4 shadow-2xl rounded-xl">
                    {
                        book.tags.map(tag => <button className="btn btn-xs bg-green-100 text-green-600 ">{tag}</button>)
                    }
                </div>
                <h2 className="card-title">
                    {book.bookName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>By: {book.author}</p>

                <div className="border-t-2 border-dashed"></div>
                <div className="card-actions justify-between">
                    <div className="badge badge-outline">{book.category}</div>
                     <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-950" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500"  />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-800" />
                        </div>
                </div>
            </div>
        </div>
    </Link>   
    );
};

export default Book;