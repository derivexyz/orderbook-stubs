/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Get all points for all users for a given program. This request is cached in WSGI.
 */
export type PublicGetAllPoints = PublicGetAllPointsJSONRPCSchema;
export type HttpMethod = "GET";
export type Method = "public/get_all_points";
/**
 * Program for which to count points
 */
export type Program = string;
export type Points1 = string;
/**
 * Total $ notional volume traded by all users elligible for points
 */
export type TotalNotionalVolume = string;
/**
 * Total number of users in the program
 */
export type TotalUsers = number;

export interface PublicGetAllPointsJSONRPCSchema {
  request: PublicGetAllPointsRequestSchema;
  response: PublicGetAllPointsResponseSchema;
}
export interface PublicGetAllPointsRequestSchema {
  httpMethod: HttpMethod;
  id?: string | number;
  method: Method;
  params: PublicGetAllPointsParamsSchema;
}
export interface PublicGetAllPointsParamsSchema {
  program: Program;
}
export interface PublicGetAllPointsResponseSchema {
  id: string | number;
  result: PublicGetAllPointsResultSchema;
}
export interface PublicGetAllPointsResultSchema {
  points: Points;
  total_notional_volume: TotalNotionalVolume;
  total_users: TotalUsers;
}
/**
 * Points earned per category
 */
export interface Points {
  [k: string]: Points1;
}
