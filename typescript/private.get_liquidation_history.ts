/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 *
 * Required minimum session key permission level is `read_only`
 */
export type PrivateGetLiquidationHistory = PrivateGetLiquidationHistoryJSONRPCSchema;
export type HttpMethod = "POST";
export type Method = "private/get_liquidation_history";
/**
 * End timestamp of the event history (default current time)
 */
export type EndTimestamp = number;
/**
 * Start timestamp of the event history (default 0)
 */
export type StartTimestamp = number;
/**
 * Subaccount id
 */
export type SubaccountId = number;
/**
 * Unique ID of the auction
 */
export type AuctionId = string;
/**
 * Type of auction
 */
export type AuctionType = "solvent" | "insolvent";
export type AmountsLiquidated1 = string;
/**
 * Cash received by the subaccount for the liquidation. For the liquidated accounts this is the amount the liquidator paid to buy out the percentage of the portfolio. For the liquidator account, this is the amount they received from the security module (if positive) or the amount they paid for the bid (if negative)
 */
export type CashReceived = string;
/**
 * Realized PnL due to liquidating or being liquidated at a discount to mark portfolio value
 */
export type DiscountPnl = string;
/**
 * Percent of the subaccount that was liquidated
 */
export type PercentLiquidated = string;
export type PositionsRealizedPnl1 = string;
export type PositionsRealizedPnlExclFees1 = string;
/**
 * Realized PnL of the auction bid, assuming positions are closed at mark price at the time of the liquidation
 */
export type RealizedPnl = string;
/**
 * Realized PnL of the auction bid, excluding fees from total cost basis, assuming positions are closed at mark price at the time of the liquidation
 */
export type RealizedPnlExclFees = string;
/**
 * Timestamp of the bid (in ms since UNIX epoch)
 */
export type Timestamp = number;
/**
 * Hash of the bid transaction
 */
export type TxHash = string;
/**
 * List of auction bid events
 */
export type Bids = AuctionBidEventSchema[];
/**
 * Timestamp of the auction end (in ms since UNIX epoch), or `null` if not ended
 */
export type EndTimestamp1 = number | null;
/**
 * Fee paid by the subaccount
 */
export type Fee = string;
/**
 * Timestamp of the auction start (in ms since UNIX epoch)
 */
export type StartTimestamp1 = number;
/**
 * Liquidated subaccount ID
 */
export type SubaccountId1 = number;
/**
 * Hash of the transaction that started the auction
 */
export type TxHash1 = string;
export type Result = AuctionResultSchema[];

export interface PrivateGetLiquidationHistoryJSONRPCSchema {
  request: PrivateGetLiquidationHistoryRequestSchema;
  response: PrivateGetLiquidationHistoryResponseSchema;
}
export interface PrivateGetLiquidationHistoryRequestSchema {
  httpMethod: HttpMethod;
  id?: string | number;
  method: Method;
  params: PrivateGetLiquidationHistoryParamsSchema;
}
export interface PrivateGetLiquidationHistoryParamsSchema {
  end_timestamp?: EndTimestamp;
  start_timestamp?: StartTimestamp;
  subaccount_id: SubaccountId;
}
export interface PrivateGetLiquidationHistoryResponseSchema {
  id: string | number;
  result: Result;
}
export interface AuctionResultSchema {
  auction_id: AuctionId;
  auction_type: AuctionType;
  bids: Bids;
  end_timestamp: EndTimestamp1;
  fee: Fee;
  start_timestamp: StartTimestamp1;
  subaccount_id: SubaccountId1;
  tx_hash: TxHash1;
}
export interface AuctionBidEventSchema {
  amounts_liquidated: AmountsLiquidated;
  cash_received: CashReceived;
  discount_pnl: DiscountPnl;
  percent_liquidated: PercentLiquidated;
  positions_realized_pnl: PositionsRealizedPnl;
  positions_realized_pnl_excl_fees: PositionsRealizedPnlExclFees;
  realized_pnl: RealizedPnl;
  realized_pnl_excl_fees: RealizedPnlExclFees;
  timestamp: Timestamp;
  tx_hash: TxHash;
}
/**
 * Amounts of each asset that were closed
 */
export interface AmountsLiquidated {
  [k: string]: AmountsLiquidated1;
}
/**
 * Realized PnL of each position that was closed
 */
export interface PositionsRealizedPnl {
  [k: string]: PositionsRealizedPnl1;
}
/**
 * Realized PnL of each position that was closed, excluding fees from total cost basis
 */
export interface PositionsRealizedPnlExclFees {
  [k: string]: PositionsRealizedPnlExclFees1;
}