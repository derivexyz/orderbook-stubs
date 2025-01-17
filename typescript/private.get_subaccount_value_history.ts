/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Get the value history of a subaccount
 * Required minimum session key permission level is `read_only`
 */
export type PrivateGetSubaccountValueHistory = PrivateGetSubaccountValueHistoryJSONRPCSchema;
export type HttpMethod = "POST";
export type Method = "private/get_subaccount_value_history";
/**
 * End timestamp
 */
export type EndTimestamp = number;
/**
 * Period
 */
export type Period = number;
/**
 * Start timestamp
 */
export type StartTimestamp = number;
/**
 * Subaccount_id
 */
export type SubaccountId = number;
/**
 * Subaccount_id
 */
export type SubaccountId1 = number;
/**
 * Total mark-to-market value of all positions and collaterals
 */
export type SubaccountValue = string;
/**
 * Timestamp of when the subaccount value was recorded into the database
 */
export type Timestamp = number;
/**
 * Subaccount value history
 */
export type SubaccountValueHistory = SubAccountValueHistoryResponseSchema[];

export interface PrivateGetSubaccountValueHistoryJSONRPCSchema {
  request: PrivateGetSubaccountValueHistoryRequestSchema;
  response: PrivateGetSubaccountValueHistoryResponseSchema;
}
export interface PrivateGetSubaccountValueHistoryRequestSchema {
  httpMethod: HttpMethod;
  id?: string | number;
  method: Method;
  params: PrivateGetSubaccountValueHistoryParamsSchema;
}
export interface PrivateGetSubaccountValueHistoryParamsSchema {
  end_timestamp: EndTimestamp;
  period: Period;
  start_timestamp: StartTimestamp;
  subaccount_id: SubaccountId;
}
export interface PrivateGetSubaccountValueHistoryResponseSchema {
  id: string | number;
  result: PrivateGetSubaccountValueHistoryResultSchema;
}
export interface PrivateGetSubaccountValueHistoryResultSchema {
  subaccount_id: SubaccountId1;
  subaccount_value_history: SubaccountValueHistory;
}
export interface SubAccountValueHistoryResponseSchema {
  subaccount_value: SubaccountValue;
  timestamp: Timestamp;
}
