/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Subscribe to state of ongoing auctions.
 */
export type AuctionsWatch = AuctionsWatchPubSubSchema;
export type Method = string;
/**
 * Subscribed channel name
 */
export type Channel = string;
/**
 * Currency of subaccount (for PM margin type).
 */
export type Currency = string | null;
/**
 * Estimated bid price for this liquidation. This value is not scaled by the bid percent, and instead represents the discounted mark value of the whole subaccount. This value will be negative for insolvent auctions.
 */
export type EstimatedBidPrice = string;
/**
 * Estimated profit relative to `estimated_mtm` if the liquidation is successful, assuming execution at `estimated_percent_bid` and `estimated_bid_price`.
 */
export type EstimatedDiscountPnl = string;
/**
 * Estimated mark-to-market value of the subaccount being auctioned off. This value is not scaled by the bid percent, and instead represents the un-discounted mark value of the whole subaccount.
 */
export type EstimatedMtm = string;
/**
 * An estimate for the maximum percent of the subaccount that can be liquidated.
 */
export type EstimatedPercentBid = string;
/**
 * Last trade ID for the account being auctioned off (to use in the `private/liquidate` endpoint). This value is used to ensure that the state of balances reported in `subaccount_balances` is in sync. A trade ID error from `private/liquidate` indicates that the channel is currently out of sync with the on-chain state of the subaccount due to a pending bid.
 */
export type LastSeenTradeId = number;
/**
 * Margin type of the subaccount being auctioned off. It is recommended to bid on subaccounts using the same margin type and currency as to not run into unsupported currency errors or maximum account size limits.
 */
export type MarginType = "PM" | "SM";
/**
 * Suggested minimum amount of cash to transfer to a newly created subaccount for bidding (to use in the `private/liquidate` endpoint). Any unused cash will get returned back to the original subaccount. If the bidder plans to bid less than the `estimated_percent_bid`, they may scale this value down accordingly.
 */
export type MinCashTransfer = string;
/**
 * Estimated minimum `price_limit` (to use in the `private/liquidate` endpoint). This is the minimum amount of cash that would be required to buy out the percent of the subaccount. If the bidder plans to bid less than the `estimated_percent_bid`, they may scale this value down accordingly.
 */
export type MinPriceLimit = string;
export type SubaccountBalances1 = string;
/**
 * State of the auction.
 */
export type State = "ongoing" | "ended";
/**
 * Subaccount ID being auctioned off.
 */
export type SubaccountId = number;
/**
 * Timestamp of the auction result (in milliseconds since epoch).
 */
export type Timestamp = number;
export type Data = AuctionResultSchema[];

export interface AuctionsWatchPubSubSchema {
  channel_params: AuctionsWatchChannelSchema;
  notification: AuctionsWatchNotificationSchema;
}
export interface AuctionsWatchChannelSchema {}
export interface AuctionsWatchNotificationSchema {
  method: Method;
  params: AuctionsWatchNotificationParamsSchema;
}
export interface AuctionsWatchNotificationParamsSchema {
  channel: Channel;
  data: Data;
}
export interface AuctionResultSchema {
  /**
   * Details of the auction, if ongoing.
   */
  details: AuctionDetailsSchema | null;
  state: State;
  subaccount_id: SubaccountId;
  timestamp: Timestamp;
}
/**
 * Details of the auction, if ongoing.
 */
export interface AuctionDetailsSchema {
  currency: Currency;
  estimated_bid_price: EstimatedBidPrice;
  estimated_discount_pnl: EstimatedDiscountPnl;
  estimated_mtm: EstimatedMtm;
  estimated_percent_bid: EstimatedPercentBid;
  last_seen_trade_id: LastSeenTradeId;
  margin_type: MarginType;
  min_cash_transfer: MinCashTransfer;
  min_price_limit: MinPriceLimit;
  subaccount_balances: SubaccountBalances;
}
/**
 * Current balances of the subaccount being auctioned off. The bidder should expect to receive a percentage of these balances proportional to the `estimated_percent_bid`, and pay `estimated_bid_price * estimated_percent_bid` for them. These balances already include any pending perp settlements and funding payments into the USDC balance.
 */
export interface SubaccountBalances {
  [k: string]: SubaccountBalances1;
}
