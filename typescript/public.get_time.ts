/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type PublicGetTime = PublicGetTimeJSONRPCSchema;
export type HttpMethod = "POST";
export type Method = "public/get_time";
/**
 * Current time in milliseconds since UNIX epoch
 */
export type Result = number;

export interface PublicGetTimeJSONRPCSchema {
  request: PublicGetTimeRequestSchema;
  response: PublicGetTimeResponseSchema;
}
export interface PublicGetTimeRequestSchema {
  httpMethod: HttpMethod;
  id?: string | number;
  method: Method;
  params: PublicGetTimeParamsSchema;
}
export interface PublicGetTimeParamsSchema {}
export interface PublicGetTimeResponseSchema {
  id: string | number;
  result: Result;
}
