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

class Project extends Component{
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
    const {  projectOne = {} , projectTwo = {} ,projectThree ={} } = profile;
    return (
      <PageHeaderWrapper  loading={loading}>
        <Card bordered={false} title="项目经验" >
          <Divider style={{ marginBottom: 32 }} />
          <DescriptionList size="large" title="项目经验一" style={{ marginBottom: 32 }}>
            <Description term="时间">{projectOne.time}</Description>
            <Description term="项目名称">{projectOne.projectName}</Description>
            <Description term="应用技术" style={{ width : '400px'}}>{projectOne.technology}</Description>
          </DescriptionList>
          <DescriptionList size="large" style={{ marginBottom: 32, marginRight : 15 }}>
            <Description term="职责描述" style={{ width : 950, marginRight : 15 }}>{projectOne.duties}</Description>
          </DescriptionList>
          <DescriptionList size="large" style={{ marginBottom: 32, marginRight : 15 }}>
            <Description term="项目简介" style={{ width : 950,  marginRight : 15 }}>{projectOne.projectContent}</Description>
          </DescriptionList>
          <Divider style={{ marginBottom: 32 }} />
          <DescriptionList size="large" title="项目经验二" style={{ marginBottom: 32 }}>
            <Description term="时间">{projectTwo.time}</Description>
            <Description term="项目名称">{projectTwo.projectName}</Description>
            <Description term="应用技术" style={{ width : '400px'}}>{projectTwo.technology}</Description>
          </DescriptionList>
          <DescriptionList size="large" style={{ marginBottom: 32, marginRight : 15 }}>
            <Description term="职责描述" style={{ width : 950, marginRight : 15 }}>{projectTwo.duties}</Description>
          </DescriptionList>
          <DescriptionList size="large" style={{ marginBottom: 32, marginRight : 15 }}>
            <Description term="项目简介" style={{ width : 950,  marginRight : 15 }}>{projectTwo.projectContent}</Description>
          </DescriptionList>
          <Divider style={{ marginBottom: 32 }} />
          <DescriptionList size="large" title="项目经验三" style={{ marginBottom: 32 }}>
            <Description term="时间">{projectThree.time}</Description>
            <Description term="项目名称">{projectThree.projectName}</Description>
            <Description term="应用技术" style={{ width : '400px'}}>{projectThree.technology}</Description>
          </DescriptionList>
          <DescriptionList size="large" style={{ marginBottom: 32, marginRight : 15 }}>
            <Description term="职责描述" style={{ width : 950, marginRight : 15 }}>{projectThree.duties}</Description>
          </DescriptionList>
          <DescriptionList size="large" style={{ marginBottom: 32, marginRight : 15 }}>
            <Description term="项目简介" style={{ width : 950,  marginRight : 15 }}>{projectThree.projectContent}</Description>
          </DescriptionList>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Project;
