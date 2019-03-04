import React, { Component } from 'react';
import { connect } from 'dva';
import { Card, Divider } from 'antd';
import DescriptionList from '@/components/DescriptionList';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

const { Description } = DescriptionList;


@connect(({ profile, loading }) => ({
  profile,
  loading: loading.effects['profile/fetchBasic'],
}))
class BasicProfile extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    const { params } = match;

    dispatch({
      type: 'profile/fetchBasic',
      payload: params.id || '1000000000',
    });
  }

  render() {
    const { profile = {}, loading } = this.props;
    const {  userInfo = {} } = profile;
    return (
      <PageHeaderWrapper title="基础详情页" loading={loading}>
        <Card bordered={false}>
          <Divider style={{ marginBottom: 32 }} />
          <DescriptionList size="large" title="个人信息" style={{ marginBottom: 32 }}>
            <Description term="姓名">{userInfo.name}</Description>
            <Description term="性别">{userInfo.sex}</Description>
            <Description term="出生年月">{userInfo.birthday}</Description>
            <Description term="生源地">{userInfo.source}</Description>
            <Description term="政治面貌">{userInfo.political}</Description>
            <Description term="学历">{userInfo.education}</Description>
            <Description term="专业">{userInfo.profession}</Description>
            <Description term="毕业院校">{userInfo.school}</Description>
            <Description term="联系电话">{userInfo.tel}</Description>
            <Description term="电子邮箱">{userInfo.email}</Description>
            <Description term="通讯地址">{userInfo.addr}</Description>
          </DescriptionList>
          <Divider style={{ marginBottom: 32 }} />
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default BasicProfile;
