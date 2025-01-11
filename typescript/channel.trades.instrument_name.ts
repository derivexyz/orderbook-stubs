/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Subscribe to trades (order executions) for a given instrument name.
 */
export type TradesInstrumentName = TradesInstrumentNamePubSubSchema;
/**
 * Instrument name
 */
export type InstrumentName = string;
export type Method = string;
/**
 * Subscribed channel name
 */
export type Channel = string;
/**
 * Direction of the taker order
 */
export type Direction = "buy" | "sell";
/**
 * Index price of the underlying at the time of the trade
 */
export type IndexPrice = string;
/**
 * Instrument name
 */
export type InstrumentName1 = string;
/**
 * Mark price of the instrument at the time of the trade
 */
export type MarkPrice = string;
/**
 * Quote ID if the trade was executed via RFQ
 */
export type QuoteId = string | null;
/**
 * Trade timestamp (in ms since Unix epoch)
 */
export type Timestamp = number;
/**
 * Amount filled in this trade
 */
export type TradeAmount = string;
/**
 * Trade ID
 */
export type TradeId = string;
/**
 * Price at which the trade was filled
 */
export type TradePrice = string;
export type Data = TradePublicResponseSchema[];

export interface TradesInstrumentNamePubSubSchema {
  channel_params: TradesInstrumentNameChannelSchema;
  notification: TradesInstrumentNameNotificationSchema;
}
export interface TradesInstrumentNameChannelSchema {
  instrument_name: InstrumentName;
}
export interface TradesInstrumentNameNotificationSchema {
  method: Method;
  params: TradesInstrumentNameNotificationParamsSchema;
}
export interface TradesInstrumentNameNotificationParamsSchema {
  channel: Channel;
  data: Data;
}
export interface TradePublicResponseSchema {
  direction: Direction;
  index_price: IndexPrice;
  instrument_name: InstrumentName1;
  mark_price: MarkPrice;
  quote_id: QuoteId;
  timestamp: Timestamp;
  trade_amount: TradeAmount;
  trade_id: TradeId;
  trade_price: TradePrice;
}
