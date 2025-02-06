import React from "react";
import CountUp from "react-countup";

const NumberCounter = () => {
  return (
    <div className=" py-2">
      <div className="flex text-secondary justify-around gap-2" >
        <div className="flex flex-col items-center justify-center">
          <p className=" font-bold">
            <CountUp
              start={0}
              end={150}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <span>Expert Teachers</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-bold">
            <CountUp
              end={200}
              separator=","
              suffix="+"
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <span>School Bus</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-bold">
            <CountUp
              end={20394}
              separator=","
              suffix="+"
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <span>Alumni</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-bold">
            <CountUp
              end={1078}
              separator=","
              suffix="+"
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <span>Active students</span>
        </div>
      </div>
    </div>
  );
};

export default NumberCounter;
