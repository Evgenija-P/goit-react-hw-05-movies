import { toast } from 'react-toastify';
import React, { useState, useEffect } from 'react';
import { fetchFilmsDetails } from 'api';
import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  console.log(id);

  useEffect(() => {
    setIsLoading(true);
    fetchFilmsDetails()
      .then(data => {
        console.log(data);
        // const { results, total_results } = data.data;
        // console.log(results);
      })
      .catch(error => {
        console.log(error);
        // toast.error('Oops, something went wrong. Repeat one more time!');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <p>MovieDetails text</p>
      {/* <Outlet /> */}
    </div>
  );
};
