import React from "react";

const TagColors = [
  "blue-text-gradient",
  "green-text-gradient",
  "pink-text-gradient",
];

const ProjectCard = ({ name, description, image, tags, links }) => {
  return (
    <div className="p-1 h-fit bg-highlight rounded-2xl">
      <div className="bg-white p-5 rounded-2xl sm:w-[400px] w-full">
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex m-3">
            {links.map((link, index) => (
              <a
                href={link.href}
                target="_blank"
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mx-1"
                key={index}
                title={link.title}
              >
                <img
                  src={link.icon}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-5">
          <h5 className="text-white font-bold">{name}</h5>
          <p className="mt-2 text-secondary text-[22px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <p
              key={index}
              className={`text-[20px] ${TagColors[index % TagColors.length]}`}
            >
              #{tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
