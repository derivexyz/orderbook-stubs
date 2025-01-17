/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Cancels RFQs given optional filters.<br />If no filters are provided, all RFQs for the subaccount are cancelled.<br />All filters are combined using `AND` logic, so mutually exclusive filters will result in no RFQs being cancelled.
 * Required minimum session key permission level is `account`
 */
export type PrivateCancelBatchRfqs = PrivateCancelBatchRfqsJSONRPCSchema;
export type HttpMethod = "POST";
export type Method = "private/cancel_batch_rfqs";
/**
 * Cancel RFQs with this label
 */
export type Label = string | null;
/**
 * Cancel RFQ with this nonce
 */
export type Nonce = number | null;
/**
 * RFQ ID to cancel
 */
export type RfqId = string | null;
/**
 * Subaccount ID
 */
export type SubaccountId = number;
export type CancelledIds1 = string;
/**
 * RFQ IDs of the cancelled RFQs
 */
export type CancelledIds = CancelledIds1[];

export interface PrivateCancelBatchRfqsJSONRPCSchema {
  request: PrivateCancelBatchRfqsRequestSchema;
  response: PrivateCancelBatchRfqsResponseSchema;
}
export interface PrivateCancelBatchRfqsRequestSchema {
  httpMethod: HttpMethod;
  id?: string | number;
  method: Method;
  params: PrivateCancelBatchRfqsParamsSchema;
}
export interface PrivateCancelBatchRfqsParamsSchema {
  label?: Label;
  nonce?: Nonce;
  rfq_id?: RfqId;
  subaccount_id: SubaccountId;
}
export interface PrivateCancelBatchRfqsResponseSchema {
  id: string | number;
  result: PrivateCancelBatchRfqsResultSchema;
}
export interface PrivateCancelBatchRfqsResultSchema {
  cancelled_ids: CancelledIds;
}
