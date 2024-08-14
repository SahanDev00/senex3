import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import Searchbar from '../Components/Searchbar';
import { SearchContext } from '../SearchContext';

const Product = () => {
    const { setSearchQuery } = useContext(SearchContext);

    return (
        <div>
            <div className="flex w-full mx-auto mb-14 relative">
                <div className="">
                    <Sidebar />
                </div>
                <div className="flex-1 flex flex-col">
                    <Searchbar onSearch={setSearchQuery} products={[]} />
                    <div className="min-h-[1950px]">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
