import React from 'react';
import { useParams } from 'react-router-dom';
import JDKJVMJREBlog from './JDKJVMJREBlog';
import ClassLoaderBlog from './ClassLoaderBlog';

const JavaBasic = () => {
    const { subtopic } = useParams();
    
    const renderJavaContent = () => {
        switch (subtopic) {
        case 'jdkjvmjre':
            return <JDKJVMJREBlog />;
        case 'classloader':
            return <ClassLoaderBlog />;
        default:
            return <div>Java content not found.</div>;
        }
    };
    
    return (
        <div>
        <h1>{subtopic?.replace('-', ' ').toUpperCase()}</h1>
        {renderJavaContent()}
        </div>
    );
    }

export default JavaBasic;