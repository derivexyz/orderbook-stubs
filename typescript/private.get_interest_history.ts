/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Get subaccount interest payment history.
 * Required minimum session key permission level is `read_only`
 */
export type PrivateGetInterestHistory = PrivateGetInterestHistoryJSONRPCSchema;
export type HttpMethod = "POST";
export type Method = "private/get_interest_history";
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
 * Dollar interest paid (if negative) or received (if positive) by the subaccount
 */
export type Interest = string;
/**
 * Timestamp of the interest payment (in ms since UNIX epoch)
 */
export type Timestamp = number;
/**
 * List of interest payments
 */
export type Events = InterestPaymentSchema[];

export interface PrivateGetInterestHistoryJSONRPCSchema {
  request: PrivateGetInterestHistoryRequestSchema;
  response: PrivateGetInterestHistoryResponseSchema;
}
export interface PrivateGetInterestHistoryRequestSchema {
  httpMethod: HttpMethod;
  id?: string | number;
  method: Method;
  params: PrivateGetInterestHistoryParamsSchema;
}
export interface PrivateGetInterestHistoryParamsSchema {
  end_timestamp?: EndTimestamp;
  start_timestamp?: StartTimestamp;
  subaccount_id: SubaccountId;
}
export interface PrivateGetInterestHistoryResponseSchema {
  id: string | number;
  result: PrivateGetInterestHistoryResultSchema;
}
export interface PrivateGetInterestHistoryResultSchema {
  events: Events;
}
export interface InterestPaymentSchema {
  interest: Interest;
  timestamp: Timestamp;
}
