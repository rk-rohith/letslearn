import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const categories = [
    {
      title: "Java",
      items: [
        "JDKJVMJRE",
        "ClassLoader",
        "Strings",
        "Object oriented programming",
        "Collections",
      ],
    },
    {
      title: "Java8",
      items: ["Lambda Expressions", "Functional Interface", "Default Methods"],
    },
    { title: "Springboot", items: ["Item 3.1", "Item 3.2", "Item 3.3"] },
    { title: "Microservices", items: ["Item 4.1", "Item 4.2", "Item 4.3"] },
    { title: "DSA", items: ["Algorithms", "Patterns", "LeetCode Questions"] },
  ];

  const formatItem = (item) => {
    return item.toLowerCase()?.replace(/ /g, '-');
  };

  return (
    <div className="sidebar-container">
      <h2 className="sidebar-title">Categories</h2>
      <div className="sidebar">
        {categories.map((category, index) => (
          <div key={index} className="category">
            <div
              className="category-title"
              onClick={() => toggleDropdown(index)}
            >
              {category.title}
            </div>
            {openDropdown === index && (
              <div className="dropdown">
                {category.items.map((item, idx) => (
                  <Link
                    key={idx}
                    className="dropdown-item"
                    to={`/blog/${category.title.toLowerCase()}/${formatItem(item)}`}
                  >
                    {item}
                    < br />
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;