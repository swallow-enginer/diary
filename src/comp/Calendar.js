import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";

export default function StaticDatePicker() {
  const [date, changeDate] = useState(new Date());

  return (
      <DatePicker
        autoOk
        variant="static"
        openTo="date"
        value="2020/08/29"
        onChange={changeDate}
        disableToolbar="false"
      />
  );
};

export default StaticDatePicker;