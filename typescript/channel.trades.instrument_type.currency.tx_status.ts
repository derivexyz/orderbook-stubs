/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Subscribe to the status on on-chain trade settlement events for a given instrument type and currency.
 */
export type TradesInstrumentTypeCurrencyTxStatus = TradesInstrumentTypeCurrencyTxStatusPubSubSchema;
/**
 * Currency
 */
export type Currency = string;
/**
 * Instrument type
 */
export type InstrumentType = "erc20" | "option" | "perp";
/**
 * Transaction status
 */
export type TxStatus = "settled" | "reverted" | "timed_out";
export type Method = string;
/**
 * Subscribed channel name
 */
export type Channel = string;
/**
 * Order direction
 */
export type Direction = "buy" | "sell";
/**
 * Index price of the underlying at the time of the trade
 */
export type IndexPrice = string;
/**
 * Instrument name
 */
export type InstrumentName = string;
/**
 * Role of the user in the trade
 */
export type LiquidityRole = "maker" | "taker";
/**
 * Mark price of the instrument at the time of the trade
 */
export type MarkPrice = string;
/**
 * Quote ID if the trade was executed via RFQ
 */
export type QuoteId = string | null;
/**
 * Realized PnL for this trade
 */
export type RealizedPnl = string;
/**
 * Realized PnL for this trade using cost accounting that excludes fees
 */
export type RealizedPnlExclFees = string;
/**
 * Subaccount ID
 */
export type SubaccountId = number;
/**
 * Trade timestamp (in ms since Unix epoch)
 */
export type Timestamp = number;
/**
 * Amount filled in this trade
 */
export type TradeAmount = string;
/**
 * Fee for this trade
 */
export type TradeFee = string;
/**
 * Trade ID
 */
export type TradeId = string;
/**
 * Price at which the trade was filled
 */
export type TradePrice = string;
/**
 * Blockchain transaction hash
 */
export type TxHash = string;
/**
 * Blockchain transaction status
 */
export type TxStatus1 = "settled" | "reverted" | "timed_out";
/**
 * Wallet address (owner) of the subaccount
 */
export type Wallet = string;
export type Data = TradeSettledPublicResponseSchema[];

export interface TradesInstrumentTypeCurrencyTxStatusPubSubSchema {
  channel_params: TradesInstrumentTypeCurrencyTxStatusChannelSchema;
  notification: TradesInstrumentTypeCurrencyTxStatusNotificationSchema;
}
export interface TradesInstrumentTypeCurrencyTxStatusChannelSchema {
  currency: Currency;
  instrument_type: InstrumentType;
  tx_status: TxStatus;
}
export interface TradesInstrumentTypeCurrencyTxStatusNotificationSchema {
  method: Method;
  params: TradesInstrumentTypeCurrencyTxStatusNotificationParamsSchema;
}
export interface TradesInstrumentTypeCurrencyTxStatusNotificationParamsSchema {
  channel: Channel;
  data: Data;
}
export interface TradeSettledPublicResponseSchema {
  direction: Direction;
  index_price: IndexPrice;
  instrument_name: InstrumentName;
  liquidity_role: LiquidityRole;
  mark_price: MarkPrice;
  quote_id: QuoteId;
  realized_pnl: RealizedPnl;
  realized_pnl_excl_fees: RealizedPnlExclFees;
  subaccount_id: SubaccountId;
  timestamp: Timestamp;
  trade_amount: TradeAmount;
  trade_fee: TradeFee;
  trade_id: TradeId;
  trade_price: TradePrice;
  tx_hash: TxHash;
  tx_status: TxStatus1;
  wallet: Wallet;
}