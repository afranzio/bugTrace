'use client';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { TextArea, TextField } from '@radix-ui/themes';


const CreateIssue = () => {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
    });

    const router = useRouter();

    // Function to go to the previous page
    const goBack = () => {
        router.back();
    };


    const onSubmit = async (e: any) => {
        e.preventDefault(); // Prevent the page reload

        try {
            const response = await axios.post('http://localhost:3000/api/issues', formData);
            if (response.status === 201) {
                console.log('Response from the server:', response.data);
                alert("Issue created successfully!");
                setFormData({
                    title: '',
                    description: '',
                });
            } else {
                console.log('Response from the server:', response.data);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleChange = (e: any) => {
        const { name, value } = e.target;

        // Update the form data state when an input field changes
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className='container w-full md:w-1/2'>
            <form onSubmit={onSubmit}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12 mx-auto">
                        <h2 className="text-xl border-b border-gray-900/10 pb-3 font-semibold leading-7 text-gray-900 subpixel-antialiased">Create Issue</h2>
                        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                    Title
                                </label>
                                <TextField.Input value={formData.title} name='title' size="2" onChange={handleChange} className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                    Description
                                </label>
                                <TextArea value={formData.description} name='description' size="2" onChange={handleChange} className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                <p className="text-sm leading-6 text-gray-600">Detailed description will help to the slove quicker.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6 mx-auto">
                        <button type="button" onClick={goBack} className="text-sm font-semibold leading-6 text-gray-900">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateIssue