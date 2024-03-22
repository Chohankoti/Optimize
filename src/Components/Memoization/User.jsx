import React, { useState } from 'react';
import Details from './Details';

export default function User() {
    const userList = [
        { id: 1, name: 'user1', age: 25, email: 'user1@example.com' },
        { id: 2, name: 'user2', age: 30, email: 'user2@example.com' },
        { id: 3, name: 'user3', age: 28, email: 'user3@example.com' },
        { id: 4, name: 'user4', age: 32, email: 'user4@example.com' },
        { id: 5, name: 'user5', age: 29, email: 'user5@example.com' },
        { id: 6, name: 'user6', age: 27, email: 'user6@example.com' },
        { id: 7, name: 'user7', age: 31, email: 'user7@example.com' },
        { id: 8, name: 'user8', age: 26, email: 'user8@example.com' },
        { id: 9, name: 'user9', age: 33, email: 'user9@example.com' },
        { id: 10, name: 'user10', age: 34, email: 'user10@example.com' },
        { id: 11, name: 'user11', age: 39, email: 'user11@example.com' },
        { id: 12, name: 'user12', age: 37, email: 'user12@example.com' },
    ];

    const [users, setUser] = useState(userList);

    const displayList = users.map(user => {
        console.log("No of time loading....");
        return <Details key={user.id} user={user} />;
    });

    return (
        <div className="flex flex-row flex-wrap">
            <h1 className="w-full text-center text-2xl font-bold mb-4">UserMemo Hook</h1>
            {displayList}
        </div>
    );
}
