/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Get all estimated points for EigenLayer, Swell, and EtherFi integrators.
 */
export type PublicEstimateIntegratorPoints = PublicEstimateIntegratorPointsJSONRPCSchema;
export type HttpMethod = "GET";
export type Method = "public/estimate_integrator_points";
/**
 * Integrator token to estimate points for.
 */
export type Integrator =
  | "swell"
  | "etherfi"
  | "kelp"
  | "pendle"
  | "ethena"
  | "symbiotic"
  | "eigenlayer"
  | "lombard"
  | "babylon"
  | "linea"
  | "scroll"
  | "karak"
  | "tulipa";
/**
 * Account wallet address of the user (not smart contract owner).
 */
export type Wallet = string;
/**
 * Deprecated please use points_per_integrator instead. Estimated amount of EigenLayer points earned for current season.
 */
export type EigenlayerPoints = string;
/**
 * Deprecated please use points_per_integrator instead.Estimated amount of user EigenLayer points earned across all seasons.
 */
export type EigenlayerPointsAcrossAllSeasons = string;
/**
 * Percentage of total points earned by user for integrator for current season.
 */
export type PercentShareOfPoints = string;
/**
 * Deprecated please use points_per_integrator instead. Estimated amount of integrator points earned for current season.
 */
export type Points = string;
/**
 * Deprecated please use points_per_integrator instead. Estimated amount of user integrator points earned across all seasons.
 */
export type PointsAcrossAllSeasons = string;
/**
 * Estimated amount of integrator points earned for current active season.
 */
export type Points1 = string;
/**
 * Estimated amount of integrator points earned for all seasons
 */
export type PointsAcrossAllSeasons1 = string;
/**
 * Total points for all users for current season.
 */
export type TotalPoints = string;
export type TotalBalanceHoursByBridge1 = string;
/**
 * Deprecated please use points_per_integrator instead. Total EigenLayer points for all users for current season.
 */
export type TotalEigenlayerPoints = string;
/**
 * Deprecated please use points_per_integrator instead. Total points for all users for current season.
 */
export type TotalPoints1 = string;

export interface PublicEstimateIntegratorPointsJSONRPCSchema {
  request: PublicEstimateIntegratorPointsRequestSchema;
  response: PublicEstimateIntegratorPointsResponseSchema;
}
export interface PublicEstimateIntegratorPointsRequestSchema {
  httpMethod: HttpMethod;
  id?: string | number;
  method: Method;
  params: PublicEstimateIntegratorPointsParamsSchema;
}
export interface PublicEstimateIntegratorPointsParamsSchema {
  integrator: Integrator;
  wallet: Wallet;
}
export interface PublicEstimateIntegratorPointsResponseSchema {
  id: string | number;
  result: PublicEstimateIntegratorPointsResultSchema;
}
export interface PublicEstimateIntegratorPointsResultSchema {
  eigenlayer_points: EigenlayerPoints;
  eigenlayer_points_across_all_seasons: EigenlayerPointsAcrossAllSeasons;
  percent_share_of_points: PercentShareOfPoints;
  points: Points;
  points_across_all_seasons: PointsAcrossAllSeasons;
  points_per_integrator: PointsPerIntegrator;
  total_balance_hours_by_bridge: TotalBalanceHoursByBridge;
  total_eigenlayer_points: TotalEigenlayerPoints;
  total_points: TotalPoints1;
}
/**
 * Total points for all users for all integrators for current season.
 */
export interface PointsPerIntegrator {
  [k: string]: IntegratorPointDetailSchema;
}
export interface IntegratorPointDetailSchema {
  points: Points1;
  points_across_all_seasons: PointsAcrossAllSeasons1;
  total_points: TotalPoints;
}
/**
 * Total balance hours by bridge for current season.
 */
export interface TotalBalanceHoursByBridge {
  [k: string]: TotalBalanceHoursByBridge1;
}
