/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Cancel all open orders for a given subaccount and a given label.  If instrument_name is provided, only orders for that instrument will be cancelled.
 * Required minimum session key permission level is `admin`
 */
export type PrivateCancelByLabel = PrivateCancelByLabelJSONRPCSchema;
export type HttpMethod = "POST";
export type Method = "private/cancel_by_label";
/**
 * Instrument name. If not provided, all orders for all instruments with the label will be cancelled.  If provided, request counts as a regular matching request for ratelimit purposes.
 */
export type InstrumentName = string | null;
/**
 * Cancel all orders for this label
 */
export type Label = string;
/**
 * Subaccount ID
 */
export type SubaccountId = number;
/**
 * Number of cancelled orders
 */
export type CancelledOrders = number;

export interface PrivateCancelByLabelJSONRPCSchema {
  request: PrivateCancelByLabelRequestSchema;
  response: PrivateCancelByLabelResponseSchema;
}
export interface PrivateCancelByLabelRequestSchema {
  httpMethod: HttpMethod;
  id?: string | number;
  method: Method;
  params: PrivateCancelByLabelParamsSchema;
}
export interface PrivateCancelByLabelParamsSchema {
  instrument_name?: InstrumentName;
  label: Label;
  subaccount_id: SubaccountId;
}
export interface PrivateCancelByLabelResponseSchema {
  id: string | number;
  result: PrivateCancelByLabelResultSchema;
}
export interface PrivateCancelByLabelResultSchema {
  cancelled_orders: CancelledOrders;
}
