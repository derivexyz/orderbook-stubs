/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Calculates margin for a given portfolio and (optionally) a simulated state change.<br />Does not take into account open orders margin requirements.public/withdraw_debug
 */
export type PublicGetMargin = PublicGetMarginJSONRPCSchema;
export type HttpMethod = "POST";
export type Method = "public/get_margin";
/**
 * `PM` (Portfolio Margin) or `SM` (Standard Margin)
 */
export type MarginType = "PM" | "SM";
/**
 * Optional, add collaterals to simulate deposits / withdrawals / spot trades
 */
export type SimulatedCollateralChanges = SimulatedCollateralSchema[] | null;
/**
 * Collateral amount to simulate
 */
export type Amount = string;
/**
 * Collateral ERC20 asset name (e.g. ETH, USDC, WSTETH)
 */
export type AssetName = string;
/**
 * List of collaterals in a simulated portfolio
 */
export type SimulatedCollaterals = SimulatedCollateralSchema1[];
/**
 * Optional, add positions to simulate perp / option trades
 */
export type SimulatedPositionChanges = SimulatedPositionSchema[] | null;
/**
 * Position amount to simulate
 */
export type Amount1 = string;
/**
 * Only for perps. Entry price to use in the simulation. Mark price is used if not provided.
 */
export type EntryPrice = string | null;
/**
 * Instrument name
 */
export type InstrumentName = string;
/**
 * List of positions in a simulated portfolio
 */
export type SimulatedPositions = SimulatedPositionSchema1[];
/**
 * True if trade passes margin requirement
 */
export type IsValidTrade = boolean;
/**
 * Initial margin requirement post trade
 */
export type PostInitialMargin = string;
/**
 * Maintenance margin requirement post trade
 */
export type PostMaintenanceMargin = string;
/**
 * Initial margin requirement before trade
 */
export type PreInitialMargin = string;
/**
 * Maintenance margin requirement before trade
 */
export type PreMaintenanceMargin = string;
/**
 * Subaccount_id
 */
export type SubaccountId = number;

export interface PublicGetMarginJSONRPCSchema {
  request: PublicGetMarginRequestSchema;
  response: PublicGetMarginResponseSchema;
}
export interface PublicGetMarginRequestSchema {
  httpMethod: HttpMethod;
  id?: string | number;
  method: Method;
  params: PublicGetMarginParamsSchema;
}
export interface PublicGetMarginParamsSchema {
  margin_type: MarginType;
  simulated_collateral_changes?: SimulatedCollateralChanges;
  simulated_collaterals: SimulatedCollaterals;
  simulated_position_changes?: SimulatedPositionChanges;
  simulated_positions: SimulatedPositions;
}
export interface SimulatedCollateralSchema {
  amount: Amount;
  asset_name: AssetName;
}
export interface SimulatedCollateralSchema1 {
  amount: Amount;
  asset_name: AssetName;
}
export interface SimulatedPositionSchema {
  amount: Amount1;
  entry_price?: EntryPrice;
  instrument_name: InstrumentName;
}
export interface SimulatedPositionSchema1 {
  amount: Amount1;
  entry_price?: EntryPrice;
  instrument_name: InstrumentName;
}
export interface PublicGetMarginResponseSchema {
  id: string | number;
  result: PublicGetMarginResultSchema;
}
export interface PublicGetMarginResultSchema {
  is_valid_trade: IsValidTrade;
  post_initial_margin: PostInitialMargin;
  post_maintenance_margin: PostMaintenanceMargin;
  pre_initial_margin: PreInitialMargin;
  pre_maintenance_margin: PreMaintenanceMargin;
  subaccount_id: SubaccountId;
}
