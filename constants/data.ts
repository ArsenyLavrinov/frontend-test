export const data = {
  myAccounts: [
    {
      bankName: "Т-Банк (Тинькофф)",
      accountNumber: "1234569898",
      balance: 143000,
      dollarBalance: 1322,
      bankLogo: "tinkoff.png",
    },
    {
      bankName: "Альфа-Банк",
      accountNumber: "1234569842",
      balance: 106540,
      dollarBalance: 1000,
      bankLogo: "alfabank.png",
    },
  ],
  transactionDetails: {
    9231: {
      id: "9231",
      type: "Поступление",
      amount: 43530,
      bank: "Т-Банк (Тинькофф)",
      from: "+7 (901) 871-09-12",
      to: "+7 (901) 871-09-12",
      toAmount: 143000,
      bankLogo: "tinkoff.png",
      finishTime: "2024.10.21 23:00:00",
      dateTransaction: "2024.06.23 18:34:00",
    },
  },
  chatMessages: [
    {
      from: "Чат поддержки",
      message: "Отлично",
      chatLogo: "Fint.svg",
      lastMessageTime: "2024.10.21 17:54:00",
      unreadCount: 2,
      chatId: 2,
    },

    {
      chatId: 1,
      from: "Системные уведомления",
      message: "проведен на +7 983 989 42 98",
      chatLogo: "Bell.svg",
      lastMessageTime: "2024.10.21 13:04:00",
      unreadCount: 1,
    },
  ],
  selectedChatMessages: [
    {
      from: "Me",
      messages: ["Нужна помошь с переводом"],
    },
    {
      from: "User",
      messages: [
        "С какой операцией вам нужна помощь?",
        "2392309 на 120$",
        "3920323 на 1239$",
      ],
    },
  ],
  transactionHistory: {
    userInfo: {
      sumDepositDollar: 1320,
      sumDeposit: 110240,
    },
    history: [
      {
        id: 239321,
        type: "Пополнение",
        from: "+7 (901) 871-09-12",
        sum: 12573,
        amount: 1573,
        date: "2023.07.20 19:00:00",
        fromBank: "Т-Банк (Тинькофф)",
        bankLogo: "tinkoff.png",
        success: true,
        statuses: [
          {
            date: "24.12.2024 19:02:00",
            description: "Пополнение создано",
            logo: "txCreated.svg",
          },
          {
            date: "24.12.2024 19:09:00",
            description: "Пополнение обрабатывается",
            logo: "txProccess.svg",
          },
          {
            date: "24.12.2024 19:12:00",
            description: "Пополнение выполнено",
            logo: "txEnd.svg",
          },
        ],
      },
      {
        id: 328293,
        type: "Пополнение",
        from: "+7 (901) 871-09-12",
        amount: 1573,
        sum: 12573,
        date: "2023.07.20 19:00:00",
        fromBank: "Т-Банк (Тинькофф)",
        bankLogo: "tinkoff.png",
        success: true,
        statuses: [
          {
            date: "24.12.2024 19:02:00",
            description: "Пополнение создано",
            logo: "txCreated.svg",
          },
          {
            date: "24.12.2024 19:09:00",
            description: "Пополнение обрабатывается",
            logo: "txProccess.svg",
          },
          {
            date: "24.12.2024 19:12:00",
            description: "Пополнение выполнено",
            logo: "txEnd.svg",
          },
        ],
      },
      {
        id: 328293,
        type: "Вывод",
        from: "+7 (901) 871-09-12",
        amount: 1573,
        sum: 12573,
        date: "2023.07.20 19:00:00",
        fromBank: "Т-Банк (Тинькофф)",
        bankLogo: "tinkoff.png",
        success: false,
        statuses: [
          {
            date: "2024.12.24 19:02:00",
            description: "Пополнение создано",
            logo: "txCreated.svg",
          },
          {
            date: "2024.12.24 19:09:00",
            description: "Пополнение обрабатывается",
            logo: "txProccess.svg",
          },
          {
            date: "2024.12.24 19:12:00",
            description: "Пополнение выполнено",
            logo: "txFail.svg",
          },
        ],
      },
    ],
  },
  accountInfo: {
    accountNumber: "tLPqNMJBWC9m72nUvuGXej5YcETwF8frdQSHKaA3kZzRV",
    avaliableWd: 21265,
    avaliadbleWdDollar: 250,
    freezed: 42530,
    freezedDollar: 500,
    sumDeposit: 2030,
  },
  pendingTransactions: [
    {
      id: "9231",
      type: "Поступление",
      amount: 42530,
      bank: "Т-Банк (Тинькофф)",
      through: "СБП",
    },
  ],
  profile: {
    email: "schooltalents@urfu.ru",
    password: "*******",
  },
  refferal: {
    code: "42669",
    link: "tLPqNMJBWC9m72nUvuGXej5YcETwF8frdQSHKaA3kZzRV",
    refferals: [
      {
        email: "schooltalents@urfu.ru",
        date: "24.05.2024",
      },
      {
        email: "schooltalents@urfu.ru",
        date: "24.04.2024",
      },
    ],
  },
};
