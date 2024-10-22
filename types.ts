interface userInfo {
  isAuthenticated: boolean;
  email: string | null;
  password: string | null;
}

interface BankAccount {
  bankName: string;
  accountNumber: string;
  balance: number;
  dollarBalance: number;
  bankLogo: string;
}

interface ITransactionInfo {
  id: string;
  type: string;
  amount: number;
  bank: string;
  from: string;
  to: string;
  toAmount: number;
  bankLogo: string;
  finishTime: string;
  dateTransaction: string;
}

interface ITransactionInfoHistory {
  id: number;
  type: string;
  amount: number;
  fromBank: string;
  from: string;
  sum: number;
  success: boolean;
  bankLogo: string;
  statuses: Array<ITxStatus>;
  date: string;
}

interface ITxStatus {
  date: string;
  description: string;
  logo: string;
}

interface IChatInfo {
  from: string;
  message: string;
  chatLogo: string;
  lastMessageTime: string;
  unreadCount: number;
  chatId: number;
}

interface IChatMessage {
  from: string;
  messages: Array<string>;
}

export type {
  userInfo,
  BankAccount,
  ITransactionInfo,
  IChatInfo,
  IChatMessage,
  ITransactionInfoHistory,
};
