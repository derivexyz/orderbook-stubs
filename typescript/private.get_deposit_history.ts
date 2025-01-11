/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Get subaccount deposit history.
 * Required minimum session key permission level is `read_only`
 */
export type PrivateGetDepositHistory = PrivateGetDepositHistoryJSONRPCSchema;
export type HttpMethod = "POST";
export type Method = "private/get_deposit_history";
/**
 * End timestamp of the event history (default current time)
 */
export type EndTimestamp = number;
/**
 * Start timestamp of the event history (default 0)
 */
export type StartTimestamp = number;
/**
 * Subaccount id
 */
export type SubaccountId = number;
/**
 * Amount deposited by the subaccount
 */
export type Amount = string;
/**
 * Asset deposited
 */
export type Asset = string;
/**
 * If failed, error log for reason
 */
export type ErrorLog = {
  [k: string]: any;
} | null;
/**
 * Timestamp of the deposit (in ms since UNIX epoch)
 */
export type Timestamp = number;
/**
 * Transaction ID
 */
export type TransactionId = string;
/**
 * Hash of the transaction that deposited the funds
 */
export type TxHash = string;
/**
 * Status of the transaction that deposited the funds
 */
export type TxStatus = "requested" | "pending" | "settled" | "reverted" | "ignored" | "timed_out";
/**
 * List of deposit payments
 */
export type Events = DepositSchema[];

export interface PrivateGetDepositHistoryJSONRPCSchema {
  request: PrivateGetDepositHistoryRequestSchema;
  response: PrivateGetDepositHistoryResponseSchema;
}
export interface PrivateGetDepositHistoryRequestSchema {
  httpMethod: HttpMethod;
  id?: string | number;
  method: Method;
  params: PrivateGetDepositHistoryParamsSchema;
}
export interface PrivateGetDepositHistoryParamsSchema {
  end_timestamp?: EndTimestamp;
  start_timestamp?: StartTimestamp;
  subaccount_id: SubaccountId;
}
export interface PrivateGetDepositHistoryResponseSchema {
  id: string | number;
  result: PrivateGetDepositHistoryResultSchema;
}
export interface PrivateGetDepositHistoryResultSchema {
  events: Events;
}
export interface DepositSchema {
  amount: Amount;
  asset: Asset;
  error_log: ErrorLog;
  timestamp: Timestamp;
  transaction_id: TransactionId;
  tx_hash: TxHash;
  tx_status: TxStatus;
}