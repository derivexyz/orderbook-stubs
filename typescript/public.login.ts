/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Authenticate a websocket connection. Unavailable via HTTP.
 */
export type PublicLogin = PublicLoginJSONRPCSchema;
export type HttpMethod = "POST";
export type Method = "public/login";
/**
 * Signature of the timestamp, signed with the wallet's private key or a session key
 */
export type Signature = string;
/**
 * Message that was signed, in the form of a timestamp in ms since Unix epoch
 */
export type Timestamp = string;
/**
 * Public key (wallet) of the account
 */
export type Wallet = string;
export type Result1 = number;
/**
 * List of subaccount IDs that have been authenticated
 */
export type Result = Result1[];

export interface PublicLoginJSONRPCSchema {
  request: PublicLoginRequestSchema;
  response: PublicLoginResponseSchema;
}
export interface PublicLoginRequestSchema {
  httpMethod: HttpMethod;
  id?: string | number;
  method: Method;
  params: PublicLoginParamsSchema;
}
export interface PublicLoginParamsSchema {
  signature: Signature;
  timestamp: Timestamp;
  wallet: Wallet;
}
export interface PublicLoginResponseSchema {
  id: string | number;
  result: Result;
}
