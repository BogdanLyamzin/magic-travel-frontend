import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCountry } from '../../../redux/country/countryReducer';
import { useDispatch, useSelector } from 'react-redux';


const continents = ['Европа', 'Азия', 'Африка', 'Америка', 'Австралия'];

const sortBy = [
    { name: 'Popular', type: 'popular', order: 'desc' },
    { name: 'High to Low', type: 'priceMin', order: 'desc' },
    { name: 'Low to High', type: 'priceMin', order: 'asc' },
];

const ListsCountry = () => {

    const dispatch = useDispatch();

    const [continent, setContinent] = useState(null);
    const [sort, setSort] = useState('');
    const countryItems = useSelector((state) => state.country.items);

    useEffect(() => {
        dispatch(getCountry(continent, sort.type, sort.order));
    }, [continent, sort.type, sort.order]);

    return (
        <div
            className="section-full bg-white content-inner dlab-about-1 promotions"
            id="about-us">
            <div className="container">
                <div className="section-head text-center">
                    <h2 className="text-uppercase m-b0">TOP PLACES</h2>
                    <p className="font-18">BEST TRAVEL PACKAGES AVAILABLE</p>
                </div>
                <div className="row d-flex">
                    <div
                        className="col-md-8 col-sm-8 col-lg-9 form-group align-self-center text-left">
                        <button
                            className="site-button m-b5 mr-1"
                            onClick={() => setContinent(null)}>
                            Все
                        </button>
                        {continents.map((continent, index) => (
                            <button
                                className="site-button m-b5 mr-1"
                                onClick={() => setContinent(index)}>
                                {continent}
                            </button>
                        ))}
                    </div>
                    <div className="col-md-4 col-sm-4 col-lg-3 form-group">
                        <select
                            onChange={e => setSort(JSON.parse(e.target.value))}
                            className="form-control">
                            {sortBy.map(sort => (
                                <option
                                    value={JSON.stringify(sort)}>{sort.name}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="row" id="masonry">
                    {countryItems &&
                    countryItems.map((item, index) => (
                        <div
                            className="col-lg-4 col-md-6 col-sm-6 m-b30 card-container"
                            key={index}>
                            <div className="dlab-box">
                                <div className="dlab-media ">
                                    <Link to={`/ItemCountry/${item.id}`}>
                                        <img src={item.imageUrlCountry}
                                             alt="" />
                                    </Link>
                                    <div className="tr-price">
                                        <span>{item.priceMin} USD</span>
                                    </div>
                                </div>
                                <div
                                    className="dlab-info p-a20 border-1 text-center">
                                    <h4 className="dlab-title m-t0">
                                        <Link
                                            to={{
                                                pathname: '/ItemCountry',
                                                propsSearch: item,
                                            }}>
                                            {item.name}
                                        </Link>
                                    </h4>
                                    <p>{item.CountryDescription + ' ' + item.name}</p>
                                    <div className="tr-btn-info">
                                        <Link
                                            to={{
                                                pathname: '/ItemCountry',
                                                propsSearch: item,
                                            }}
                                            className="site-button radius-no">
                                            <i
                                                className="fa fa-location-arrow"
                                                aria-hidden="true"
                                            />
                                            Japan
                                        </Link>
                                        <Link
                                            to={{
                                                pathname: '/ItemCountry',
                                                propsSearch: item,
                                            }}
                                            className="site-button bg-primary-dark radius-no">
                                            <i className="fa fa-info-circle"
                                               aria-hidden="true" />{' '}
                                            Relax
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ListsCountry;
