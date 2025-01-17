/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Used for debugging only, do not use in production. Will return the incremental encoded and hashed data.<br /><br />See guides in Documentation for more.
 */
export type PublicDepositDebug = PublicDepositDebugJSONRPCSchema;
export type HttpMethod = "POST";
export type Method = "public/deposit_debug";
/**
 * Amount of the asset to deposit
 */
export type Amount = string;
/**
 * Name of asset to deposit
 */
export type AssetName = string;
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
 * Subaccount_id
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
 * EIP 712 typed data hash
 */
export type TypedDataHash = string;

export interface PublicDepositDebugJSONRPCSchema {
  request: PublicDepositDebugRequestSchema;
  response: PublicDepositDebugResponseSchema;
}
export interface PublicDepositDebugRequestSchema {
  httpMethod: HttpMethod;
  id?: string | number;
  method: Method;
  params: PublicDepositDebugParamsSchema;
}
export interface PublicDepositDebugParamsSchema {
  amount: Amount;
  asset_name: AssetName;
  nonce: Nonce;
  signature_expiry_sec: SignatureExpirySec;
  signer: Signer;
  subaccount_id: SubaccountId;
}
export interface PublicDepositDebugResponseSchema {
  id: string | number;
  result: PublicDepositDebugResultSchema;
}
export interface PublicDepositDebugResultSchema {
  action_hash: ActionHash;
  encoded_data: EncodedData;
  encoded_data_hashed: EncodedDataHashed;
  typed_data_hash: TypedDataHash;
}
