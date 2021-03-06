import React, { useEffect, useState } from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import IconCardsCarousel from 'containers/dashboards/IconCardsCarousel';
import RecentOrders from 'containers/dashboards/RecentOrders';
import SalesChartCard from 'containers/dashboards/SalesChartCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrdersAction } from '../../../redux/dashboard/default/actions';

const DefaultDashboard = ({ intl, match }) => {
  const { messages } = intl;
  const [iconData, setIconData] = useState({
    pending: 0,
    completed: 0,
    refundRequest: 0,
    comment: 0,
  });

  const { defaultData, loading, error } = useSelector(
    (state) => state.defaultApp
  );

  const dispatch = useDispatch();

  const getIconData = () => {
    let pending = 0;
    let completed = 0;
    if (!loading) {
      defaultData.orders.forEach((order) => {
        if (order.delivery.status === 'pending') {
          pending += 1;
        } else if (order.delivery.status === 'success') {
          completed += 1;
        }
      });
    }
    setIconData({
      ...iconData,
      pending,
      completed,
    });
  };

  useEffect(() => {
    dispatch(getAllOrdersAction());
  }, [dispatch]);

  useEffect(() => {
    getIconData(defaultData);
  }, [defaultData]);

  if (loading) <div>Loading...</div>;
  if (error) <div>{error}</div>;

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.default" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx lg="12" xl="6">
          <IconCardsCarousel data={iconData} />
          <Row>
            <Colxx md="12" className="mb-4">
              <SalesChartCard data={defaultData.orders} />
            </Colxx>
          </Row>
        </Colxx>
        <Colxx lg="12" xl="6" className="mb-4">
          <RecentOrders data={defaultData.orders} />
        </Colxx>
      </Row>
      {/* <Row>
        <Colxx lg="4" md="12" className="mb-4">
          <ProductCategoriesPolarArea chartClass="dashboard-donut-chart" />
        </Colxx>
        <Colxx lg="4" md="6" className="mb-4">
          <Logs />
        </Colxx>
        <Colxx lg="4" md="6" className="mb-4">
          <Tickets />
        </Colxx>
      </Row>
      <Row>
        <Colxx xl="6" lg="12" className="mb-4">
          <Calendar />
        </Colxx>
        <Colxx xl="6" lg="12" className="mb-4">
          <BestSellers />
        </Colxx>
      </Row>
      <Row>
        <Colxx sm="12" lg="4" className="mb-4">
          <ProfileStatuses />
        </Colxx>
        <Colxx md="6" lg="4" className="mb-4">
          <GradientCardContainer />
        </Colxx>
        <Colxx md="6" lg="4" className="mb-4">
          <Cakes />
        </Colxx>
      </Row>
      <SortableStaticticsRow messages={messages} />
      <Row>
        <Colxx sm="12" md="6" className="mb-4">
          <WebsiteVisitsChartCard />
        </Colxx>
        <Colxx sm="12" md="6" className="mb-4">
          <ConversionRatesChartCard />
        </Colxx>
      </Row>
      <Row>
        <Colxx lg="12" md="6" xl="4">
          <Row>
            <Colxx lg="4" xl="12" className="mb-4">
              <GradientWithRadialProgressCard
                icon="iconsminds-clock"
                title={`5 ${messages['dashboards.files']}`}
                detail={messages['dashboards.pending-for-print']}
                percent={(5 * 100) / 12}
                progressText="5/12"
              />
            </Colxx>
            <Colxx lg="4" xl="12" className="mb-4">
              <GradientWithRadialProgressCard
                icon="iconsminds-male"
                title={`4 ${messages['dashboards.orders']}`}
                detail={messages['dashboards.on-approval-process']}
                percent={(4 * 100) / 6}
                progressText="4/6"
              />
            </Colxx>
            <Colxx lg="4" xl="12" className="mb-4">
              <GradientWithRadialProgressCard
                icon="iconsminds-bell"
                title={`8 ${messages['dashboards.alerts']}`}
                detail={messages['dashboards.waiting-for-notice']}
                percent={(8 * 100) / 10}
                progressText="8/10"
              />
            </Colxx>
          </Row>
        </Colxx>
        <Colxx lg="6" md="6" xl="4" sm="12" className="mb-4">
          <AdvancedSearch messages={messages} />
        </Colxx>
        <Colxx lg="6" xl="4" className="mb-4">
          <SmallLineCharts />
          <TopRatedItems />
        </Colxx>
      </Row> */}
    </>
  );
};
export default injectIntl(DefaultDashboard);
