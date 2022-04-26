import { useRouter } from 'next/router';
import React, { useState } from 'react';

const MenuList = ({item}) => {
    const [subOpen, setSubOpen] = useState(false);
    const {pathname} = useRouter
    const customStyle = {
      overflow: "hidden",
      transition: "all 0.3s",
      height: `${subOpen ? `${item.size}` : "43px"}`,
    };
  
    return (
        <>
             <li
              className={`nav-item mt-1 ${
                item.children?.length > 0 ? "has-sub open" : ""
              }`}
              style={item.children?.length > 0 ? customStyle : undefined}
            >
              <a
                onClick={ () => setSubOpen(!subOpen)}
                className="d-flex align-items-center"
                href={item.url}
              >
                {item.icon}
                <span
                  className="menu-title text-truncate"
                  data-i18n="Dashboards"
                >
                  {item.title}
                </span>
              </a>
              {item.children?.length > 0 && (
                <ul className="menu-content">
                  {item.children?.map((children, index) => (
                    <li key={index}>
                      <a
                        className="d-flex align-items-center"
                        href={children.url}
                      >
                        {children.icon}
                        <span
                          className="menu-item text-truncate"
                          data-i18n="List"
                        >
                          {children.title}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
        </>
    );
};

export default MenuList;