import React,{ Component } from 'react';
import { connect } from 'dva';
import { Card, Divider } from 'antd';
import DescriptionList from '@/components/DescriptionList';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

const { Description } = DescriptionList;

@connect(({ profile, loading }) => ({
  profile,
  loading: loading.effects['profile/fetchBasic'],
}))

class Other extends Component{
  componentDidMount() {
    const { dispatch, match } = this.props;
    const { params } = match;

    dispatch({
      type: 'profile/fetchBasic',
      payload: params.id || '1000000000',
    });
  }

  render(){
    const { profile = {}, loading } = this.props;
    const {  projectFour = {}  } = profile;
    return (
      <PageHeaderWrapper loading={loading}>
        <Card bordered={false} title="其他">
          <DescriptionList size="large" title="科研经历" style={{ marginBottom: 32 }}>
            <Description term="时间">{projectFour.time}</Description>
            <Description term="项目名称">{projectFour.projectName}</Description>
          </DescriptionList>
          <DescriptionList size="large" style={{ marginBottom: 32, marginRight : 15 }}>
            <Description term="期刊论文" style={{ width : 950, marginRight : 15 }}>{projectFour.projectContent}</Description>
          </DescriptionList>
          <Divider style={{ marginBottom: 32 }} />
          <DescriptionList size="large" title="获奖情况" style={{ marginBottom: 32 }}>
            <Description term="奖项一" style={{  marginRight : 15 }}> { "长春理工大学一等奖学金 (两次)" }</Description>
            <Description term="奖项二" style={{  marginRight : 15 }}> { "长春理工大学二等奖学金 (四次)" }</Description>
            <Description term="奖项三" style={{  marginRight : 15 }}> { "长春理工大学优秀毕业生论文" }</Description>
            <Description term="奖项四" style={{  marginRight : 15 }}> { "东北三省数学建模联赛二等奖" }</Description>
          </DescriptionList>
          <Divider style={{ marginBottom: 32 }} />
          <DescriptionList size="large" title="技能证书" style={{ marginBottom: 32 }}>
            <Description term="英语能力" style={{  marginRight : 15 }}> { "CET-4，具备良好的听说读写能力" }</Description>
            <Description term="证书一" style={{  marginRight : 15 }}> { "CCF 软件能力资格认证证书" }</Description>
            <Description term="证书二" style={{  marginRight : 15 }}> { "东北三省数学建模联赛证书" }</Description>
            <Description term="证书三" style={{  marginRight : 15 }}> { "普通话等级证书:二级甲等" }</Description>
          </DescriptionList>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Other;
