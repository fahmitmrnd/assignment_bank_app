export interface AuthResData {
  address1: string;
  address2: string;
  bankAccountBalance: number;
  bankAccountNo: string;
  city: string;
  country: string;
  createDate: Date;
  email: string;
  id: string;
  idNo: string;
  lastUpdate: Date;
  loginId: string;
  name: string;
  postcode: string;
  state: string;
  role?: string;
}

export interface AuthReqData {
  address1: string;
  address2: string;
  city: string;
  country: string;
  email: string;
  idNo: string;
  loginId: string;
  name: string;
  postcode: string;
  state: string;
}
