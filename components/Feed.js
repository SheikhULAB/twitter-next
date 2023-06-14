import { SparklesIcon } from '@heroicons/react/24/outline';
import React from 'react';
import Input from './Input';
import Post from './Post';

const Feed = () => {
    const posts = [
        {
            id: "1",
            name: "Sheikh Yeamin",
            username: "Yeamin96",
            userimg: "https://media.licdn.com/dms/image/D5603AQExi7Z-5ii5yQ/profile-displayphoto-shrink_800_800/0/1679237885954?e=1692230400&v=beta&t=fLMZAeE83n-0QCE1ReqBXiV6ekGHGLYzDIO2JueX5XE",
            img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80",
            text: "nice view",
            timestamp: "2 hours ago",
        },
        
        {
            id: "2",
            name: "Sheikh Yeamin",
            username: "Yeamin96",
            userimg: "https://media.licdn.com/dms/image/D5603AQExi7Z-5ii5yQ/profile-displayphoto-shrink_800_800/0/1679237885954?e=1692230400&v=beta&t=fLMZAeE83n-0QCE1ReqBXiV6ekGHGLYzDIO2JueX5XE",
            img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",
            text: "tree view",
            timestamp: "2 days ago",
        },

    ]
    return (
        <div className='xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px]
        sm:ml-[73px] flex-grow max-w-xl'>
           <div className='flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200'>
            <h2 className='text-lg sm:text-xl font-bold cursor-pointer'>Home</h2>
            <div className='hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9'>
                <SparklesIcon className='h-5' />
            </div>
           </div>

           <Input />

           {
            posts.map((post) => (
                <Post key={post.id}
                post={post}
                />
            ))
           }
        </div>
    );
};

export default Feed;