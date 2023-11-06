'use client';
import React, { useState } from 'react'

// Components
import IssueForm from '@/app/components/issue/form';

// Dependencies
import axios from 'axios';

const UpdateIssue = () => {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
    });

    const onSubmit = async (e: any) => {
        e.preventDefault(); // Prevent the page reload

        try {
            const response = await axios.put('http://localhost:3000/api/issues', formData);
            if (response.status === 202) {
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
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="container w-full md:w-1/2">
            <h2 className="text-xl border-b border-gray-900/10 pb-3 font-semibold leading-7 text-gray-900 subpixel-antialiased">Update Issue</h2>
            <IssueForm onSubmit={onSubmit} formData={formData} handleChange={handleChange} />
        </div>
    )
}

export default UpdateIssue