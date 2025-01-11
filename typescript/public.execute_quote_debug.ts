/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Sends a quote in response to an RFQ request.<br />The legs supplied in the parameters must exactly match those in the RFQ.
 */
export type PublicExecuteQuoteDebug = PublicExecuteQuoteDebugJSONRPCSchema;
export type HttpMethod = "POST";
export type Method = "public/execute_quote_debug";
/**
 * Quote direction, `buy` means trading each leg at its direction, `sell` means trading each leg in the opposite direction.
 */
export type Direction = "buy" | "sell";
/**
 * Optional user-defined label for the quote
 */
export type Label = string;
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
 * Max fee ($ for the full trade). Request will be rejected if the supplied max fee is below the estimated fee for this trade.
 */
export type MaxFee = string;
/**
 * Unique nonce defined as a concatenated `UTC timestamp in ms` and `random number up to 6 digits` (e.g. 1695836058725001, where 001 is the random number)
 */
export type Nonce = number;
/**
 * Quote ID to execute against
 */
export type QuoteId = string;
/**
 * RFQ ID to execute (must be sent by `subaccount_id`)
 */
export type RfqId = string;
/**
 * Ethereum signature of the quote
 */
export type Signature = string;
/**
 * Unix timestamp in seconds. Expiry MUST be at least 310 seconds from now. Once time till signature expiry reaches 300 seconds, the quote will be considered expired. This buffer is meant to ensure the trade can settle on chain in case of a blockchain congestion.
 */
export type SignatureExpirySec = number;
/**
 * Owner wallet address or registered session key that signed the quote
 */
export type Signer = string;
/**
 * Subaccount ID
 */
export type SubaccountId = number;
/**
 * Keccak hashed action data
 */
export type ActionHash = string;
/**
 * ABI encoded deposit data
 */
export type EncodedData = string;
/**
 * Keccak hashed encoded_data
 */
export type EncodedDataHashed = string;
/**
 * ABI encoded legs data
 */
export type EncodedLegs = string;
/**
 * Keccak hashed legs data
 */
export type LegsHash = string;
/**
 * EIP 712 typed data hash
 */
export type TypedDataHash = string;

export interface PublicExecuteQuoteDebugJSONRPCSchema {
  request: PublicExecuteQuoteDebugRequestSchema;
  response: PublicExecuteQuoteDebugResponseSchema;
}
export interface PublicExecuteQuoteDebugRequestSchema {
  httpMethod: HttpMethod;
  id?: string | number;
  method: Method;
  params: PublicExecuteQuoteDebugParamsSchema;
}
export interface PublicExecuteQuoteDebugParamsSchema {
  direction: Direction;
  label?: Label;
  legs: Legs;
  max_fee: MaxFee;
  nonce: Nonce;
  quote_id: QuoteId;
  rfq_id: RfqId;
  signature: Signature;
  signature_expiry_sec: SignatureExpirySec;
  signer: Signer;
  subaccount_id: SubaccountId;
}
export interface LegPricedSchema {
  amount: Amount;
  direction: Direction1;
  instrument_name: InstrumentName;
  price: Price;
}
export interface PublicExecuteQuoteDebugResponseSchema {
  id: string | number;
  result: PublicExecuteQuoteDebugResultSchema;
}
export interface PublicExecuteQuoteDebugResultSchema {
  action_hash: ActionHash;
  encoded_data: EncodedData;
  encoded_data_hashed: EncodedDataHashed;
  encoded_legs: EncodedLegs;
  legs_hash: LegsHash;
  typed_data_hash: TypedDataHash;
}