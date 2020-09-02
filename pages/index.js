import React, { useState } from "react";
import  Schedule  from "../src/comp/Schedule.js";
import  FloatingActionButtons  from "../src/comp/FloatingActionButtons.js";
import  DiaryAppBar  from "../src/comp/DiaryAppBar.js";
// import  Const  from "../src/util/Const.js";

const StaticDatePicker = () => {
  const [date, changeDate] = useState(new Date());

  return (
    <>
      <DiaryAppBar/>
      <Schedule/>
      <FloatingActionButtons/>
    </>
  );
};

export default StaticDatePicker;