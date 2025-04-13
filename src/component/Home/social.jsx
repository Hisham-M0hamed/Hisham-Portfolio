import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export function Social() {
  const socialData = [
    {
      id: 1,
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/hisham-mohamed-56a953275/",
    },
    {
      id: 2,
      icon: <FaGithub />,
      url: "https://github.com/Hisham-M0hamed",
    },
    {
      id: 3,
      icon: <FaInstagram />,
      url: "https://www.instagram.com/hisham_mohamed_dev/",
    },
  ];
  return (
    <div>
      {socialData.map((data) => (
        <a key={data.id} href={data.url} target="_blank">
          {data.icon}
        </a>
      ))}
    </div>
  );
}
