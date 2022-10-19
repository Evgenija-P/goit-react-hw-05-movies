import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { fetchReviews } from 'api';
import { Loader } from '../Loader/Loader';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchReviews(movieId)
      .then(data => {
        console.log(data.data.results);
        setReviews(data.data.results);
      })
      .catch(error => {
        console.log(error);
        toast.error('Oops, something went wrong. Repeat one more time!');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  if (!reviews) {
    return;
  }

  console.log(reviews);
  return (
    <div>
      <div>
        {isLoading && <Loader />}
        {reviews && (
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                {author} <p> {content}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
