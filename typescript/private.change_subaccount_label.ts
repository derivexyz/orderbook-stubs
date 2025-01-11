/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Change a user defined label for given subaccount
 * Required minimum session key permission level is `account`
 */
export type PrivateChangeSubaccountLabel = PrivateChangeSubaccountLabelJSONRPCSchema;
export type HttpMethod = "POST";
export type Method = "private/change_subaccount_label";
/**
 * User defined label
 */
export type Label = string;
/**
 * Subaccount_id
 */
export type SubaccountId = number;
/**
 * User defined label
 */
export type Label1 = string;
/**
 * Subaccount_id
 */
export type SubaccountId1 = number;

export interface PrivateChangeSubaccountLabelJSONRPCSchema {
  request: PrivateChangeSubaccountLabelRequestSchema;
  response: PrivateChangeSubaccountLabelResponseSchema;
}
export interface PrivateChangeSubaccountLabelRequestSchema {
  httpMethod: HttpMethod;
  id?: string | number;
  method: Method;
  params: PrivateChangeSubaccountLabelParamsSchema;
}
export interface PrivateChangeSubaccountLabelParamsSchema {
  label: Label;
  subaccount_id: SubaccountId;
}
export interface PrivateChangeSubaccountLabelResponseSchema {
  id: string | number;
  result: PrivateChangeSubaccountLabelResultSchema;
}
export interface PrivateChangeSubaccountLabelResultSchema {
  label: Label1;
  subaccount_id: SubaccountId1;
}
