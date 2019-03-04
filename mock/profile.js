import mockjs from 'mockjs';

const eduBackGround = [
  {
    id: '1',
    time: '2016.9—2018.7',
    school: '东北林业大学',
    profession: '计算机技术',
    education: '硕士',
  },
  {
    id: '2',
    time: '2012.9—2016.7',
    school: '长春理工大学',
    profession: '软件工程',
    education: '本科',
  },
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
      basicProgress,
    });
  },
};
