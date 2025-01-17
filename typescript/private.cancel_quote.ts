/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Cancels an open quote.
 * Required minimum session key permission level is `admin`
 */
export type PrivateCancelQuote = PrivateCancelQuoteJSONRPCSchema;
export type HttpMethod = "POST";
export type Method = "private/cancel_quote";
/**
 * Quote ID to cancel
 */
export type QuoteId = string;
/**
 * Subaccount ID
 */
export type SubaccountId = number;
/**
 * Cancel reason, if any
 */
export type CancelReason =
  | ""
  | "user_request"
  | "insufficient_margin"
  | "signed_max_fee_too_low"
  | "mmp_trigger"
  | "cancel_on_disconnect"
  | "session_key_deregistered"
  | "subaccount_withdrawn"
  | "rfq_no_longer_open"
  | "compliance";
/**
 * Creation timestamp in ms since Unix epoch
 */
export type CreationTimestamp = number;
/**
 * Quote direction
 */
export type Direction = "buy" | "sell";
/**
 * Fee paid for this quote (if executed)
 */
export type Fee = string;
/**
 * Whether the order was generated through `private/transfer_position`
 */
export type IsTransfer = boolean;
/**
 * User-defined label, if any
 */
export type Label = string;
/**
 * Last update timestamp in ms since Unix epoch
 */
export type LastUpdateTimestamp = number;
/**
 * Amount in units of the base
 */
export type Amount = string;
/**
 * Leg direction
 */
export type Direction1 = "buy" | "sell";
/**
 * Instrument name
 */
export type InstrumentName = string;
/**
 * Leg price
 */
export type Price = string;
/**
 * Quote legs
 */
export type Legs = LegPricedSchema[];
/**
 * Hash of the legs of the best quote to be signed by the taker.
 */
export type LegsHash = string;
/**
 * Liquidity role
 */
export type LiquidityRole = "maker" | "taker";
/**
 * Signed max fee
 */
export type MaxFee = string;
/**
 * Whether the quote is tagged for market maker protections (default false)
 */
export type Mmp = boolean;
/**
 * Nonce
 */
export type Nonce = number;
/**
 * Quote ID
 */
export type QuoteId1 = string;
/**
 * RFQ ID
 */
export type RfqId = string;
/**
 * Ethereum signature of the quote
 */
export type Signature = string;
/**
 * Unix timestamp in seconds
 */
export type SignatureExpirySec = number;
/**
 * Owner wallet address or registered session key that signed the quote
 */
export type Signer = string;
/**
 * Status
 */
export type Status = "open" | "filled" | "cancelled" | "expired";
/**
 * Subaccount ID
 */
export type SubaccountId1 = number;
/**
 * Blockchain transaction hash (only for executed quotes)
 */
export type TxHash = string | null;
/**
 * Blockchain transaction status (only for executed quotes)
 */
export type TxStatus = ("requested" | "pending" | "settled" | "reverted" | "ignored" | "timed_out") | null;

export interface PrivateCancelQuoteJSONRPCSchema {
  request: PrivateCancelQuoteRequestSchema;
  response: PrivateCancelQuoteResponseSchema;
}
export interface PrivateCancelQuoteRequestSchema {
  httpMethod: HttpMethod;
  id?: string | number;
  method: Method;
  params: PrivateCancelQuoteParamsSchema;
}
export interface PrivateCancelQuoteParamsSchema {
  quote_id: QuoteId;
  subaccount_id: SubaccountId;
}
export interface PrivateCancelQuoteResponseSchema {
  id: string | number;
  result: PrivateCancelQuoteResultSchema;
}
export interface PrivateCancelQuoteResultSchema {
  cancel_reason: CancelReason;
  creation_timestamp: CreationTimestamp;
  direction: Direction;
  fee: Fee;
  is_transfer: IsTransfer;
  label: Label;
  last_update_timestamp: LastUpdateTimestamp;
  legs: Legs;
  legs_hash: LegsHash;
  liquidity_role: LiquidityRole;
  max_fee: MaxFee;
  mmp: Mmp;
  nonce: Nonce;
  quote_id: QuoteId1;
  rfq_id: RfqId;
  signature: Signature;
  signature_expiry_sec: SignatureExpirySec;
  signer: Signer;
  status: Status;
  subaccount_id: SubaccountId1;
  tx_hash: TxHash;
  tx_status: TxStatus;
}
export interface LegPricedSchema {
  amount: Amount;
  direction: Direction1;
  instrument_name: InstrumentName;
  price: Price;
}
