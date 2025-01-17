/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Get statistics for a specific user
 */
export type PublicAllUserStatistics = PublicAllUserStatisticsJSONRPCSchema;
export type HttpMethod = "GET";
export type Method = "public/all_user_statistics";
/**
 * Currency for stats
 */
export type Currency = string | null;
/**
 * End time for statistics in ms
 */
export type EndTime = number | null;
/**
 * Instrument name for stats
 */
export type InstrumentName = string | null;
/**
 * True to select only RFQs, false to ignore them
 */
export type IsRfq = boolean | null;
/**
 * Start time for statistics in ms
 */
export type StartTime = number | null;
/**
 * First trade timestamp
 */
export type FirstTradeTimestamp = number | null;
/**
 * Last trade timestamp
 */
export type LastTradeTimestamp = number | null;
/**
 * Total fees
 */
export type TotalFees = string;
/**
 * Total notional volume
 */
export type TotalNotionalVolume = string;
/**
 * Total premium volume
 */
export type TotalPremiumVolume = string;
/**
 * Total trades
 */
export type TotalTrades = number;
/**
 * Wallet address for the user
 */
export type Wallet = string;
export type Result = AllUserStatisticsSchema[];

export interface PublicAllUserStatisticsJSONRPCSchema {
  request: PublicAllUserStatisticsRequestSchema;
  response: PublicAllUserStatisticsResponseSchema;
}
export interface PublicAllUserStatisticsRequestSchema {
  httpMethod: HttpMethod;
  id?: string | number;
  method: Method;
  params: PublicAllUserStatisticsParamsSchema;
}
export interface PublicAllUserStatisticsParamsSchema {
  currency?: Currency;
  end_time?: EndTime;
  instrument_name?: InstrumentName;
  is_rfq?: IsRfq;
  start_time?: StartTime;
}
export interface PublicAllUserStatisticsResponseSchema {
  id: string | number;
  result: Result;
}
export interface AllUserStatisticsSchema {
  first_trade_timestamp?: FirstTradeTimestamp;
  last_trade_timestamp?: LastTradeTimestamp;
  total_fees: TotalFees;
  total_notional_volume: TotalNotionalVolume;
  total_premium_volume: TotalPremiumVolume;
  total_trades: TotalTrades;
  wallet: Wallet;
}
