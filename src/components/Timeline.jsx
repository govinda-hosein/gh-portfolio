import React from "react";
import "react-vertical-timeline-component/style.min.css";

// Import as a default module to avoid CommonJS issues
import pkg from "react-vertical-timeline-component";

const VerticalTimeline = pkg.VerticalTimeline;
const VerticalTimelineElement = pkg.VerticalTimelineElement;

const TimelineCard = ({ timelineItem }) => (
  <VerticalTimelineElement
    contentStyle={{ border: "4px solid #915eff" }}
    contentArrowStyle={{ borderRight: "12px solid #915eff" }}
    date={timelineItem.date}
    iconStyle={{ background: timelineItem.iconBg, border: "1px solid #915eff" }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={timelineItem.icon}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h4 className="!text-highlight ">{timelineItem.title}</h4>
      <p className="!text-xl !font-semibold" style={{ margin: 0 }}>
        {timelineItem.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc space-y-2">
      {timelineItem.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[18px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Timeline = ({ items }) => {
  return (
    <VerticalTimeline lineColor="#915eff">
      {items.map((item, index) => (
        <TimelineCard key={index} timelineItem={item} />
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
