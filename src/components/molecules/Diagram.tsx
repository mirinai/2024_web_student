import { CSSProperties } from "react";
import ClassName from "../atom/ClassName";
import BeginDate from "../atom/BeginDate";
import BeginTime from "../atom/BeginTime";
import RestNum from "../atom/RestNum";

type TDiagram = {
  className: string;
  beginDate: {
    year: string;
    month: string;
    day: string;
  };
  restNum: number;
  beginTime: {
    hours: number;
    minutes: string;
  };
};

const Diagram = ({ className, beginDate, beginTime, restNum }: TDiagram) => {
  const style: CSSProperties = {
    display: "flex",
    flexDirection: "row",
  };
  return (
    <div style={style}>
      <ClassName name={className} />
      <BeginDate
        year={beginDate.year}
        month={beginDate.month}
        day={beginDate.day}
      />
      <RestNum num={restNum} />
      <BeginTime hours={beginTime.hours} minutes={beginTime.minutes} />
    </div>
  );
};
export default Diagram;
