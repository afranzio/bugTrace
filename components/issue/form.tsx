'use client';
import React, { useState } from 'react'

// Dependencies
import { useRouter, useSearchParams  } from 'next/navigation';
import { TextArea, TextField } from '@radix-ui/themes';
import axios from 'axios';


const IssueForm = ({ requestedIssues }:any) => {
    const router = useRouter();
    const searchParams = useSearchParams()
    const id = Number(searchParams.get('id'));

    const [formData, setFormData] = useState(requestedIssues ? requestedIssues : {
        title: '',
        description: '',
    });

    console.log(requestedIssues);

    // Function to go to the previous page
    const goBack = () => {
        router.back();
    };

    const onSubmit = async (e: any) => {
        e.preventDefault(); // Prevent the page reload

        try {
            let response; 
            if(id){
                const urlWithParams = "/api/issues?id="+id;
                response = await axios.put(urlWithParams, formData);
            }else{
                response = await axios.post('/api/issues', formData);
            }
            if (response.status === 201) {
                console.log('Response from the server:', response.data);
                alert("Issue created successfully!");
                setFormData({
                    title: '',
                    description: '',
                });
            } else if(response.status === 202){
                console.log('Response from the server:', response.data);
                alert("Issue updated successfully!");
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
        setFormData((prevData: any) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12 mx-auto">
                        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                                <label htmlFor="username" className="block text-sm font-medium leading-6">
                                    Title
                                </label>
                                <TextField.Input value={formData.title} name='title' size="2" onChange={handleChange} className="block w-full border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 rounded-md" />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="description" className="block text-sm font-medium leading-6">
                                    Description
                                </label>
                                <TextArea value={formData.description} name='description' size="2" onChange={handleChange} className="block w-full border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 rounded-md" />
                                <p className="text-sm text-slate-500 leading-6">Detailed description will help to the slove quicker.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6 mx-auto">
                        <button type="button" onClick={goBack} className="text-sm font-semibold leading-6">
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

export default IssueForm