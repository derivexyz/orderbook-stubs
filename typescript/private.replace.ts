/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Cancel an existing order with nonce or order_id and create new order with different order_id in a single RPC call.<br /><br />If the cancel fails, the new order will not be created.<br />If the cancel succeeds but the new order fails, the old order will still be cancelled.
 * Required minimum session key permission level is `admin`
 */
export type PrivateReplace = PrivateReplaceJSONRPCSchema;
export type HttpMethod = "POST";
export type Method = "private/replace";
/**
 * Order amount in units of the base
 */
export type Amount = string;
/**
 * Order direction
 */
export type Direction = "buy" | "sell";
/**
 * Optional check to only create new order if old order filled_amount is equal to this value.
 */
export type ExpectedFilledAmount = string | null;
/**
 * Instrument name
 */
export type InstrumentName = string;
/**
 * Optional user-defined label for the order
 */
export type Label = string;
/**
 * Limit price in quote currency.<br />This field is still required for market orders because it is a component of the signature. However, market orders will not leave a resting order in the book in case of a partial fill.
 */
export type LimitPrice = string;
/**
 * Max fee per unit of volume, denominated in units of the quote currency (usually USDC).Order will be rejected if the supplied max fee is below the estimated fee for this order.
 */
export type MaxFee = string;
/**
 * Whether the order is tagged for market maker protections (default false)
 */
export type Mmp = boolean;
/**
 * Unique nonce defined as <UTC_timestamp in ms><random_number_up_to_3_digits> (e.g. 1695836058725001, where 001 is the random number).Note, using a random number beyond 3 digits will cause JSON serialization to fail.
 */
export type Nonce = number;
/**
 * Cancel order by nonce (choose either order_id or nonce).
 */
export type NonceToCancel = number | null;
/**
 * Cancel order by order_id (choose either order_id or nonce).
 */
export type OrderIdToCancel = string | null;
/**
 * Order type:<br />- `limit`: limit order (default)<br />- `market`: market order, note that limit_price is still required for market orders, but unfilled order portion will be marked as cancelled
 */
export type OrderType = "limit" | "market";
/**
 * If true, the order will not be able to increase position's size (default false). If the order amount exceeds available position size, the order will be filled up to the position size and the remainder will be cancelled. This flag is only supported for market orders or non-resting limit orders (IOC or FOK)
 */
export type ReduceOnly = boolean;
/**
 * Optional referral code for the order
 */
export type ReferralCode = string;
/**
 * UTC timestamp in ms, if provided the matching engine will reject the order with an error if `reject_timestamp` < `server_time`. Note that the timestamp must be consistent with the server time: use `public/get_time` method to obtain current server time.
 */
export type RejectTimestamp = number;
/**
 * Ethereum signature of the order
 */
export type Signature = string;
/**
 * Unix timestamp in seconds. Order signature becomes invalid after this time, and the system will cancel the order.Expiry MUST be at least 5 min from now.
 */
export type SignatureExpirySec = number;
/**
 * Owner wallet address or registered session key that signed order
 */
export type Signer = string;
/**
 * Subaccount ID
 */
export type SubaccountId = number;
/**
 * Time in force behaviour:<br />- `gtc`: good til cancelled (default)<br />- `post_only`: a limit order that will be rejected if it crosses any order in the book, i.e. acts as a taker order<br />- `fok`: fill or kill, will be rejected if it is not fully filled<br />- `ioc`: immediate or cancel, fill at best bid/ask (market) or at limit price (limit), the unfilled portion is cancelled<br />Note that the order will still expire on the `signature_expiry_sec` timestamp.
 */
export type TimeInForce = "gtc" | "post_only" | "fok" | "ioc";
/**
 * (Required for trigger orders) Index or Market price to trigger order at
 */
export type TriggerPrice = string | null;
/**
 * (Required for trigger orders) Trigger with Mark Price. Index price type no supported yet.
 */
export type TriggerPriceType = ("mark" | "index") | null;
/**
 * (Required for trigger orders) Stop-loss or Take-profit
 */
export type TriggerType = ("stoploss" | "takeprofit") | null;
/**
 * Order amount in units of the base
 */
export type Amount1 = string;
/**
 * Average fill price
 */
export type AveragePrice = string;
/**
 * If cancelled, reason behind order cancellation
 */
export type CancelReason =
  | ""
  | "user_request"
  | "mmp_trigger"
  | "insufficient_margin"
  | "signed_max_fee_too_low"
  | "cancel_on_disconnect"
  | "ioc_or_market_partial_fill"
  | "session_key_deregistered"
  | "subaccount_withdrawn"
  | "compliance"
  | "trigger_failed";
/**
 * Creation timestamp (in ms since Unix epoch)
 */
export type CreationTimestamp = number;
/**
 * Order direction
 */
export type Direction1 = "buy" | "sell";
/**
 * Total filled amount for the order
 */
export type FilledAmount = string;
/**
 * Instrument name
 */
export type InstrumentName1 = string;
/**
 * Whether the order was generated through `private/transfer_position`
 */
export type IsTransfer = boolean;
/**
 * Optional user-defined label for the order
 */
export type Label1 = string;
/**
 * Last update timestamp (in ms since Unix epoch)
 */
export type LastUpdateTimestamp = number;
/**
 * Limit price in quote currency
 */
export type LimitPrice1 = string;
/**
 * Max fee in units of the quote currency
 */
export type MaxFee1 = string;
/**
 * Whether the order is tagged for market maker protections
 */
export type Mmp1 = boolean;
/**
 * Unique nonce defined as <UTC_timestamp in ms><random_number_up_to_3_digits> (e.g. 1695836058725001, where 001 is the random number)
 */
export type Nonce1 = number;
/**
 * Total order fee paid so far
 */
export type OrderFee = string;
/**
 * Order ID
 */
export type OrderId = string;
/**
 * Order status
 */
export type OrderStatus = "open" | "filled" | "cancelled" | "expired" | "untriggered";
/**
 * Order type
 */
export type OrderType1 = "limit" | "market";
/**
 * Quote ID if the trade was executed via RFQ
 */
export type QuoteId = string | null;
/**
 * If replaced, ID of the order that was replaced
 */
export type ReplacedOrderId = string | null;
/**
 * Ethereum signature of the order
 */
export type Signature1 = string;
/**
 * Signature expiry timestamp
 */
export type SignatureExpirySec1 = number;
/**
 * Owner wallet address or registered session key that signed order
 */
export type Signer1 = string;
/**
 * Subaccount ID
 */
export type SubaccountId1 = number;
/**
 * Time in force
 */
export type TimeInForce1 = "gtc" | "post_only" | "fok" | "ioc";
/**
 * (Required for trigger orders) Index or Market price to trigger order at
 */
export type TriggerPrice1 = string | null;
/**
 * (Required for trigger orders) Trigger with Index or Mark Price
 */
export type TriggerPriceType1 = ("mark" | "index") | null;
/**
 * (Required for trigger orders) Error message if error occured during trigger
 */
export type TriggerRejectMessage = string | null;
/**
 * (Required for trigger orders) Stop-loss or Take-profit.
 */
export type TriggerType1 = ("stoploss" | "takeprofit") | null;
export type Code = number;
export type Data = string | null;
export type Message = string;
/**
 * List of trades executed by the created order
 */
export type Trades = TradeResponseSchema[] | null;
/**
 * Order direction
 */
export type Direction2 = "buy" | "sell";
/**
 * Index price of the underlying at the time of the trade
 */
export type IndexPrice = string;
/**
 * Instrument name
 */
export type InstrumentName2 = string;
/**
 * Whether the trade was generated through `private/transfer_position`
 */
export type IsTransfer1 = boolean;
/**
 * Optional user-defined label for the order
 */
export type Label2 = string;
/**
 * Role of the user in the trade
 */
export type LiquidityRole = "maker" | "taker";
/**
 * Mark price of the instrument at the time of the trade
 */
export type MarkPrice = string;
/**
 * Order ID
 */
export type OrderId1 = string;
/**
 * Quote ID if the trade was executed via RFQ
 */
export type QuoteId1 = string | null;
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
export type SubaccountId2 = number;
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
 * The transaction id of the related settlement transaction
 */
export type TransactionId = string;
/**
 * Blockchain transaction hash
 */
export type TxHash = string | null;
/**
 * Blockchain transaction status
 */
export type TxStatus = "requested" | "pending" | "settled" | "reverted" | "ignored" | "timed_out";

export interface PrivateReplaceJSONRPCSchema {
  request: PrivateReplaceRequestSchema;
  response: PrivateReplaceResponseSchema;
}
export interface PrivateReplaceRequestSchema {
  httpMethod: HttpMethod;
  id?: string | number;
  method: Method;
  params: PrivateReplaceParamsSchema;
}
export interface PrivateReplaceParamsSchema {
  amount: Amount;
  direction: Direction;
  expected_filled_amount?: ExpectedFilledAmount;
  instrument_name: InstrumentName;
  label?: Label;
  limit_price: LimitPrice;
  max_fee: MaxFee;
  mmp?: Mmp;
  nonce: Nonce;
  nonce_to_cancel?: NonceToCancel;
  order_id_to_cancel?: OrderIdToCancel;
  order_type?: OrderType;
  reduce_only?: ReduceOnly;
  referral_code?: ReferralCode;
  reject_timestamp?: RejectTimestamp;
  signature: Signature;
  signature_expiry_sec: SignatureExpirySec;
  signer: Signer;
  subaccount_id: SubaccountId;
  time_in_force?: TimeInForce;
  trigger_price?: TriggerPrice;
  trigger_price_type?: TriggerPriceType;
  trigger_type?: TriggerType;
}
export interface PrivateReplaceResponseSchema {
  id: string | number;
  result: PrivateReplaceResultSchema;
}
export interface PrivateReplaceResultSchema {
  cancelled_order: OrderResponseSchema;
  /**
   * Optional. Returns error during new order creation
   */
  create_order_error?: RPCErrorFormatSchema | null;
  /**
   * New order that was created
   */
  order?: OrderResponseSchema1 | null;
  trades?: Trades;
}
/**
 * Order that was cancelled
 */
export interface OrderResponseSchema {
  amount: Amount1;
  average_price: AveragePrice;
  cancel_reason: CancelReason;
  creation_timestamp: CreationTimestamp;
  direction: Direction1;
  filled_amount: FilledAmount;
  instrument_name: InstrumentName1;
  is_transfer: IsTransfer;
  label: Label1;
  last_update_timestamp: LastUpdateTimestamp;
  limit_price: LimitPrice1;
  max_fee: MaxFee1;
  mmp: Mmp1;
  nonce: Nonce1;
  order_fee: OrderFee;
  order_id: OrderId;
  order_status: OrderStatus;
  order_type: OrderType1;
  quote_id: QuoteId;
  replaced_order_id?: ReplacedOrderId;
  signature: Signature1;
  signature_expiry_sec: SignatureExpirySec1;
  signer: Signer1;
  subaccount_id: SubaccountId1;
  time_in_force: TimeInForce1;
  trigger_price?: TriggerPrice1;
  trigger_price_type?: TriggerPriceType1;
  trigger_reject_message?: TriggerRejectMessage;
  trigger_type?: TriggerType1;
}
/**
 * Optional. Returns error during new order creation
 */
export interface RPCErrorFormatSchema {
  code: Code;
  data?: Data;
  message: Message;
}
/**
 * New order that was created
 */
export interface OrderResponseSchema1 {
  amount: Amount1;
  average_price: AveragePrice;
  cancel_reason: CancelReason;
  creation_timestamp: CreationTimestamp;
  direction: Direction1;
  filled_amount: FilledAmount;
  instrument_name: InstrumentName1;
  is_transfer: IsTransfer;
  label: Label1;
  last_update_timestamp: LastUpdateTimestamp;
  limit_price: LimitPrice1;
  max_fee: MaxFee1;
  mmp: Mmp1;
  nonce: Nonce1;
  order_fee: OrderFee;
  order_id: OrderId;
  order_status: OrderStatus;
  order_type: OrderType1;
  quote_id: QuoteId;
  replaced_order_id?: ReplacedOrderId;
  signature: Signature1;
  signature_expiry_sec: SignatureExpirySec1;
  signer: Signer1;
  subaccount_id: SubaccountId1;
  time_in_force: TimeInForce1;
  trigger_price?: TriggerPrice1;
  trigger_price_type?: TriggerPriceType1;
  trigger_reject_message?: TriggerRejectMessage;
  trigger_type?: TriggerType1;
}
export interface TradeResponseSchema {
  direction: Direction2;
  index_price: IndexPrice;
  instrument_name: InstrumentName2;
  is_transfer: IsTransfer1;
  label: Label2;
  liquidity_role: LiquidityRole;
  mark_price: MarkPrice;
  order_id: OrderId1;
  quote_id: QuoteId1;
  realized_pnl: RealizedPnl;
  realized_pnl_excl_fees: RealizedPnlExclFees;
  subaccount_id: SubaccountId2;
  timestamp: Timestamp;
  trade_amount: TradeAmount;
  trade_fee: TradeFee;
  trade_id: TradeId;
  trade_price: TradePrice;
  transaction_id: TransactionId;
  tx_hash: TxHash;
  tx_status: TxStatus;
}