"use client"
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';
import News from './News';

const Widgets = () => {
    const [newsResults, setNewsResults] = useState([]);
    const [articleNum, setArticleNum] = useState(3);
    const [randomUsers, setRandomUsers] = useState([]);
    const [randomUserNum, setRandomUserNum]= useState(3)

    useEffect(() => {
      async function getData() {
        const newsApi = await fetch(
       "https://saurav.tech/NewsAPI/top-headlines/category/business/us.json"
     ).then((res) => res.json());
     setNewsResults(newsApi);
   }
   getData();
  }, []);

    useEffect(() => {
      async function getData() {
        const randomUsersResults = await fetch(
       "https://randomuser.me/api/?results=30&inc=name,login,picture"
     ).then((res) => res.json());
     setRandomUsers(randomUsersResults);
   }
   getData();
  }, []);


    return (
        <div className='xl:w-[600px] hidden lg:inline ml-8 space-y-5'>
            <div className='w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50'>
                <div className='flex items-center p-3 rounded-full relative'>
                    <MagnifyingGlassIcon className='h-5 z-50 text-gray-500' />
                    <input type="text" placeholder='Search Twitter' className='absolute inset-0 rounded-full
                    pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100' />
                </div>
            </div>

            <div className='text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]'>
                <h4 className='font-bold text-xl px-4'>What's Happening</h4>
                {
              newsResults.articles?.slice(0,articleNum)?.map((article) => (
                <News key={article.title} article={article} />
              ))
            }
            <button 
            onClick={() => setArticleNum(articleNum + 3)}
            className='text-blue-300 pl-4 pb-3 hover:text-blue-400'
            >Show More</button>
            </div> 

            <div className='sticky top-16 text-gray-700 space-y-3 bg-gray-100 pt-2 rounded-xl w-[90%] xl:w-[75%]'>
                <h4 className='font-bold text-xl px-4'>Who to Follow</h4>
                {
                    randomUsers.results?.slice(0,randomUserNum)?.map((randomUser) => (
                        <div key={randomUser?.login?.username} className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-200">
                            <img className='rounded-full'
                            src={randomUser?.picture?.thumbnail} alt="thumbnail" width="40" />
                            <div className='truncate ml-4 leading-5'>
                                <h4 className='font-bold hover:underline text-[14px] truncate'>{randomUser?.login?.username}</h4>
                                <h5 className='text-[13px] text-gray-500 truncate'>{randomUser?.name?.first + " " + randomUser?.name?.last}</h5>
                            </div>
                            <button 
                             className='ml-auto bg-black text-white rounded-full text-sm px-3.5 py-1.5 font-bold'>Follow</button>
                        </div>
                    ))
                }
                <button onClick={() => setRandomUserNum(randomUserNum + 3)}
                className='text-blue-300 pl-4 pb-3 hover:text-blue-400'>Show More</button>
            </div>
        
        </div>
    );
};

export default Widgets;
