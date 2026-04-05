import React from "react";
import TransactionTable from "../components/TransactionTable";

export default function Transactions() {
  return (
    <div>
      <TransactionTable showAll={true} />
    </div>
  );
}
