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
    content:'1.主要工作是白盒测试，接口测试，对项目代码进行阅读，查看日志，定位代码错 误位置信息，执行脚本，修改部分测试相关脚本。',
  },
  {
    id: '2',
    time: '2018.05-至今',
    cpName: '挖财网络技术有限公司',
    position: '数据研发工程师',
    location: '杭州',
    content: '1.任职部门是数据运营技术部，主要负责业务代码的编写，主要使用语言java。' +
      '2.具有运营平台建设和资金业务的开发能力，完成运营活动平台的建设，其中涉及到实时计算 (spark，hbase，kafka)，并在项目中使用 dubbo，domino，以及技术平台中的任务调度中间件。',
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
    const projectOne = {
      time: '2018/05 – 至今',
      projectName:'trident 运营服务平台',
      technology: 'SpringBoot+Dubbo+Redis+MyBatis+HBase+Tidb+Kafka',
      projectContent: '1.营销大多有三部分内容，一是用户群体，二是资源，三是营销。本运营平台针对 三个方面，主要涉及的内容是，' +
        '用户内容的搭建，资源的搭建，以及活动的搭建。用户包括批 量用户和实时用户，资源的配置包括我们要使用的营销手段基础资源的配置，' +
        '搭建模块主要对卡卷，理财金，会员金币，现金红包，􏰁额卷等福利的创建，以及短信，app push，语音外呼， 微信消息推送等营销手段。' +
        '针对以上活动，如何能够通过批量发放和实时发放的手段，触达到 用户。针对触达用户，做合理的报表分析与数据统计，以便针对某种不同人群做不同的营销策 路。',
      duties : '1.主要负责运营活动的资源搭建模块，活动搭建模块，数据发放模块，数据统计模\n' +
        '块。资源模块应用技术点为 mybatis 与 spring boot 完成基本的增删改查操作，并且设计到 domino 小文件上传，活动搭建模块主要用到 dubbo 服务，来请求接口。' +
        '数据发放模块对于批量任务主要涉及任务调度，以及多线程，异步请求的机制，并且需要保证数据库的一致性。实时发放数据主要通过接收 kafka 消息，并且采用tidb的形式对数据进行存储，' +
        '并且采用Redis缓存机制来减少数据 库的压力。其中平台建设使用redalert监控机制对系统，对接口进行监控。',
    };
    const projectTwo = {
      time: '2016/10 - 2017/3',
      projectName:'大数据实验室网站',
      technology: 'JSP+JavaScript+Struts2+DIV+CSS',
      projectContent: '本项目是研究生实验室网站，主要实现功能有，实验室概况，研究队伍，学术活动，\n' +
        '科研成果，毕业生去向，后台管理员登录管理信息等，主要是对前端技术的了解。',
      duties : '1.参与项目的需求分析,数据库表涉及和项目构建。2.参与后台管理员模块登录之\n' +
        '后操作项的编写，参与编写的功能模块有:相册信息管理(主要是图片的上传);毕业生去向内容 增加，' +
        '删除，修改毕业生信息。复合界面弹出框功能的实现(dialog.js 文件弹出框)。' +
        '3.前台界 面 JSP 设计编写，以及 js 文件编写。',
    };
    const projectThree = {
      time: '2015/09 - 2016/7',
      projectName:'基于轨迹数据的交通数据处理系统的设计与实现',
      technology: 'HDFS+MapReduce+ECharts+JDBC',
      projectContent: '针对交通数据量巨大，传统数据库性能较弱的问题。利用分布式存储架构， MapReduce 进行数据预处理。' +
        '通过 HBase 数据库存储数据，Hive 数据仓库进行数据分析，建 立索引查询。' +
        '最后系统将统计分析的数据以系统报表的形式在 Web 端展示。',
      duties : '1.MapReduce 数据预处理与 HDFS 数据存储。' +
        '2.系统管理模块实现，系统角色权限 划分。' +
        '3.交通量情况汇总模块实现。4.Hadoop 集群的搭建。',
    };
    const projectFour = {
      time: '2016.08-2018.04',
      projectName:'交通轨迹数据的优化，路径通达时间预测，出租车运营特征可视化',
      projectContent: 'Jian Kang, Weipeng Jing, Chengfang Zhao. Easing Traffic Congestion: An Improved Clustering\n' +
        'Method For Sharing Bike Station Deployment[C]. CollaborateCom, 2017',
    };
    res.json({
      userInfo,
      application,
      eduBackGround,
      workExperience,
      basicProgress,
      projectOne,
      projectTwo,
      projectThree,
      projectFour,
    });
  },
};
