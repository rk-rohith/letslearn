import React from 'react';

const ClassLoaderBlog = () => {
  return (
    <div>
      <h2>Understanding ClassLoader</h2>
      <p>The ClassLoader in Java is a part of the Java Runtime Environment that dynamically loads Java classes into the Java Virtual Machine. It is responsible for finding and loading class files at runtime.</p>
      <h3>Types of ClassLoaders</h3>
      <ul>
        <li>Bootstrap ClassLoader</li>
        <li>Extension ClassLoader</li>
        <li>System/Application ClassLoader</li>
      </ul>
      <h3>How ClassLoader Works</h3>
      <p>The ClassLoader works in a hierarchical manner, where each ClassLoader has a parent ClassLoader. When a class is requested, the ClassLoader first delegates the request to its parent before attempting to load the class itself.</p>
    </div>
  );
};

export default ClassLoaderBlog;