import {
  AreaInterface,
  HomeBtnDataInterface,
  BottomNavInterface,
  UserInfoInterface,
  ArticleInterface,
  SendMsgInterface, LogOutInterface
} from './dataInterface';

export const areaData: AreaInterface[] = [
  {
    label: '商圈',
    children: [
      {
        label: '成都',
        children: [
          {
            label: '全成都',
            children: []
          }
        ]
      },
      {
        label: '武侯区',
        children: [
          {
            label: '全武侯区',
            children: []
          },
          {
            label: '新会展中心',
            children: []
          },
          {
            label: '火车南站',
            children: []
          }
        ]
      }
    ]
  },
  {
    label: '地铁',
    children: [
      {
        label: '成都',
        children: [
          {
            label: '全成都',
            children: []
          }
        ]
      },
      {
        label: '1号线',
        children: [
          {
            label: '广都',
            children: []
          },
          {
            label: '四河',
            children: []
          }
        ]
      }
    ]
  }
];

export const bottomNavData: BottomNavInterface[] = [
  {
    id: 1,
    name: '职位',
    img: 'icon-zhiweisvg',
    star: 1
  },
  {
    id: 2,
    name: '发现',
    img: 'icon-faxian',
    star: 11
  },
  {
    id: 3,
    name: '消息',
    img: 'icon-xiaoxi',
    star: 111
  },
  {
    id: 4,
    name: '我的',
    img: 'icon-daohanglan-05',
    star: 0
  }
];

export const homeBtnData: HomeBtnDataInterface = {
  searchTag: [
    {id: 1, name: 'php工程师'},
    {id: 2, name: 'java工程师'},
    {id: 3, name: 'web工程师'},
    {id: 4, name: 'python工程师'},
  ],
  searchOrder: [
    {id: 1, name: '推荐'},
    {id: 2, name: '附近'},
    {id: 3, name: '最新'},
  ],
  searchFilter: [
    {id: 1, name: '成都'},
    {id: 2, name: '筛选'},
    {id: 3, name: '关键词'},
    {id: 4, name: '测试'},
  ]
};

export const userInfoData: UserInfoInterface[] = [
  {
    id: 1,
    name: 'Brucelli',
    age: '100',
    sex: '男',
    headImg: '',
    desc: '',
    pos: '全栈工程师',
    posYear: '5年'
  },
  {
    id: 2,
    name: '廖丽琼',
    age: '22',
    sex: '女',
    headImg: '',
    desc: '',
    pos: '幼师',
    posYear: '1年'
  }
];

export const logOutData: LogOutInterface = {logOutState: true};

export const articleData: ArticleInterface = {
  id: 1,
  name: 'userDesc',
  content: '<p>协议</p><p>隐私政策\n' +
    '\n' +
    '      我们重视用户的隐私。您在使用我们的服务时，我们可能会收集和使用您的相关信息。我们希望通过本《隐私政策》向您说明，在使用我们的服务时，我们如何收集、使用、储存和分享这些信息，以及我们为您提供的访问、更新、控制和保护这些信息的方式。本《隐私政策》与您所使用的服务息息相关，希望您仔细阅读，在需要时，按照本《隐私政策》的指引，作出您认为适当的选择。本《隐私政策》中涉及的相关技术词汇，我们尽量以简明扼要的表述，并提供进一步说明的链接，以便您的理解。\n' +
    '\n' +
    '      您使用或继续使用我们的服务，即意味着同意我们按照本《隐私政策》收集、使用、储存和分享您的相关信息。\n' +
    '\n' +
    '      如对本《隐私政策》或相关事宜有任何问题，请通过yeyuanshen@128xy.com与我们联系。\n' +
    '\n' +
    '      我们可能收集的信息</p>'
};

export const sendMsgData: SendMsgInterface = {sendState: true};
