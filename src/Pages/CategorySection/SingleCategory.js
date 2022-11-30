import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Modal from './Modal';
import SingleCategoryCard from './SingleCategoryCard';

const SingleCategory = () => {
    const books=useLoaderData()
    console.log(books);
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
                {
                    books.map(book=><SingleCategoryCard 
                    key={book._id}
                    book={book}
                    >

                    </SingleCategoryCard>

                    )
                }
            </div>
            <Modal></Modal>
        </div>
    );
};

export default SingleCategory;