import React from "react";
import "react-vertical-timeline-component/style.min.css";

// Import as a default module to avoid CommonJS issues
import pkg from "react-vertical-timeline-component";

const VerticalTimeline = pkg.VerticalTimeline;
const VerticalTimelineElement = pkg.VerticalTimelineElement;

const TimelineCard = ({ timelineItem }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={timelineItem.date}
    iconStyle={{ background: timelineItem.iconBg }}
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
      <h3 className="text-white text-[24px] font-bond">{timelineItem.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {timelineItem.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc space-y-2">
      {timelineItem.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Timeline = ({ items }) => {
  return (
    <VerticalTimeline lineColor="#1d1836">
      {items.map((item, index) => (
        <TimelineCard key={index} timelineItem={item} />
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
