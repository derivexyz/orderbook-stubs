/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Used for debugging only, do not use in production. Will return the incremental encoded and hashed data.<br /><br />See guides in Documentation for more.
 */
export type PublicCreateSubaccountDebug = PublicCreateSubaccountDebugJSONRPCSchema;
export type HttpMethod = "POST";
export type Method = "public/create_subaccount_debug";
/**
 * Amount of the asset to deposit
 */
export type Amount = string;
/**
 * Name of asset to deposit
 */
export type AssetName = string;
/**
 * Base currency of the subaccount (only for `PM`)
 */
export type Currency = string | null;
/**
 * `PM` (Portfolio Margin) or `SM` (Standard Margin)
 */
export type MarginType = "PM" | "SM";
/**
 * Unique nonce defined as <UTC_timestamp in ms><random_number_up_to_6_digits> (e.g. 1695836058725001, where 001 is the random number)
 */
export type Nonce = number;
/**
 * Unix timestamp in seconds. Expiry MUST be >5min from now
 */
export type SignatureExpirySec = number;
/**
 * Ethereum wallet address that is signing the deposit
 */
export type Signer = string;
/**
 * Ethereum wallet address
 */
export type Wallet = string;
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
 * EIP 712 typed data hash
 */
export type TypedDataHash = string;

export interface PublicCreateSubaccountDebugJSONRPCSchema {
  request: PublicCreateSubaccountDebugRequestSchema;
  response: PublicCreateSubaccountDebugResponseSchema;
}
export interface PublicCreateSubaccountDebugRequestSchema {
  httpMethod: HttpMethod;
  id?: string | number;
  method: Method;
  params: PublicCreateSubaccountDebugParamsSchema;
}
export interface PublicCreateSubaccountDebugParamsSchema {
  amount: Amount;
  asset_name: AssetName;
  currency?: Currency;
  margin_type: MarginType;
  nonce: Nonce;
  signature_expiry_sec: SignatureExpirySec;
  signer: Signer;
  wallet: Wallet;
}
export interface PublicCreateSubaccountDebugResponseSchema {
  id: string | number;
  result: PublicCreateSubaccountDebugResultSchema;
}
export interface PublicCreateSubaccountDebugResultSchema {
  action_hash: ActionHash;
  encoded_data: EncodedData;
  encoded_data_hashed: EncodedDataHashed;
  typed_data_hash: TypedDataHash;
}
