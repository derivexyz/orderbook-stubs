/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Gets the value of a vault's token against the base currency, underlying currency, and USD for a timestamp range.<br /><br />The name of the vault from the Vault proxy contract is used to fetch the vault's value.
 */
export type PublicGetVaultShare = PublicGetVaultShareJSONRPCSchema;
export type HttpMethod = "GET";
export type Method = "public/get_vault_share";
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
 * Name of the vault
 */
export type VaultName = string;
/**
 * Total number of items, across all pages
 */
export type Count = number;
/**
 * Number of pages
 */
export type NumPages = number;
/**
 * The value of the vault's token against the base currency. Ex: rswETHC vs rswETH
 */
export type BaseValue = string;
/**
 * The Derive chain block number
 */
export type BlockNumber = number;
/**
 * Timestamp of the Derive chain block number
 */
export type BlockTimestamp = number;
/**
 * The value of the vault's token against the underlying currency. Ex: rswETHC vs ETH
 */
export type UnderlyingValue = string | null;
/**
 * The value of the vault's token against USD
 */
export type UsdValue = string;
/**
 * List of vault history shares, recent first
 */
export type VaultShares = VaultShareResponseSchema[];

export interface PublicGetVaultShareJSONRPCSchema {
  request: PublicGetVaultShareRequestSchema;
  response: PublicGetVaultShareResponseSchema;
}
export interface PublicGetVaultShareRequestSchema {
  httpMethod: HttpMethod;
  id?: string | number;
  method: Method;
  params: PublicGetVaultShareParamsSchema;
}
export interface PublicGetVaultShareParamsSchema {
  from_timestamp_sec: FromTimestampSec;
  page?: Page;
  page_size?: PageSize;
  to_timestamp_sec: ToTimestampSec;
  vault_name: VaultName;
}
export interface PublicGetVaultShareResponseSchema {
  id: string | number;
  result: PublicGetVaultShareResultSchema;
}
export interface PublicGetVaultShareResultSchema {
  pagination: PaginationInfoSchema;
  vault_shares: VaultShares;
}
/**
 * Pagination info
 */
export interface PaginationInfoSchema {
  count: Count;
  num_pages: NumPages;
}
export interface VaultShareResponseSchema {
  base_value: BaseValue;
  block_number: BlockNumber;
  block_timestamp: BlockTimestamp;
  underlying_value: UnderlyingValue;
  usd_value: UsdValue;
}
