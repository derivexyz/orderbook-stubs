/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Get statistics for a specific instrument or instrument type
 */
export type PublicStatistics = PublicStatisticsJSONRPCSchema;
export type HttpMethod = "GET";
export type Method = "public/statistics";
/**
 * Currency for stats
 */
export type Currency = string | null;
/**
 * End time for statistics in ms
 */
export type EndTime = number | null;
/**
 * Instrument name or 'ALL', 'OPTION', 'PERP', 'SPOT'
 */
export type InstrumentName = string;
/**
 * 24h Fees
 */
export type DailyFees = string;
/**
 * 24h Notional volume
 */
export type DailyNotionalVolume = string;
/**
 * 24h Premium volume
 */
export type DailyPremiumVolume = string;
/**
 * 24h Trades
 */
export type DailyTrades = number;
/**
 * Open interest
 */
export type OpenInterest = string;
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

export interface PublicStatisticsJSONRPCSchema {
  request: PublicStatisticsRequestSchema;
  response: PublicStatisticsResponseSchema;
}
export interface PublicStatisticsRequestSchema {
  httpMethod: HttpMethod;
  id?: string | number;
  method: Method;
  params: PublicStatisticsParamsSchema;
}
export interface PublicStatisticsParamsSchema {
  currency?: Currency;
  end_time?: EndTime;
  instrument_name: InstrumentName;
}
export interface PublicStatisticsResponseSchema {
  id: string | number;
  result: PublicStatisticsResultSchema;
}
export interface PublicStatisticsResultSchema {
  daily_fees: DailyFees;
  daily_notional_volume: DailyNotionalVolume;
  daily_premium_volume: DailyPremiumVolume;
  daily_trades: DailyTrades;
  open_interest: OpenInterest;
  total_fees: TotalFees;
  total_notional_volume: TotalNotionalVolume;
  total_premium_volume: TotalPremiumVolume;
  total_trades: TotalTrades;
}
