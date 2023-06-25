import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';

export default function DeclinedRequests({ refresh, onRefresh }) {
  const [declinedRequestData, setDeclinedRequestData] = useState([]);

  const columns = [
    {
      title: 'Recipient',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Package Name',
      dataIndex: 'packageName',
      key: 'packageName',
    },
    {
      title: 'Pickup Date',
      dataIndex: 'pickupDate',
      key: 'pickupDate',
    },
  ];

  useEffect(() => {
    fetch('/api/get_declined_requests')
      .then((res) => res.json())
      .then((data) => setDeclinedRequestData(data));
    // eslint-disable-next-line no-sparse-arrays
  }, [, refresh, onRefresh]);

  return (
    <div className="flex flex-col gap-y-5">
      <h1 className="text-3xl font-bold">Declined Packages</h1>
      <Table dataSource={declinedRequestData} columns={columns} />
    </div>
  );
}

DeclinedRequests.propTypes = {
  refresh: PropTypes.bool.isRequired,
  onRefresh: PropTypes.func.isRequired,
};
