import { useEffect, useReducer } from "react";
import Header from "./Header";
import Loader from "./Loader";
import Error from "./Error";
import Main from "./Main";
import StartScreen from "./StartScreen";
import AccountScreen from "./AccountScreen";
import DebtInquiry from "./DebtInguiry";
import TransactionHistory from "./TransactionHistory";
import WithdrawScreen from "./WithdrawScreen";
import Deposit from "./Deposit";
import LoanApplication from "./LoanApplication";
import TransferScreen from "./TransferScreen";

const initialState = {
  users: [],
  status: "loading",
  selectedUser: null,
  transactionHistory: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        users: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "startApp":
      return {
        ...state,
        status: "active",
      };
    case "setUser":
      return {
        ...state,
        selectedUser: action.payload,
      };
    case "updateBalance":
      return {
        ...state,
        selectedUser: {
          ...state.selectedUser,
          bakiye: state.selectedUser.bakiye + action.payload,
        },
      };
    case "deptInquiry":
      return {
        ...state,
        status: "deptInquiry",
      };
    case "addTransaction":
      return {
        ...state,
        transactionHistory: [...state.transactionHistory, action.payload],
      };
    case "transactionHistory":
      return {
        ...state,
        status: "viewTransactionHistory",
      };
    case "withdraw":
      return {
        ...state,
        selectedUser: {
          ...state.selectedUser,
          balance: state.selectedUser.balance - action.payload,
        },
        transactionHistory: [
          ...(state.transactionHistory || []),
          { type: "Para Çekme", amount: action.payload },
        ],
      };
    case "withdrawScreen":
      return {
        ...state,
        status: "withDraw",
      };
    case "showDeposit":
      return {
        ...state,
        status: "showDeposit",
      };
    case "payDebt":
      const updatedDebts = [...state.selectedUser.debt];
      updatedDebts.splice(action.payload.index, 1);

      return {
        ...state,
        selectedUser: {
          ...state.selectedUser,
          bakiye: state.selectedUser.bakiye - action.payload.amount,
          debt: updatedDebts,
        },
        transactionHistory: [
          ...state.transactionHistory,
          {
            type: "Borç Ödeme",
            amount: action.payload.amount,
            date: new Date().toLocaleString(),
          },
        ],
      };
    case "applyLoan":
      if (!action.payload || !action.payload.amount) {
        console.error(
          "Kredi başvuru işlemi hatalı: payload undefined veya amount yok."
        );
        return state;
      }
      return {
        ...state,
        transactionHistory: [
          ...state.transactionHistory,
          {
            type: "Kredi Başvurusu",
            amount: action.payload.amount,
            date: action.payload.date,
          },
        ],
      };

    case "showLoanApplication":
      return {
        ...state,
        status: "showLoanApplication", // Kredi başvuru ekranını göster
      };

    case "showTransferScreen":
      return {
        ...state,
        status: "transfer",
      };

    case "transferMoney": {
      const { toUser, amount } = action.payload;

      const updatedSender = {
        ...state.selectedUser,
        bakiye: state.selectedUser.bakiye - amount,
      };

      const recipient = state.users.find((user) => user.userName === toUser);
      const updatedRecipient = recipient
        ? {
            ...recipient,
            bakiye: recipient.bakiye + amount,
          }
        : recipient;

      const updatedUsers = state.users.map((user) =>
        user.userName === updatedSender.userName
          ? updatedSender
          : user.userName === updatedRecipient.userName
          ? updatedRecipient
          : user
      );

      return {
        ...state,
        users: updatedUsers,
        selectedUser: updatedSender,
      };
    }
    case "quitApp":
      return {
        ...state,
        status: "ready",
        selectedUser: null,
      };
    default:
      return state;
  }
}

function App() {
  useEffect(function () {
    /*  fetch("http://localhost:8000/users") */
    fetch(
      "https://raw.githubusercontent.com/AbdllhAlioglu/bank-data/refs/heads/main/public/data/data.json"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: "dataReceived", payload: data });
      })
      .catch((err) => {
        console.error("Hata oluştu:", err);
        dispatch({ type: "dataFailed" });
      });
  }, []);

  const [{ status, users, selectedUser, transactionHistory }, dispatch] =
    useReducer(reducer, initialState);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen users={users} dispatch={dispatch} />
        )}
        <>
          {status === "active" && (
            <AccountScreen user={selectedUser} dispatch={dispatch} />
          )}
          {status === "deptInquiry" && (
            <DebtInquiry user={selectedUser} dispatch={dispatch} />
          )}
          {status === "viewTransactionHistory" && (
            <TransactionHistory
              transactionHistory={transactionHistory}
              dispatch={dispatch}
            />
          )}
          {status === "withDraw" && (
            <WithdrawScreen user={selectedUser} dispatch={dispatch} />
          )}
          {status === "showDeposit" && (
            <Deposit user={selectedUser} dispatch={dispatch} />
          )}
          {status === "showLoanApplication" && (
            <LoanApplication user={selectedUser} dispatch={dispatch} />
          )}
          {status === "transfer" && (
            <TransferScreen
              user={selectedUser}
              dispatch={dispatch}
              users={users}
            />
          )}
        </>
      </Main>
    </div>
  );
}

export default App;
