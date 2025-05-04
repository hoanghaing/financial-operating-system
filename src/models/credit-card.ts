export interface Card {
  owner: string;
  no: string;
  year: number;
  validDate: string;
  cvv: string;
  isFrozen?: boolean;
}
