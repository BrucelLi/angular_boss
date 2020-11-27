import {DiscoverNavInterface, DiscoverListInterface} from './dataInterface';

export const discoverNavData: DiscoverNavInterface[] = [
  {
    id: 1,
    name: '公司',
    img: 'icon-gongsi',
    star: 99
  },
  {
    id: 2,
    name: '热榜',
    img: 'icon-hot',
    star: 99
  },
  {
    id: 3,
    name: '等你来答',
    img: 'icon-jishitaolun',
    star: 99
  },
  {
    id: 1,
    name: '职场小课',
    img: 'icon-boshi',
    star: 99
  },
  {
    id: 1,
    name: '求职攻略',
    img: 'icon-ai-article',
    star: 99
  }
];

export const discoverListData: DiscoverListInterface[] = [
  {
    id: 1,
    userInfo: {
      id: 1,
      name: '杨四软',
      img: '../../../assets/img/timg.jpg',
      pos: '测试工程师',
      posYear: '9年'
    },
    tag: 'PHP面试题',
    title: '老波跟人跑了，有人和我一样的么？',
    // tslint:disable-next-line:max-line-length
    desc: '官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识，并且已经完全掌握了 Angular 及配套设施的正确开发方式。如果你刚开始学习前端或者 Angular ，将框架作为你的第一步可能不是最好的主意 —— 掌握好基础知识再来吧！',
    upNum: 10,
    commentNum: 20,
    isUp: true
  },
  {
    id: 1,
    userInfo: {
      id: 1,
      name: '赵艳',
      img: '../../../assets/img/timg.jpg',
      pos: '办公司文员',
      posYear: '3年'
    },
    tag: '同事相处',
    title: '同事老是用异样眼光看我，如何处理？',
    // tslint:disable-next-line:max-line-length
    desc: 'fuck every one, fuck every day',
    upNum: 50,
    commentNum: 66,
    isUp: false
  },
  {
    id: 1,
    userInfo: {
      id: 1,
      name: '张英',
      img: '../../../assets/img/timg.jpg',
      pos: 'JAVA工程师',
      posYear: '20年'
    },
    tag: '生活经历',
    title: '老公出轨了，可咋办？',
    // tslint:disable-next-line:max-line-length
    desc: 'fuck every one, fuck every day， --- 6666',
    upNum: 88,
    commentNum: 44,
    isUp: false
  }
];
