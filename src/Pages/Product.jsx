import React, { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import Searchbar from '../Components/Searchbar';
import { SearchContext } from '../SearchContext';
import { Helmet } from 'react-helmet';

const Product = () => {
    const { setSearchQuery } = useContext(SearchContext);

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div>
            <Helmet><title>SENEX | Computer Parts, Computer Hardware & Computer Software</title></Helmet>
            <div className="flex w-full pt-28 mx-auto mb-14 relative">
                <div className="">
                    <Sidebar />
                </div>
                <div className="flex-1 flex flex-col">
                    <Searchbar onSearch={setSearchQuery} products={[]} />
                    <div className="min-h-[90vh]">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
