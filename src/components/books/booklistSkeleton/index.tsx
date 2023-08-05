import React from 'react';
import BookListSkeletonListItem from './Skeleton';

const DUMMY = Array(15).fill(null);

const BookListSkeleton = () => {
  return (
    <div>
      {DUMMY.map((dummy) => (
        <BookListSkeletonListItem />
      ))}
    </div>
  );
};

export default BookListSkeleton;
