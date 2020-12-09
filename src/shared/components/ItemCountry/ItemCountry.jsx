import React, { useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryItem } from '../../../redux/countryItem/countryItemReducer';

const ItemCountry = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const country = useSelector(state => state.countryItem.item);

  useEffect(() => {
    dispatch(getCountryItem(id));
  }, [dispatch, id]);

  if (!country) {
    return null;
  }

  return (
    <div className="container">
      <button onClick={() => history.goBack()}>Home</button>
      <div
        className="dlab-bnr-inr overlay-black-middle"
        style={{
          backgroundImage: `url(${country.imageUrlCountry})`,
          backgroundSize: 'cover',
          height: '300px',
        }}>
        <div className="container">
          <div className="dlab-bnr-inr-entry">
            <h1 className="text-white">{country.name}</h1>
            <div className="breadcrumb-row" />
          </div>
        </div>
      </div>
      <div className="content-block">
        <div className="section-full content-inner bg-white portfolio-box">
          <div className="container">
            <div className="section-head text-black text-center m-b20">
              <h2 className="m-b10">{country.name}</h2>
              <p>
                ОПИСАНИЕ СТРАНЫ КАКИЕ ТО ФАКТОРЫ ТЕМПЕРАТУРНЫЙ РЕЖИМ ВОЗМОЖНО
              </p>
            </div>
            <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
              <Link to="./ListCountry">
                <img src={country.imageUrlCountry} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemCountry;
