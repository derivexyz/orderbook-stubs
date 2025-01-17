/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Used for de-registering admin scoped keys. For other scopes, use `/edit_session_key`.
 */
export type PublicDeregisterSessionKey = PublicDeregisterSessionKeyJSONRPCSchema;
export type HttpMethod = "POST";
export type Method = "public/deregister_session_key";
/**
 * Session key in the form of an Ethereum EOA
 */
export type PublicSessionKey = string;
/**
 * A signed RLP encoded ETH transaction in form of a hex string (same as `w3.eth.account.sign_transaction(unsigned_tx, private_key).rawTransaction.hex()`)
 */
export type SignedRawTx = string;
/**
 * Ethereum wallet address of account
 */
export type Wallet = string;
/**
 * Session key in the form of an Ethereum EOA
 */
export type PublicSessionKey1 = string;
/**
 * ID to lookup status of transaction
 */
export type TransactionId = string;

export interface PublicDeregisterSessionKeyJSONRPCSchema {
  request: PublicDeregisterSessionKeyRequestSchema;
  response: PublicDeregisterSessionKeyResponseSchema;
}
export interface PublicDeregisterSessionKeyRequestSchema {
  httpMethod: HttpMethod;
  id?: string | number;
  method: Method;
  params: PublicDeregisterSessionKeyParamsSchema;
}
export interface PublicDeregisterSessionKeyParamsSchema {
  public_session_key: PublicSessionKey;
  signed_raw_tx: SignedRawTx;
  wallet: Wallet;
}
export interface PublicDeregisterSessionKeyResponseSchema {
  id: string | number;
  result: PublicDeregisterSessionKeyResultSchema;
}
export interface PublicDeregisterSessionKeyResultSchema {
  public_session_key: PublicSessionKey1;
  transaction_id: TransactionId;
}
