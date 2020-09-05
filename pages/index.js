import React, { useState } from "react";
import  Schedule  from "../src/comp/Schedule.js";
import  FloatingActionButtons  from "../src/comp/FloatingActionButtons.js";
import  DiaryAppBar  from "../src/comp/DiaryAppBar.js";
import DiaryConst from "../src/util/DiaryConst.js";

const StaticDatePicker = () => {
  const [date, changeDate] = useState(new Date());

  return (
    <>
      <DiaryAppBar screen={DiaryConst.HOME_SCREEN}/>
      <Schedule/>
    </>
  );
};

export default StaticDatePicker;