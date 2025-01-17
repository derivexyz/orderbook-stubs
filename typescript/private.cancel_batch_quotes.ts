/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Cancels quotes given optional filters. If no filters are provided, all quotes by the subaccount are cancelled.<br />All filters are combined using `AND` logic, so mutually exclusive filters will result in no quotes being cancelled.
 * Required minimum session key permission level is `admin`
 */
export type PrivateCancelBatchQuotes = PrivateCancelBatchQuotesJSONRPCSchema;
export type HttpMethod = "POST";
export type Method = "private/cancel_batch_quotes";
/**
 * Cancel quotes with this label
 */
export type Label = string | null;
/**
 * Cancel quote with this nonce
 */
export type Nonce = number | null;
/**
 * Quote ID to cancel
 */
export type QuoteId = string | null;
/**
 * Cancel quotes for this RFQ ID
 */
export type RfqId = string | null;
/**
 * Subaccount ID
 */
export type SubaccountId = number;
export type CancelledIds1 = string;
/**
 * Quote IDs of the cancelled quotes
 */
export type CancelledIds = CancelledIds1[];

export interface PrivateCancelBatchQuotesJSONRPCSchema {
  request: PrivateCancelBatchQuotesRequestSchema;
  response: PrivateCancelBatchQuotesResponseSchema;
}
export interface PrivateCancelBatchQuotesRequestSchema {
  httpMethod: HttpMethod;
  id?: string | number;
  method: Method;
  params: PrivateCancelBatchQuotesParamsSchema;
}
export interface PrivateCancelBatchQuotesParamsSchema {
  label?: Label;
  nonce?: Nonce;
  quote_id?: QuoteId;
  rfq_id?: RfqId;
  subaccount_id: SubaccountId;
}
export interface PrivateCancelBatchQuotesResponseSchema {
  id: string | number;
  result: PrivateCancelBatchQuotesResultSchema;
}
export interface PrivateCancelBatchQuotesResultSchema {
  cancelled_ids: CancelledIds;
}
