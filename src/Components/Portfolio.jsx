/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "How to Prevent Image Caching in React.js and Next.js",
    description:
      "Several times when we are building an application we need to add user images such as profile pictures, thumbnails or any other image use-case",
    url: "https://kirtanchandak.hashnode.dev/how-to-prevent-image-caching-in-reactjs-and-nextjs",
  },
  {
    title: "Kirtan's 2022 Wrap-up",
    description:
      "2022 was a rollercoaster. A year of learning and exploring for me.",
    url: "https://kirtanchandak.hashnode.dev/kirtan2022",
  },
  {
    title: "Portfolio Site",
    description:
      "Created from Next.js and MDX",
    url: "https://kirtanchandak.vercel.app/",
  },
  {
    title: "How I won ₹50,000 at my first-ever hackathon in my First Year!!",
    description:
      "Hackathon! Hackathon!! Hackathon!!! I used to hear this word everywhere on YouTube, Twitter",
    url: "https://kirtanchandak.hashnode.dev/smart-india-hackthon",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
