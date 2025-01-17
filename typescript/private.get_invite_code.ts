/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Get a shareable invite code for account which can be shared with friends.
 * Required minimum session key permission level is `read_only`
 */
export type PrivateGetInviteCode = PrivateGetInviteCodeJSONRPCSchema;
export type HttpMethod = "POST";
export type Method = "private/get_invite_code";
/**
 * Wallet address of the user
 */
export type Wallet = string;
/**
 * Invite code
 */
export type Code = string;
/**
 * Remaining uses of the invite code. Unlimited use codes will return -1
 */
export type RemainingUses = number;

export interface PrivateGetInviteCodeJSONRPCSchema {
  request: PrivateGetInviteCodeRequestSchema;
  response: PrivateGetInviteCodeResponseSchema;
}
export interface PrivateGetInviteCodeRequestSchema {
  httpMethod: HttpMethod;
  id?: string | number;
  method: Method;
  params: PrivateGetInviteCodeParamsSchema;
}
export interface PrivateGetInviteCodeParamsSchema {
  wallet: Wallet;
}
export interface PrivateGetInviteCodeResponseSchema {
  id: string | number;
  result: PrivateGetInviteCodeResultSchema;
}
export interface PrivateGetInviteCodeResultSchema {
  code: Code;
  remaining_uses: RemainingUses;
}
