import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap';

import IntlMessages from 'helpers/IntlMessages';
import { LineChart } from 'components/charts';
import { ThemeColors } from 'helpers/ThemeColors';
import lineData from 'helpers/line-data';

const SalesChartCard = ({ data }) => {
  const colors = ThemeColors();

  const lineChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: '',
        data: lineData(data),
        borderColor: colors.themeColor1,
        pointBackgroundColor: colors.foregroundColor,
        pointBorderColor: colors.themeColor1,
        pointHoverBackgroundColor: colors.themeColor1,
        pointHoverBorderColor: colors.foregroundColor,
        pointRadius: 6,
        pointBorderWidth: 2,
        pointHoverRadius: 8,
        fill: false,
      },
    ],
  };

  return (
    <Card>
      <CardBody>
        <CardTitle>
          Orders
        </CardTitle>
        <div className="dashboard-line-chart">
          <LineChart data={lineChartData} />
        </div>
      </CardBody>
    </Card>
  );
};

export default SalesChartCard;
