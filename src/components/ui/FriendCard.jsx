import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaDownload, FaStar } from 'react-icons/fa6';

const FriendCard = ({ friend }) => {
    return (
        <Link href={`/friends/${friend.id}`} className="card bg-base-100 shadow-sm mb-12" >
      <figure className="">
        <Image src={friend.picture} alt={friend.name} height={200} width={200} className="h-[100px] w-auto rounded-full" />
      </figure>
      <div className="card-body text-center ">
        <h2 className='text-xl font-bold'>{friend.name}</h2>
        <p className='text-gray-600'>{friend.days_since_contact}d ago</p>
        <p className='px-5 py-1 rounded-full bg-cyan-200 w-fit mx-auto '>{friend.tags}</p>
        <p
        className={`px-5 py-1 max-w-fit rounded-full mx-auto ${
        friend.status === "overdue" ? "bg-red-500 text-white" : "bg-green-500 text-white"
        }`}>
        {friend.status}
        </p>
 
      </div>
    </Link>
    );
};

export default FriendCard;