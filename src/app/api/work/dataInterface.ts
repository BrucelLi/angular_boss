interface WorkRequireInterface {
  id: number;
  name: string;
}

interface WorkCompanyInterface{
  id: number;
  name: string;
}

export interface WorksListItemInterface {
  id: number;
  name: string;
  price: string;
  hrImg: string;
  hrName: string;
  workArea: string;
  workCity: string;
  workRequire: WorkRequireInterface[];
  workCompany: WorkCompanyInterface[];
}
