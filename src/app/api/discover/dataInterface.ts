export interface DiscoverNavInterface {
  id: number;
  name: string;
  img: string;
  star: number;
}

interface HeaderInterface {
  id: number;
  img: string;
  name: string;
  pos: string;
  posYear: string;
}

export interface DiscoverListInterface {
  id: number;
  userInfo: HeaderInterface;
  tag: string;
  title: string;
  desc: string;
  upNum: number;
  commentNum: number;
  isUp: boolean;
}
