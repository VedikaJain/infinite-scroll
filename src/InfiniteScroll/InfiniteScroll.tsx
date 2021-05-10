import React, { useReducer, useRef } from 'react';
import { imgReducer, pageReducer } from '../reducers';
import { useFetch, useInfiniteScroll, useLazyLoading } from '../customHooks';
import { IImage } from './types';
import { useHistory } from 'react-router-dom';
import './InfiniteScroll.css';

export const InfiniteScroll = ({ setIsAuthenticated }: any) => {
  const history = useHistory();
  const [pager, pagerDispatch] = useReducer(pageReducer, { page: 0 })
  const [imgData, imgDispatch] = useReducer(imgReducer, { images: [], fetching: true, })

  let bottomBoundaryRef = useRef(null);
  useFetch(pager, imgDispatch);
  useLazyLoading('.card-img-top', imgData.images)
  useInfiniteScroll(bottomBoundaryRef, pagerDispatch);

  const logoutUser = () => {
    setIsAuthenticated(false);
    history.push('/');
  }
  return (
    <div>
      <div className='header'>
        <button onClick={logoutUser}>Logout</button>
      </div>
      <div id='images'>
        <div className="row">
          {imgData.images.map((image: IImage, index: number) => {
            const { author, download_url } = image
            return (
              <div key={index} className="card">
                <div className="card-body ">
                  <img
                    alt={author}
                    data-src={download_url}
                    className="card-img-top"
                    src={'https://picsum.photos/id/870/300/300?grayscale&blur=2'}
                  />
                </div>
                <div className="card-footer">
                  <p className="card-text text-center text-capitalize text-primary">{author}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {
        imgData.fetching && (
          <div className="text-center bg-secondary m-auto p-3">
            <p className="m-0 text-white">Getting images</p>
          </div>
        )
      }
      <div id='page-bottom-boundary' style={{ border: '1px solid red' }} ref={bottomBoundaryRef}></div>
    </div >
  );
}
