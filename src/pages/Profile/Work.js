/* eslint-disable react/jsx-indent */
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import React, { Component } from 'react';
import { Card,Table } from 'antd';
import styles from './Work.less';

@connect(({ profile, loading }) => ({
  profile,
  loading: loading.effects['profile/fetchBasic'],
}))

class Work extends Component{
  componentDidMount() {
    const { dispatch, match } = this.props;
    const { params } = match;

    dispatch({
      type: 'profile/fetchBasic',
      payload: params.id || '1000000000',
    });
  }

  render() {
    const { profile = {}, loading} =this.props;
    const {workExperience = []} = profile;
    const renderContent = (value, row, index) => {
      const obj = {
        children: value,
        props: {},
      };
      if (index === workExperience.length) {
        obj.props.colSpan = 0;
      }
      return obj;
    };
    const workColumns = [
      {
        title: '序号',
        dataIndex: 'id',
        key: 'id',
        width : 40,
        render: renderContent,
      },
      {
        title: '时间',
        dataIndex: 'time',
        key: 'time',
        width : 100,
        render: renderContent,
      },
      {
        title: '公司名称',
        dataIndex: 'cpName',
        key: 'cpName',
        width : 180,
        render: renderContent,
      },
      {
        title: '职位名称',
        dataIndex: 'position',
        key: 'position',
        width : 150,
        render: renderContent,
      },
      {
        title: '地点',
        dataIndex: 'location',
        key: 'location',
        width : 70,
        render: renderContent,
      },
      {
        title: '工作内容',
        dataIndex: 'content',
        key: 'content',
        render: renderContent,
      },
    ];
    return (
      <PageHeaderWrapper title="工作">
        <Card title="工作经历" style={{ marginBottom: 24 }} bordered={false}>
          <div className={styles.title}>工作经历</div>
          <Table
            style={{ marginBottom: 24 }}
            pagination={false}
            loading={loading}
            dataSource={workExperience}
            columns={workColumns}
            rowKey="id"
          />
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Work;
