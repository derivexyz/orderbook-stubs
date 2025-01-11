/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Get latest USDC interest rate history
 */
export type PublicGetInterestRateHistory = PublicGetInterestRateHistoryJSONRPCSchema;
export type HttpMethod = "GET";
export type Method = "public/get_interest_rate_history";
/**
 * From timestamp in seconds
 */
export type FromTimestampSec = number;
/**
 * Page number of results to return (default 1, returns last if above `num_pages`)
 */
export type Page = number;
/**
 * Number of results per page (default 100, max 1000)
 */
export type PageSize = number;
/**
 * To timestamp in seconds
 */
export type ToTimestampSec = number;
/**
 * Derive Chain block number
 */
export type Block = number;
/**
 * Borrow APY
 */
export type BorrowApy = string;
/**
 * Supply APY
 */
export type SupplyApy = string;
/**
 * Timestamp in seconds
 */
export type TimestampSec = number;
/**
 * Total USDC borrowed
 */
export type TotalBorrow = string;
/**
 * Total USDC supplied
 */
export type TotalSupply = string;
/**
 * List of interest rates, recent first
 */
export type InterestRates = InterestRateHistoryResponseSchema[];
/**
 * Total number of items, across all pages
 */
export type Count = number;
/**
 * Number of pages
 */
export type NumPages = number;

export interface PublicGetInterestRateHistoryJSONRPCSchema {
  request: PublicGetInterestRateHistoryRequestSchema;
  response: PublicGetInterestRateHistoryResponseSchema;
}
export interface PublicGetInterestRateHistoryRequestSchema {
  httpMethod: HttpMethod;
  id?: string | number;
  method: Method;
  params: PublicGetInterestRateHistoryParamsSchema;
}
export interface PublicGetInterestRateHistoryParamsSchema {
  from_timestamp_sec: FromTimestampSec;
  page?: Page;
  page_size?: PageSize;
  to_timestamp_sec: ToTimestampSec;
}
export interface PublicGetInterestRateHistoryResponseSchema {
  id: string | number;
  result: PublicGetInterestRateHistoryResultSchema;
}
export interface PublicGetInterestRateHistoryResultSchema {
  interest_rates: InterestRates;
  pagination: PaginationInfoSchema;
}
export interface InterestRateHistoryResponseSchema {
  block: Block;
  borrow_apy: BorrowApy;
  supply_apy: SupplyApy;
  timestamp_sec: TimestampSec;
  total_borrow: TotalBorrow;
  total_supply: TotalSupply;
}
/**
 * Pagination info
 */
export interface PaginationInfoSchema {
  count: Count;
  num_pages: NumPages;
}
