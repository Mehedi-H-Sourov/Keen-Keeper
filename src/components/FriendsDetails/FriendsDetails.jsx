import Link from 'next/link';
import React from 'react';
import FriendCard from '../ui/FriendCard';




const friendsPromise = async function () {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  return data;
};


const FriendsDetails = async ({ from }) => {
    const friends = await friendsPromise();
    return (
        <div className='max-w-5xl mx-auto'>
            <div className="mb-8">
        <h2 className="font-bold text-2xl">
          Your Friends
        </h2>
       
      </div>
    
      <div className="grid grid-cols-4 gap-5">
        {friends
          .map((friend, ind) => {
            return <FriendCard friend={friend} key={ind} />;
          })}
      </div>
    
    </div>
  ); 
     
};

export default FriendsDetails;