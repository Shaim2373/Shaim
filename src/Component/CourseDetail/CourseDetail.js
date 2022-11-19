import React from 'react';
import jsPDF from 'jspdf';
import { Button } from "@material-tailwind/react";
import { Link, useLoaderData } from 'react-router-dom';
const ref = React.createRef();

const CourseDetail = () => {
    const course = useLoaderData();
    console.log(course);
    const { _id, course_name, course_photo, price03, Paragrap, Instructor, Duration, Enroll } = course;
    const pdfGenerate = () => {
        var doc = new jsPDF('landscape', 'px', 'a4', 'false');
        doc.setFont('Helvertica', 'bold')
        doc.text(20, 20, "Name : " + course_name, )
        doc.text(20, 30, "Details information : " + Paragrap,)
        doc.save('file.pdf')
    }
    return (
        <div id='root'>

            <div ref={ref} className="px-4 w-9/12 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 shadow-2xl container">
                <div className="sm:max-w-sm sm:mx-auto lg:max-w-full">
                    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
                        <a href="/" aria-label="Article">
                            <img
                                src={course_photo}
                                className="object-cover w-7/12 h-7/12 p-5 mx-auto rounded"
                                alt=""
                            />
                        </a>
                        <div className="py-5">
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                <p className="text-2xl font-bold leading-5">{course_name}</p>
                            </a>
                            <p className="mb-4 text-gray-700">
                                {Paragrap}
                            </p>
                            <p className='text-md mb-4 text-red-600 font-bold'>Course Fee : {price03}</p>
                            <p className='text-md mb-4 text-indigo-600 font-bold'>Instructor name : {Instructor}</p>
                            <p className='text-md mb-4 font-bold'>Already Enrolled : {Enroll}</p>
                            <p className='text-md'>Duration: {Duration}</p>
                            <div>
                                <Link to={`/checkout/${_id}`}>
                                    <button className='mt-5 px-8 py-4 rounded-lg text-lg font-semibold bg-teal-300 mr-6'>Get Premium Access</button>
                                </Link>
                                <Link to='/courses'>
                                    <button className='mt-5 px-8 py-4 rounded-lg text-lg font-semibold bg-blue-300 mr-6'>View all Course</button>
                                </Link>

                                <Button variant="outlined" data-aos="zoom-in" onClick={pdfGenerate} title="Open options" type="button" className='hover:dark:text-violet-400 mt-5 px-8 py-4 rounded-lg text-lg font-semibold mr-6'>
                                    <span className='flex align-middle'><p className='mr-1'>Download Pdf</p> <p className='mt-1 ml-1'></p></span>
                                </Button>




                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CourseDetail;