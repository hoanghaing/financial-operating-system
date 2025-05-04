export interface TransactionItemType {
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  type: 'refund' | 'advertisement' | 'travel' | string;
  from: string;
  date: string;
  refundText: string;
  amount: string;
  isPositive: boolean;
}
