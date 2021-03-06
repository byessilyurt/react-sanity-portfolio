import React, { useEffect } from "react";

const WorkCard = ({ img, name, description, onClick, tags }) => {
  useEffect(() => {
    console.log(tags);
  }, []);

  return (
    <div
      className="overflow-hidden cursor-pointer rounded-lg p-4 mob:p-2 laptop:p-4 first:ml-0"
      onClick={onClick}
    >
      <div
        className="overflow-hidden rounded-lg transition-all ease-out duration-300 hover:scale-95 mob:h-48"
        style={{ height: "600px" }}
      >
        <img alt={name} className="h-full w-full object-cover" src={img}></img>
      </div>
      <div className="mt-5 mb-3 flex justify-between items-center">
        <h1 className="text-3xl font-medium">{name ? name : "Project Name"}</h1>
      </div>
      <h3 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h3>
      <div className="mt-2 flex justify-start items-center">
        {tags
          ? tags.map((tag, index) => (
              <h2
                className="text-sm text-grey-300 mr-1  opacity-40 widest text-md"
                key={index}
              >
                {tag}
              </h2>
            ))
          : null}
      </div>
    </div>
  );
};

export default WorkCard;
