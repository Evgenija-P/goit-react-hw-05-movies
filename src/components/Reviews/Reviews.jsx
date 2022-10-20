import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BsFillPeopleFill } from 'react-icons/bs';

import { fetchReviews } from 'servises/api';
import { Loader } from '../Loader/Loader';
import { Title, List, Item, Wrapp, Topic } from './Reviews.styled';

export const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchReviews(movieId)
      .then(data => {
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

  return (
    <Wrapp>
      {isLoading && <Loader />}
      {reviews.length !== 0 ? (
        <List>
          {reviews.map(({ id, author, content }) => (
            <Item key={id}>
              <Topic>
                <BsFillPeopleFill size={28} color={'orange'} />
                {author}
              </Topic>
              <p> {content}</p>
            </Item>
          ))}
        </List>
      ) : (
        <Title>Sorry we don't have any reviews for this movie </Title>
      )}
    </Wrapp>
  );
};

// export default Reviews;
