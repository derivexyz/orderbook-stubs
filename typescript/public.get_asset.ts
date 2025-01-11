/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Get single asset by asset name
 */
export type PublicGetAsset = PublicGetAssetJSONRPCSchema;
export type HttpMethod = "GET";
export type Method = "public/get_asset";
/**
 * Asset name
 */
export type AssetName = string;
/**
 * On-chain address of Asset.sol contract
 */
export type Address = string;
/**
 * Asset ID of the created asset
 */
export type AssetId = string;
/**
 * Asset name
 */
export type AssetName1 = string;
/**
 * `erc20`, `option`, or `perp`
 */
export type AssetType = "erc20" | "option" | "perp";
/**
 * Underlying currency of asset (`ETH`, `BTC`, etc)
 */
export type Currency = string;
/**
 * Latest borrow index as per `CashAsset.sol` implementation
 */
export type BorrowIndex = string;
/**
 * Number of decimals of the underlying on-chain ERC20 token
 */
export type Decimals = number;
/**
 * Latest supply index as per `CashAsset.sol` implementation
 */
export type SupplyIndex = string;
/**
 * Address of underlying on-chain ERC20 (not V2 asset)
 */
export type UnderlyingErc20Address = string;
/**
 * If `True`: use as collateral in margin calculations
 */
export type IsCollateral = boolean;
/**
 * If `True`: treat as position in margin calculations
 */
export type IsPosition = boolean;
/**
 * Unix timestamp of expiry date (in seconds)
 */
export type Expiry = number;
/**
 * Underlying settlement price index
 */
export type Index = string;
export type OptionType = "C" | "P";
/**
 * Settlement price of the option
 */
export type SettlementPrice = string | null;
export type Strike = string;
/**
 * Latest aggregated funding as per `PerpAsset.sol`
 */
export type AggregateFunding = string;
/**
 * Current hourly funding rate as per `PerpAsset.sol`
 */
export type FundingRate = string;
/**
 * Underlying spot price index for funding rate
 */
export type Index1 = string;
/**
 * Max rate per hour as per `PerpAsset.sol`
 */
export type MaxRatePerHour = string;
/**
 * Min rate per hour as per `PerpAsset.sol`
 */
export type MinRatePerHour = string;
/**
 * Static interest rate as per `PerpAsset.sol`
 */
export type StaticInterestRate = string;
/**
 * SubId identifier used in Asset.sol
 */
export type SubId = string;

export interface PublicGetAssetJSONRPCSchema {
  request: PublicGetAssetRequestSchema;
  response: PublicGetAssetResponseSchema;
}
export interface PublicGetAssetRequestSchema {
  httpMethod: HttpMethod;
  id?: string | number;
  method: Method;
  params: PublicGetAssetParamsSchema;
}
export interface PublicGetAssetParamsSchema {
  asset_name: AssetName;
}
export interface PublicGetAssetResponseSchema {
  id: string | number;
  result: PublicGetAssetResultSchema;
}
export interface PublicGetAssetResultSchema {
  address: Address;
  asset_id: AssetId;
  asset_name: AssetName1;
  asset_type: AssetType;
  currency: Currency;
  /**
   * ERC20-specific details
   */
  erc20_details: ERC20PublicDetailsSchema | null;
  is_collateral: IsCollateral;
  is_position: IsPosition;
  /**
   * Option-specific details
   */
  option_details: OptionPublicDetailsSchema | null;
  /**
   * Perp-specific details
   */
  perp_details: PerpPublicDetailsSchema | null;
  sub_id: SubId;
}
/**
 * ERC20-specific details
 */
export interface ERC20PublicDetailsSchema {
  borrow_index?: BorrowIndex;
  decimals: Decimals;
  supply_index?: SupplyIndex;
  underlying_erc20_address?: UnderlyingErc20Address;
}
/**
 * Option-specific details
 */
export interface OptionPublicDetailsSchema {
  expiry: Expiry;
  index: Index;
  option_type: OptionType;
  settlement_price?: SettlementPrice;
  strike: Strike;
}
/**
 * Perp-specific details
 */
export interface PerpPublicDetailsSchema {
  aggregate_funding: AggregateFunding;
  funding_rate: FundingRate;
  index: Index1;
  max_rate_per_hour: MaxRatePerHour;
  min_rate_per_hour: MinRatePerHour;
  static_interest_rate: StaticInterestRate;
}
