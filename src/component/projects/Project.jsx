import React, { useState } from "react";
import "./project.css";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

import myProjects from "./ProjectsData";

// const myProjects = [
//   {
//     id: "1",
//     image: "src/imageproject/Add-to-cart.png",
//     title: "Add To ",
//     desc: "Section from E-Commerce project (Add to cart)",
//     category: ["css"],
//     gitLink: "https://github.com/Hisham-M0hamed/Add-To-Cart.git",
//     liveLink: "https://hisham-m0hamed.github.io/Add-To-Cart/",
//   },
//   {
//     id: "1",
//     image: "src/imageproject/Add-to-cart.png",
//     title: "Add To ",
//     desc: "Section from E-Commerce project (Add to cart)",
//     category: ["css"],
//     gitLink: "https://github.com/Hisham-M0hamed/Add-To-Cart.git",
//     liveLink: "https://hisham-m0hamed.github.io/Add-To-Cart/",
//   },
//   {
//     id: "1",
//     image: "src/imageproject/Add-to-cart.png",
//     title: "Add To ",
//     desc: "Section from E-Commerce project (Add to cart)",
//     category: ["css"],
//     gitLink: "https://github.com/Hisham-M0hamed/Add-To-Cart.git",
//     liveLink: "https://hisham-m0hamed.github.io/Add-To-Cart/",
//   },
//   {
//     id: "1",
//     image: "src/imageproject/Add-to-cart.png",
//     title: "Add To ",
//     desc: "Section from E-Commerce project (Add to cart)",
//     category: ["css"],
//     gitLink: "https://github.com/Hisham-M0hamed/Add-To-Cart.git",
//     liveLink: "https://hisham-m0hamed.github.io/Add-To-Cart/",
//   },
//   {
//     id: "1",
//     image: "src/imageproject/Add-to-cart.png",
//     title: "Add To ",
//     desc: "Section from E-Commerce project (Add to cart)",
//     category: ["css"],
//     gitLink: "https://github.com/Hisham-M0hamed/Add-To-Cart.git",
//     liveLink: "https://hisham-m0hamed.github.io/Add-To-Cart/",
//   },
//   {
//     id: "1",
//     image: "src/imageproject/Add-to-cart.png",
//     title: "Add To ",
//     desc: "Section from E-Commerce project (Add to cart)",
//     category: ["css"],
//     gitLink: "https://github.com/Hisham-M0hamed/Add-To-Cart.git",
//     liveLink: "https://hisham-m0hamed.github.io/Add-To-Cart/",
//   },
//   {
//     id: "1",
//     image: "src/imageproject/Add-to-cart.png",
//     title: "Add To ",
//     desc: "Section from E-Commerce project (Add to cart)",
//     category: ["css"],
//     gitLink: "https://github.com/Hisham-M0hamed/Add-To-Cart.git",
//     liveLink: "https://hisham-m0hamed.github.io/Add-To-Cart/",
//   },
//   {
//     id: "1",
//     image: "src/imageproject/Add-to-cart.png",
//     title: "Add To ",
//     desc: "Section from E-Commerce project (Add to cart)",
//     category: ["css"],
//     gitLink: "https://github.com/Hisham-M0hamed/Add-To-Cart.git",
//     liveLink: "https://hisham-m0hamed.github.io/Add-To-Cart/",
//   },
//   {
//     id: "1",
//     image: "src/imageproject/Add-to-cart.png",
//     title: "Add To ",
//     desc: "Section from E-Commerce project (Add to cart)",
//     category: ["css"],
//     gitLink: "https://github.com/Hisham-M0hamed/Add-To-Cart.git",
//     liveLink: "https://hisham-m0hamed.github.io/Add-To-Cart/",
//   },
//   {
//     id: "1",
//     image: "src/imageproject/Add-to-cart.png",
//     title: "Add To ",
//     desc: "Section from E-Commerce project (Add to cart)",
//     category: ["css"],
//     gitLink: "https://github.com/Hisham-M0hamed/Add-To-Cart.git",
//     liveLink: "https://hisham-m0hamed.github.io/Add-To-Cart/",
//   },
//   {
//     id: "1",
//     image: "src/imageproject/Add-to-cart.png",
//     title: "Add To ",
//     desc: "Section from E-Commerce project (Add to cart)",
//     category: ["css"],
//     gitLink: "https://github.com/Hisham-M0hamed/Add-To-Cart.git",
//     liveLink: "https://hisham-m0hamed.github.io/Add-To-Cart/",
//   },
//   {
//     id: "1",
//     image: "src/imageproject/Add-to-cart.png",
//     title: "Add To ",
//     desc: "Section from E-Commerce project (Add to cart)",
//     category: ["css"],
//     gitLink: "https://github.com/Hisham-M0hamed/Add-To-Cart.git",
//     liveLink: "https://hisham-m0hamed.github.io/Add-To-Cart/",
//   },
// ];
function Project() {
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);
  const handleClick = (buttonCategory) => {
    setCurrentActive(buttonCategory);
    const newArr = myProjects.filter((item) => {
      const finalFilter = item.category.find((el) => {
        return el === buttonCategory;
      });
      return finalFilter === buttonCategory;
    });
    setArr(newArr);
  };

  return (
    <section id="projects">
      <div className="top-section">
        <h3>Projects</h3>
        <p>Some of my Projects</p>
      </div>
      <div className="all-projects">
        <div className="project-section">
          <a
            onClick={() => {
              setCurrentActive("all");
              setArr(myProjects);
            }}
            className={currentActive === "all" ? "active" : null}
            id="select-project"
          >
            All Projects
          </a>
          <a
            onClick={() => {
              handleClick("css");
            }}
            className={currentActive === "css" ? "active" : null}
            id="select-project"
          >
            HTML & CSS
          </a>

          <a
            onClick={() => {
              handleClick("js");
            }}
            className={currentActive === "js" ? "active" : null}
            id="select-project"
          >
            JavaScript
          </a>

          <a
            onClick={() => {
              handleClick("react");
            }}
            className={currentActive === "react" ? "active" : null}
            id="select-project"
          >
            React
          </a>
        </div>

        {/* Add projects here */}
        <div className="projects">
          {arr.map((item) => {
            return (
              <div key={item.id} className="project">
                <div className="image">
                  <img src={item.image} />
                </div>
                <div className="details">
                  <h4>{item.title}</h4>
                  {/* <p>{item.desc}</p> */}
                </div>
                <div className="links">
                  <a href={item.gitLink} target="_blank">
                    <FaGithub /> Code
                  </a>
                  <a href={item.liveLink} target="_blank">
                    <FaLink /> Live
                  </a>
                </div>
              </div>
            );
          })}

          {/* Add more project components here */}
        </div>
      </div>
    </section>
  );
}

export default Project;
