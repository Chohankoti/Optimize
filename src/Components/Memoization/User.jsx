import React, { useState, useMemo } from 'react';
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

    const [users, setUsers] = useState(userList);
    const [counter, setCounter] = useState(0);
    const [newUser, setNewUser] = useState({});

     // const displayList = users.map(user => {
    //     console.log("No of time loading....");
    //     return <Details key={user.id} user={user} />;
    // });
    
    const displayList = useMemo(() => {
        return users.map(user => {
            console.log("No of time loading....");
            return <Details key={user.id} user={user} />;
        });
    }, [users]);

    const handleCounter = () => {
        setCounter(counter => counter + 1);
    }

    const handleAddUser = () => {
        // Assuming the newUser state contains the details of the new user
        // Here, you can add validation logic before adding the new user to the list
        setUsers(prevUsers => [...prevUsers, newUser]);
        setNewUser({}); // Resetting the newUser state after adding the user
    }

    return (
        <>
            <h1 className="w-full text-center text-2xl font-bold mb-4 mt-5">UserMemo Hook</h1>
            <div className="flex justify-center mb-4">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                    onClick={handleCounter}
                >
                    Increment value: {counter}
                </button>
            </div>
            <div className="flex justify-center mt-4">
                <input
                    type="number"
                    placeholder="Enter "id
                    value={newUser.id || ''}
                    onChange={e => setNewUser({ ...newUser, id: e.target.value })}
                    className="mr-2 px-2 py-1 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    placeholder="Enter Name"
                    value={newUser.name || ''}
                    onChange={e => setNewUser({ ...newUser, name: e.target.value })}
                    className="mr-2 px-2 py-1 border border-gray-300 rounded"
                />
                <input
                    type="number"
                    placeholder="Enter Age"
                    value={newUser.age || ''}
                    onChange={e => setNewUser({ ...newUser, age: parseInt(e.target.value) || '' })}
                    className="mr-2 px-2 py-1 border border-gray-300 rounded"
                />
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={newUser.email || ''}
                    onChange={e => setNewUser({ ...newUser, email: e.target.value })}
                    className="mr-2 px-2 py-1 border border-gray-300 rounded"
                />
                <button
                    onClick={handleAddUser}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded"
                >
                    Add User
                </button>
            </div>
            <div className="flex flex-row flex-wrap">
                {displayList}
            </div>
        </>
    );
}
