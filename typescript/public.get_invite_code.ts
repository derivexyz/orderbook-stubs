/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type PublicGetInviteCode = PublicGetInviteCodeJSONRPCSchema;
export type HttpMethod = "POST";
export type Method = "public/get_invite_code";
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

export interface PublicGetInviteCodeJSONRPCSchema {
  request: PublicGetInviteCodeRequestSchema;
  response: PublicGetInviteCodeResponseSchema;
}
export interface PublicGetInviteCodeRequestSchema {
  httpMethod: HttpMethod;
  id?: string | number;
  method: Method;
  params: PublicGetInviteCodeParamsSchema;
}
export interface PublicGetInviteCodeParamsSchema {
  wallet: Wallet;
}
export interface PublicGetInviteCodeResponseSchema {
  id: string | number;
  result: PublicGetInviteCodeResultSchema;
}
export interface PublicGetInviteCodeResultSchema {
  code: Code;
  remaining_uses: RemainingUses;
}
