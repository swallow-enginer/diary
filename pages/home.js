import React, { useEffect } from "react";
import  Schedule  from "../src/comp/Schedule.js";
import  DiaryAppBar  from "../src/comp/DiaryAppBar.js";
import DiaryConst from "../src/util/DiaryConst.js";
import withAuth from '../src/comp/with-auth';

const home = ({user}) => {

  useEffect(async () => {
    const res = await fetch('/api/memo', {method:"GET"})
    await res.json()
  });


  return (
    <>
      <DiaryAppBar screen={DiaryConst.SCREEN.HOME}/>
      <Schedule/>
    </>
  );
};

export default withAuth(home);