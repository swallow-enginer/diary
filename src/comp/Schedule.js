import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  MonthView,
  Toolbar,
  DateNavigator,
  TodayButton,
  AppointmentForm,
} from '@devexpress/dx-react-scheduler-material-ui';
import  Util  from "../util/Util.js";


const TextEditor = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  if (props.type === 'multilineTextEditor') {
    return null;
  } else if (props.type === 'titleTextEditor') {
    return null;
  }
};

const RadioGroup= (props) => {
  return (
    <AppointmentForm.RadioGroup></AppointmentForm.RadioGroup>
  )
};

const Overlay= (props) => {
  return (
    <AppointmentForm.Overlay
    fullSize
    {...props}
    ></AppointmentForm.Overlay>
  )
};
const CommandButton= (props) => {
  return (
    <AppointmentForm.CommandButton>

    </AppointmentForm.CommandButton>
  )
};

const ResourceEditor= (props) => {
  return (
    <AppointmentForm.ResourceEditor>

    </AppointmentForm.ResourceEditor>
  )
};

const BooleanEditor = (props) => {
  return null
  // (
  //   <AppointmentForm.BooleanEditor>

  //   </AppointmentForm.BooleanEditor>
  // )
};

const Label = ({...restProps}) => {
  return (
    <AppointmentForm.Label></AppointmentForm.Label>
  )
};

const DateEditor = ({...restProps}) => {
  // eslint-disable-next-line react/destructuring-assignment

  return null;
};

const TimeTableCell = ({...restProps}) => {
  const onDoubleClick = (e) => {
    
  };

  return (
    <MonthView.TimeTableCell
      {...restProps}
      onDoubleClick = {onDoubleClick}
    >
    </MonthView.TimeTableCell>
  );
};

const BasicLayout = ({ onFieldChange, appointmentData, ...restProps }) => {
  const onCustomFieldChange = (nextValue) => {
    onFieldChange({ customField: nextValue });
  };

  const getDate = (appointmentData) => {
    return Util.formatDate(appointmentData.startDate, "YYYY/MM/DD")
  }

  return (
    <AppointmentForm.BasicLayout
      appointmentData={appointmentData}
      onFieldChange={onFieldChange}
      fullSize
      {...restProps}
    >
      <AppointmentForm.Label
        text="Custom Field"
        type="title"
      />
      <AppointmentForm.TextEditor
        value={getDate(appointmentData)}
        onValueChange={onCustomFieldChange}
        placeholder="Custom field"
      />
    </AppointmentForm.BasicLayout>
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

    return (
      <Paper>
        <Scheduler
          local="ja_JP"
        >
          <ViewState
            defaultCurrentDate={currentDate}
          />
          <Toolbar />
          <DateNavigator />
          <TodayButton />
          <MonthView
            timeTableCellComponent={TimeTableCell}
          />
          <AppointmentForm
            basicLayoutComponent={BasicLayout}
            textEditorComponent={TextEditor}
            dateEditorComponent={DateEditor}
            labelComponent={Label}
            booleanEditorComponent={BooleanEditor}
            resourceEditorComponent={ResourceEditor}
            commandButtonComponent={CommandButton}
            radioGroupComponent={RadioGroup}
            overlayComponent={Overlay}
            // messages={messages}
          />
        </Scheduler>
      </Paper>
    );
  }
}