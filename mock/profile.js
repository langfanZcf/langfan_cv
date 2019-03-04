import mockjs from 'mockjs';

const eduBackGround = [
  {
    id: '1',
    time: '2016.09—2018.07',
    school: '东北林业大学',
    profession: '计算机技术',
    education: '硕士',
  },
  {
    id: '2',
    time: '2012.09—2016.07',
    school: '长春理工大学',
    profession: '软件工程',
    education: '本科',
  },
];

const workExperience = [
  {
    id: '1',
    time: '2017.10-2018.02',
    cpName: '作业帮教育科技北京有限公司',
    position: '测试开发工程师',
    location: '北京',
    contentList: [{
      num: '1',
      content : '1.主要工作是白盒测试，接口测试，对项目代码进行阅读，查看日志，定位代码错 误位置信息，执行脚本，修改部分测试相关脚本。',
    }],
  },
  {
    id: '2',
    time: '2018.05-至今',
    cpName: '挖财网络技术有限公司',
    position: '数据研发工程师',
    location: '杭州',
    contentList: [
      {
      id: '1',
      content : '任职部门是数据运营技术部，主要负责业务代码的编写，主要使用语言java。',
    },
      {
        id: '2',
        content : '具有运营平台建设和资金业务的开发能力，完成运营活动平台的建设，其中涉及到实时计算 (spark，hbase，kafka)，并在项目中使用 dubbo，domino，以及技术平台中的任务调度中间件。',
      }
    ],
  }
];

const basicProgress = [
  {
    key: '1',
    time: '2017-10-01 14:10',
    rate: '联系客户',
    status: 'processing',
    operator: '取货员 ID1234',
    cost: '5mins',
  },
  {
    key: '2',
    time: '2017-10-01 14:05',
    rate: '取货员出发',
    status: 'success',
    operator: '取货员 ID1234',
    cost: '1h',
  },
  {
    key: '3',
    time: '2017-10-01 13:05',
    rate: '取货员接单',
    status: 'success',
    operator: '取货员 ID1234',
    cost: '5mins',
  },
  {
    key: '4',
    time: '2017-10-01 13:00',
    rate: '申请审批通过',
    status: 'success',
    operator: '系统',
    cost: '1h',
  },
  {
    key: '5',
    time: '2017-10-01 12:00',
    rate: '发起退货申请',
    status: 'success',
    operator: '用户',
    cost: '5mins',
  },
];

const advancedOperation1 = [
  {
    key: 'op1',
    type: '订购关系生效',
    name: '曲丽丽',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: '-',
  },
  {
    key: 'op2',
    type: '财务复审',
    name: '付小小',
    status: 'reject',
    updatedAt: '2017-10-03  19:23:12',
    memo: '不通过原因',
  },
  {
    key: 'op3',
    type: '部门初审',
    name: '周毛毛',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: '-',
  },
  {
    key: 'op4',
    type: '提交订单',
    name: '林东东',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: '很棒',
  },
  {
    key: 'op5',
    type: '创建订单',
    name: '汗牙牙',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: '-',
  },
];

const advancedOperation2 = [
  {
    key: 'op1',
    type: '订购关系生效',
    name: '曲丽丽',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: '-',
  },
];

const advancedOperation3 = [
  {
    key: 'op1',
    type: '创建订单',
    name: '汗牙牙',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: '-',
  },
];
const getProfileAdvancedData = {
  advancedOperation1,
  advancedOperation2,
  advancedOperation3,
};

const { Random } = mockjs;

export default {
  'GET /api/profile/advanced': getProfileAdvancedData,
  'GET /api/profile/basic': (req, res) => {
    const { id } = req.query;
    const application = {
      id,
      status: '已取货',
      orderNo: Random.id(),
      childOrderNo: Random.id(),
    };
    const userInfo = {
      name: '赵呈芳',
      sex:'女',
      birthday: '1993.07.23',
      source: '吉林',
      political : '中共党员',
      education: '硕士',
      profession : '计算机技术',
      school : '东北林业大学',
      tel: '15546360517',
      email : 'zcfzcf_yx@163.com',
      addr: '浙江省杭州市西湖区文新街道文一西路 149 号雅仕苑',
    };
    res.json({
      userInfo,
      application,
      eduBackGround,
      workExperience,
      basicProgress,
    });
  },
};
