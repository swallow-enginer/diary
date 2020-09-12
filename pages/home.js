import React, { useState } from "react";
import  Schedule  from "../src/comp/Schedule.js";
import  DiaryAppBar  from "../src/comp/DiaryAppBar.js";
import DiaryConst from "../src/util/DiaryConst.js";

const home = () => {

  return (
    <>
      <DiaryAppBar screen={DiaryConst.SCREEN.HOME}/>
      <Schedule/>
    </>
  );
};

export default home;