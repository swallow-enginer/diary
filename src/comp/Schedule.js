import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  MonthView,
  Toolbar,
  DateNavigator,
  TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';
import { useRouter } from 'next/router';
import Util from "../util/Util.js";
import DiaryConst from "../util/DiaryConst.js";

const Schedule = () => {
  const [currentDate, setCurrentDate] = useState(Util.getToday("YYYY/MM/DD"));

  const TimeTableCell = ({...restProps}) => {
    const router = useRouter();
  
    const onClick = (e) => {
      router.push({
        pathname: DiaryConst.URL.REGISTER,
        query: { 
          date: Util.formatDate(restProps.startDate, "YYYY/MM/DD")
        },
      });
      return;
    }
  
    return (
      <MonthView.TimeTableCell
        onClick={onClick}
        {...restProps}
      >
      </MonthView.TimeTableCell>
    );
  };

    const onCurrentDateChange = (date) => {
      setCurrentDate(Util.formatDate(date, "YYYY/MM/DD"));
    }

  return (
    <Paper>
      <Scheduler
        local="ja_JP"
      >
        <ViewState
          currentDate={currentDate}
          onCurrentDateChange={onCurrentDateChange}
        />
        <Toolbar />
        <DateNavigator />
        <TodayButton />
        <MonthView
          timeTableCellComponent={TimeTableCell}
        />
      </Scheduler>
    </Paper>
  );
};
export default Schedule;