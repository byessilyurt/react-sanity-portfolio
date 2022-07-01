import { useRef, useEffect } from "react";
import Link from "next/link";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import client from "../client";
// Local Data
import data from "../yourData";

// TODO: Add a loading screen
// TODO: Add a 404 page
// todo: Add a footer
// todo: Add a ABOUT paragraph
// todo: redesign header section
// todo: redesign whole page
// todo: add other projects

export default function Home({ headline, projects, services, about }) {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const aboutText = about.body[0].children[0].text;
  const aboutTitle = about.title;

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    console.log(projects);
  }, [projects]);

  return (
    <div className="container mx-auto mb-10">
      <Header
        handleWorkScroll={handleWorkScroll}
        handleAboutScroll={handleAboutScroll}
      />
      <div className="laptop:mt-20 mob:mt-10">
        <h1 className="mt-5 text-8xl mob:text-3xl laptop:text-8xl mob:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5">
          {headline?.headerTaglineOne} <br />
          {headline?.name} <br />
          {headline?.headerTaglineTwo}
        </h1>
        <Socials className="mt-5 mob:mt-2 laptop:mt-5" />
      </div>
      <div
        className="mt-40 mob:mt-10 laptop:mt-40 mob:p-2 laptop:p-0"
        ref={workRef}
      >
        <h1 className="text-2xl text-bold">Work</h1>
        <div className="mt-10 mob:mt-5 laptop:mt-10 grid grid-cols-2 mob:grid-cols-1 laptop:grid-cols-2 gap-4">
          {projects?.map((project, index) => (
            <WorkCard
              key={index}
              name={project?.name}
              img={project?.imageURL}
              description={project?.description}
              onClick={() => window.open(project?.githubURL)}
              tags={project?.tags}
            />
          ))}
        </div>
      </div>
      <div className="mt-40 mob:mt-2 laptop:mt-40 mob:p-2 laptop:p-0">
        <h1 className="text-2xl text-bold">Services</h1>
        <div className="mt-10 grid grid-cols-2 mob:grid-cols-1 laptop:grid-cols-2 gap-6">
          {services?.map((service, index) => (
            <ServiceCard
              key={index}
              name={service?.title}
              description={service?.description}
            />
          ))}
        </div>
      </div>
      <div
        className="mt-40 mob:mt-2 laptop:mt-40 mob:p-2 laptop:p-0"
        ref={aboutRef}
      >
        {about && (
          <>
            <h1 className="text-2xl text-bold">{aboutTitle}</h1>
            <p className="m-5 mob:m-0 laptop:m-5 mob:mt-2 laptop:ml-0 ml-0 text-3xl mob:text-xl laptop:text-3xl w-3/5 mob:w-full laptop:w-3/5">
              {aboutText}
            </p>
          </>
        )}
      </div>
      <div className="mt-40 mob:mt-5 laptop:mt-40 mob:p-2 laptop:p-0">
        <h1 className="text-2xl text-bold">Contact</h1>
        <div className="mt-5">
          <Socials />
        </div>
      </div>
      <h1 className="text-sm text-bold mt-10 mob:mt-2 laptop:mt-10 mob:p-2 laptop:p-0">
        June 2022
      </h1>
    </div>
  );
}

export async function getStaticProps(context) {
  const headline = await client.fetch(
    `
    *[_type == "headline"][0]
  `
  );
  const projects = await client.fetch(
    `
    *[_type == "project"]
  `
  );

  const services = await client.fetch(
    `
    *[_type == "service"]
  `
  );
  const about = await client.fetch(
    `
    *[_type == "about"][0]
  `
  );
  return {
    props: {
      headline,
      projects,
      services,
      about,
    },
  };
}
