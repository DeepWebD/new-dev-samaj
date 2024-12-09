import React from "react";
import CountUp from "react-countup";

const NumberCounter = () => {
  return (
    <div className=" py-2">
      <div className="flex text-secondary justify-around">
        <div className="flex flex-col items-center justify-center">
          <p className="text-lg font-bold">
            <CountUp
              start={0}
              end={150}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p>Expert Teachers</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-lg font-bold">
            <CountUp
              end={200}
              separator=","
              suffix="+"
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p>School Bus</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-lg font-bold">
            <CountUp
              end={20394}
              separator=","
              suffix="+"
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p>Alumni</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-lg font-bold">
            <CountUp
              end={1078}
              separator=","
              suffix="+"
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p>Active students</p>
        </div>
      </div>
    </div>
  );
};

export default NumberCounter;
