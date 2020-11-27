export interface AreaInterface {
  label: string;
  children: AreaInterface[]|[];
}

export interface BottomNavInterface {
  id: number;
  name: string;
  img: string;
  star: number;
}

export interface SearchTagInterface {
  id: number;
  name: string;
}

export interface HomeBtnDataInterface {
  searchTag: SearchTagInterface[];
  searchOrder: SearchTagInterface[];
  searchFilter: SearchTagInterface[];
}


export interface UserInfoInterface {
  id: number;
  name: string;
  sex: string;
  age: string;
  headImg: string;
  desc: string;
  pos: string;
  posYear: string;
}

export interface ArticleInterface {
  id: number;
  name: string;
  content: string;
}

export interface SendMsgInterface {
  sendState: boolean;
}

export interface LogOutInterface {
  logOutState: boolean;
}
