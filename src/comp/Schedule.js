import * as React from 'react';
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


const TimeTableCell = ({...restProps}) => {
  const router = useRouter();


  const onClick = (e) => {
    router.push({
      pathname: DiaryConst.REGISTER_URL,
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

export default class Schedule extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentDate: '2018-07-17',
    };
  }

  render() {
    const { currentDate } = this.state;

    const onCurrentDateChange = (date) => {
      window.alert(date);
    }

    return (
      <Paper>
        <Scheduler
          local="ja_JP"
        >
          <ViewState
            currentDate={currentDate}
            defaultCurrentDate={currentDate}
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
  }
}