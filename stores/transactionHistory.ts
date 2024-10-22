import type { ITransactionInfoHistory } from "~/types";

export const useTransactionHistoryStore = defineStore("transactionHistory", {
  state: () => {
    return {
      transactions: [] as Array<ITransactionInfoHistory>,
      selectedTransacion: {} as ITransactionInfoHistory,
    };
  },
  actions: {
    setTransactions(transactions: any) {
      this.transactions = transactions;
    },
    setSelectedTransacion(transaction: ITransactionInfoHistory) {
      this.selectedTransacion = transaction;
    },
    getSelectedTransacion() {
      return this.selectedTransacion;
    },
  },
});
