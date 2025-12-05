import "react-vertical-timeline-component/style.min.css";

import pkg from "react-vertical-timeline-component";

// Import as a default module to avoid CommonJS issues

const VerticalTimeline = pkg.VerticalTimeline;
const VerticalTimelineElement = pkg.VerticalTimelineElement;

const TimelineCard = ({ timelineItem }) => (
  <VerticalTimelineElement
    contentStyle={{ border: "4px solid #915eff" }}
    contentArrowStyle={{ borderRight: "12px solid #915eff" }}
    date={timelineItem.date}
    dateClassName="!text-xl "
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
      <p className="!text-2xl" style={{ margin: 0 }}>
        <strong>{timelineItem.company_name}</strong>
      </p>
    </div>

    <ul className="mt-5 list-disc space-y-2">
      {timelineItem.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Timeline = ({ items }) => {
  return (
    <VerticalTimeline lineColor="#915eff" layout="1-column-left">
      {items.map((item, index) => (
        <TimelineCard key={index} timelineItem={item} />
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
