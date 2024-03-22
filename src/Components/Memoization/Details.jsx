import React from 'react';

const Details = ({ user }) => {
    return (
        <div className="flex">
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                <div className="rounded-lg border-2 border-indigo-500 bg-transparent p-4 text-center shadow-lg dark:bg-gray-800">
                    <figure className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500 dark:bg-indigo-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-person-fill text-white dark:text-indigo-300" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                        </svg>
                        <figcaption className="sr-only">John Doe, Web Developer</figcaption>
                    </figure>
                    <h2 className="mt-4 text-xl font-bold text-indigo-600 dark:text-indigo-400">{user.name}</h2>
                    <p className="mb-2 text-gray-600 dark:text-gray-300">{user.age}</p>
                    <p className="mb-4 text-gray-600 dark:text-gray-300">{user.email}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;
