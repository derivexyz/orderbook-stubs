/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Cancel all orders for this instrument.
 * Required minimum session key permission level is `admin`
 */
export type PrivateCancelByInstrument = PrivateCancelByInstrumentJSONRPCSchema;
export type HttpMethod = "POST";
export type Method = "private/cancel_by_instrument";
/**
 * Cancel all orders for this instrument
 */
export type InstrumentName = string;
/**
 * Subaccount ID
 */
export type SubaccountId = number;
/**
 * Number of cancelled orders
 */
export type CancelledOrders = number;

export interface PrivateCancelByInstrumentJSONRPCSchema {
  request: PrivateCancelByInstrumentRequestSchema;
  response: PrivateCancelByInstrumentResponseSchema;
}
export interface PrivateCancelByInstrumentRequestSchema {
  httpMethod: HttpMethod;
  id?: string | number;
  method: Method;
  params: PrivateCancelByInstrumentParamsSchema;
}
export interface PrivateCancelByInstrumentParamsSchema {
  instrument_name: InstrumentName;
  subaccount_id: SubaccountId;
}
export interface PrivateCancelByInstrumentResponseSchema {
  id: string | number;
  result: PrivateCancelByInstrumentResultSchema;
}
export interface PrivateCancelByInstrumentResultSchema {
  cancelled_orders: CancelledOrders;
}