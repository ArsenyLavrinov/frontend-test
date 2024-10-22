import type { ITransactionInfo } from "~/types";

export const useTransactionStore = defineStore("transaction", {
  state: () => {
    return {
      transactions: [] as Array<ITransactionInfo>,
      selectedTransacion: {} as ITransactionInfo,
    };
  },
  actions: {
    setTransactions(transactions: any) {
      this.transactions = transactions;
    },
    setSelectedTransacion(transaction: ITransactionInfo) {
      this.selectedTransacion = transaction;
    },
    getSelectedTransacion() {
      return this.selectedTransacion;
    },
  },
});
