import { useEffect } from 'react';

// make API calls and pass the returned data via dispatch
export const useFetch = (data, dispatch) => {
    useEffect(() => {
      dispatch({ type: 'FETCHING_IMAGES', fetching: true })
      fetch(`https://picsum.photos/v2/list?page=${data.page}&limit=10`)
        .then(data => data.json())
        .then(images => {
          dispatch({ type: 'STACK_IMAGES', images })
          dispatch({ type: 'FETCHING_IMAGES', fetching: false })
        })
        .catch(e => {
          // handle error
          dispatch({ type: 'FETCHING_IMAGES', fetching: false })
          return e;
        })
    }, [dispatch, data.page])
  }