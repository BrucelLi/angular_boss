export interface MessageListItemInterface {
  id: number;
  title: string;
  headImg: string;
  pos: string;
  tagType: number;
  tagName: string;
  desc: string;
  time: string;
  msgNum: string;
}

interface TagInterface {
  id: number;
  name: string;
}

export interface MessageInteractInterface {
  id: number;
  title: string;
  titleTag: string;
  price: string;
  company: string;
  companyDesc: string;
  distance: string;
  tag: TagInterface[];
  userHead: string;
  name: string;
  pos: string;
  msgTag: string;
}
