import React from 'react';

const MainHeader = () => {
    return (
        <div>
            <div className="px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
                <div className="max-w-xl mx-auto lg:max-w-screen-xl">
                    <div className="mb-16 lg:max-w-lg lg:mb-0">
                        <div className="max-w-xl mb-6">
                            <div>
                                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white bg-teal-600 uppercase rounded-full bg-teal-accent-400">
                                    Brand new
                                </p>
                            </div>
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                WelCome to SA Learning Academy.
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                Here we learn Programming Language. If you are expert of Programming Language then You buy our Course. We are always work together sothat we seccess. If you interested then you buy our course . Here are our Course List.
                            </p>
                        </div>
                        <div className="flex items-center">
                            <a
                                href="/courses"
                                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            >
                                View Courses
                            </a>
                            <a
                                href="/"
                                aria-label=""
                                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            >
                                Learn more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;