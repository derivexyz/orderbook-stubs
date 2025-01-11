/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Get subaccount funding history.<br /><br />DB: read replica
 * Required minimum session key permission level is `read_only`
 */
export type PrivateGetFundingHistory = PrivateGetFundingHistoryJSONRPCSchema;
export type HttpMethod = "POST";
export type Method = "private/get_funding_history";
/**
 * End timestamp of the event history (default current time)
 */
export type EndTimestamp = number;
/**
 * Instrument name (returns history for all perpetuals if not provided)
 */
export type InstrumentName = string | null;
/**
 * Start timestamp of the event history (default 0)
 */
export type StartTimestamp = number;
/**
 * Subaccount id
 */
export type SubaccountId = number;
/**
 * Dollar funding paid (if negative) or received (if positive) by the subaccount
 */
export type Funding = string;
/**
 * Instrument name
 */
export type InstrumentName1 = string;
/**
 * Timestamp of the funding payment (in ms since UNIX epoch)
 */
export type Timestamp = number;
/**
 * List of funding payments
 */
export type Events = FundingPaymentSchema[];

export interface PrivateGetFundingHistoryJSONRPCSchema {
  request: PrivateGetFundingHistoryRequestSchema;
  response: PrivateGetFundingHistoryResponseSchema;
}
export interface PrivateGetFundingHistoryRequestSchema {
  httpMethod: HttpMethod;
  id?: string | number;
  method: Method;
  params: PrivateGetFundingHistoryParamsSchema;
}
export interface PrivateGetFundingHistoryParamsSchema {
  end_timestamp?: EndTimestamp;
  instrument_name?: InstrumentName;
  start_timestamp?: StartTimestamp;
  subaccount_id: SubaccountId;
}
export interface PrivateGetFundingHistoryResponseSchema {
  id: string | number;
  result: PrivateGetFundingHistoryResultSchema;
}
export interface PrivateGetFundingHistoryResultSchema {
  events: Events;
}
export interface FundingPaymentSchema {
  funding: Funding;
  instrument_name: InstrumentName1;
  timestamp: Timestamp;
}
