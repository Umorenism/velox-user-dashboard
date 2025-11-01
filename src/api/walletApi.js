// src/api/walletApi.js
import { apiClient } from "./apiClient";

// ──────────────────────── Fund Wallet ────────────────────────
export const initiateFund = async ({ amount, payCurrency }) => {
  const response = await apiClient.post("/api/users/wallet/initiate-fund", {
    amount,
    payCurrency,
  });
  console.log("Initiate Fund:", response.data);
  return response.data;
};

// ──────────────────────── Transfer ────────────────────────
export const transferFunds = async ({ toUserId, amount }) => {
  const response = await apiClient.post("/api/users/transfer", {
    toUserId,
    amount,
  });
  console.log("Transfer Funds:", response.data);
  return response.data;
};
