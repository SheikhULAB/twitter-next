import Image from 'next/image';
import React from 'react';
import SidebarMenuItem from './SidebarMenuItem';
import {HomeIcon} from '@heroicons/react/24/solid';
import {
    BellIcon,
    BookmarkIcon,
    ClipboardIcon,
    HashtagIcon,
    InboxIcon,
    UserIcon,
    EllipsisHorizontalCircleIcon,
    EllipsisHorizontalIcon
  } from "@heroicons/react/24/outline";

const Sidebar = () => {
    return (
        <div className='hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24'>
            <div className='hoverEffect p-0 hover:bg-blue-100 xl:px-1'>
                <Image width={50} height={50} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553" />
            </div>

            <div className='mt-4 mb-2.5 xl:start'>
                <SidebarMenuItem text="Home" Icon={HomeIcon} active />
                <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
                <SidebarMenuItem text="Notifications" Icon={BellIcon} />
                <SidebarMenuItem text="Messages" Icon={InboxIcon} />
                <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
                <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
                <SidebarMenuItem text="Profile" Icon={UserIcon} />
                <SidebarMenuItem text="More" Icon={EllipsisHorizontalCircleIcon} />
            </div>

            <button className='bg-blue-400 text-white rounded-full w-56
            h-12 font-bold shadow-md hover:brightness-95 text-lg
            hidden xl:inline'>Tweet</button>

            <div className='hoverEffect text-gray-700 flex items-center justify-center xl:justify-start
            '>
                <img src="https://media.licdn.com/dms/image/D5603AQExi7Z-5ii5yQ/profile-displayphoto-shrink_800_800/0/1679237885954?e=1692230400&v=beta&t=fLMZAeE83n-0QCE1ReqBXiV6ekGHGLYzDIO2JueX5XE" alt="user-image" className='h-10 w-10 rounded-full xl:mr-2' />
                <div className='leading-5 hidden xl:inline'>
                    <h4 className='font-bold'>Sheikh Yeamin</h4>
                    <p className='text-gray-500'>@SheikhYeamin96</p>
                </div>
               <EllipsisHorizontalIcon className='h-5 xl:ml-8 hidden xl:inline' />
            </div>
        </div>
    );
};

export default Sidebar;