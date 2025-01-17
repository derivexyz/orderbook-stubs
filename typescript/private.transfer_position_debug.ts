/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Returns useful data for debugging a `private/transfer_position` call
 * Required minimum session key permission level is `read_only`
 */
export type PrivateTransferPositionDebug = PrivateTransferPositionDebugJSONRPCSchema;
export type HttpMethod = "POST";
export type Method = "private/transfer_position_debug";
/**
 * Order amount in units of the base
 */
export type Amount = string;
/**
 * Order direction
 */
export type Direction = "buy" | "sell";
/**
 * Instrument name
 */
export type InstrumentName = string;
/**
 * Limit price in quote currency.<br />This field is still required for market orders because it is a component of the signature. However, market orders will not leave a resting order in the book in case of a partial fill.
 */
export type LimitPrice = string;
/**
 * Max fee per unit of volume, denominated in units of the quote currency (usually USDC).Order will be rejected if the supplied max fee is below the estimated fee for this order.
 */
export type MaxFee = string;
/**
 * Unique nonce defined as <UTC_timestamp in ms><random_number_up_to_3_digits> (e.g. 1695836058725001, where 001 is the random number).Note, using a random number beyond 3 digits will cause JSON serialization to fail.
 */
export type Nonce = number;
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
 * Public key (wallet) of the account
 */
export type Wallet = string;
/**
 * Keccak hashed action data
 */
export type ActionHash = string;
/**
 * ABI encoded order data
 */
export type EncodedData = string;
/**
 * Keccak hashed encoded_data
 */
export type EncodedDataHashed = string;
export type Asset = string;
export type DesiredAmount = string;
export type IsBid = boolean;
export type LimitPrice1 = string;
export type RecipientId = number;
export type SubId = number;
export type TradeId = string;
export type WorstFee = string;
export type Expiry = number;
export type Module = string;
export type Nonce1 = number;
export type Owner = string;
export type Signature1 = string;
export type Signer1 = string;
export type SubaccountId1 = number;
/**
 * EIP 712 typed data hash
 */
export type TypedDataHash = string;

export interface PrivateTransferPositionDebugJSONRPCSchema {
  request: PrivateTransferPositionDebugRequestSchema;
  response: PrivateTransferPositionDebugResponseSchema;
}
export interface PrivateTransferPositionDebugRequestSchema {
  httpMethod: HttpMethod;
  id?: string | number;
  method: Method;
  params: PrivateTransferPositionDebugParamsSchema;
}
export interface PrivateTransferPositionDebugParamsSchema {
  maker_params: TradeModuleParamsSchema;
  taker_params: TradeModuleParamsSchema1;
  wallet: Wallet;
}
/**
 * Maker order parameters and signature. Maximum transfer amount is limited by the size of the maker position. Transfers that increase the maker's position size are not allowed.
 */
export interface TradeModuleParamsSchema {
  amount: Amount;
  direction: Direction;
  instrument_name: InstrumentName;
  limit_price: LimitPrice;
  max_fee: MaxFee;
  nonce: Nonce;
  signature: Signature;
  signature_expiry_sec: SignatureExpirySec;
  signer: Signer;
  subaccount_id: SubaccountId;
}
/**
 * Taker order parameters and signature
 */
export interface TradeModuleParamsSchema1 {
  amount: Amount;
  direction: Direction;
  instrument_name: InstrumentName;
  limit_price: LimitPrice;
  max_fee: MaxFee;
  nonce: Nonce;
  signature: Signature;
  signature_expiry_sec: SignatureExpirySec;
  signer: Signer;
  subaccount_id: SubaccountId;
}
export interface PrivateTransferPositionDebugResponseSchema {
  id: string | number;
  result: PrivateTransferPositionDebugResultSchema;
}
export interface PrivateTransferPositionDebugResultSchema {
  maker_result: PrivateOrderDebugResultSchema;
  taker_result: PrivateOrderDebugResultSchema1;
}
export interface PrivateOrderDebugResultSchema {
  action_hash: ActionHash;
  encoded_data: EncodedData;
  encoded_data_hashed: EncodedDataHashed;
  raw_data: SignedTradeOrderSchema;
  typed_data_hash: TypedDataHash;
}
/**
 * Raw order data
 */
export interface SignedTradeOrderSchema {
  data: TradeModuleDataSchema;
  expiry: Expiry;
  module: Module;
  nonce: Nonce1;
  owner: Owner;
  signature: Signature1;
  signer: Signer1;
  subaccount_id: SubaccountId1;
}
export interface TradeModuleDataSchema {
  asset: Asset;
  desired_amount: DesiredAmount;
  is_bid: IsBid;
  limit_price: LimitPrice1;
  recipient_id: RecipientId;
  sub_id: SubId;
  trade_id: TradeId;
  worst_fee: WorstFee;
}
export interface PrivateOrderDebugResultSchema1 {
  action_hash: ActionHash;
  encoded_data: EncodedData;
  encoded_data_hashed: EncodedDataHashed;
  raw_data: SignedTradeOrderSchema;
  typed_data_hash: TypedDataHash;
}
