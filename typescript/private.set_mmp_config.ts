/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Set the mmp config for the subaccount and currency
 * Required minimum session key permission level is `account`
 */
export type PrivateSetMmpConfig = PrivateSetMmpConfigJSONRPCSchema;
export type HttpMethod = "POST";
export type Method = "private/set_mmp_config";
/**
 * Currency of this mmp config
 */
export type Currency = string;
/**
 * Maximum total order amount that can be traded within the mmp_interval across all instruments of the provided currency. The amounts are not netted, so a filled bid of 1 and a filled ask of 2 would count as 3.<br />Default: 0 (no limit)
 */
export type MmpAmountLimit = string;
/**
 * Maximum total delta that can be traded within the mmp_interval across all instruments of the provided currency. This quantity is netted, so a filled order with +1 delta and a filled order with -2 delta would count as -1<br />Default: 0 (no limit)
 */
export type MmpDeltaLimit = string;
/**
 * Time interval in ms setting how long the subaccount is frozen after an mmp trigger, if 0 then a manual reset would be required via private/reset_mmp
 */
export type MmpFrozenTime = number;
/**
 * Time interval in ms over which the limits are monotored, if 0 then mmp is disabled
 */
export type MmpInterval = number;
/**
 * Subaccount_id for which to set the config
 */
export type SubaccountId = number;
/**
 * Currency of this mmp config
 */
export type Currency1 = string;
/**
 * Maximum total order amount that can be traded within the mmp_interval across all instruments of the provided currency. The amounts are not netted, so a filled bid of 1 and a filled ask of 2 would count as 3.<br />Default: 0 (no limit)
 */
export type MmpAmountLimit1 = string;
/**
 * Maximum total delta that can be traded within the mmp_interval across all instruments of the provided currency. This quantity is netted, so a filled order with +1 delta and a filled order with -2 delta would count as -1<br />Default: 0 (no limit)
 */
export type MmpDeltaLimit1 = string;
/**
 * Time interval in ms setting how long the subaccount is frozen after an mmp trigger, if 0 then a manual reset would be required via private/reset_mmp
 */
export type MmpFrozenTime1 = number;
/**
 * Time interval in ms over which the limits are monotored, if 0 then mmp is disabled
 */
export type MmpInterval1 = number;
/**
 * Subaccount_id for which to set the config
 */
export type SubaccountId1 = number;

export interface PrivateSetMmpConfigJSONRPCSchema {
  request: PrivateSetMmpConfigRequestSchema;
  response: PrivateSetMmpConfigResponseSchema;
}
export interface PrivateSetMmpConfigRequestSchema {
  httpMethod: HttpMethod;
  id?: string | number;
  method: Method;
  params: PrivateSetMmpConfigParamsSchema;
}
export interface PrivateSetMmpConfigParamsSchema {
  currency: Currency;
  mmp_amount_limit?: MmpAmountLimit;
  mmp_delta_limit?: MmpDeltaLimit;
  mmp_frozen_time: MmpFrozenTime;
  mmp_interval: MmpInterval;
  subaccount_id: SubaccountId;
}
export interface PrivateSetMmpConfigResponseSchema {
  id: string | number;
  result: PrivateSetMmpConfigResultSchema;
}
export interface PrivateSetMmpConfigResultSchema {
  currency: Currency1;
  mmp_amount_limit?: MmpAmountLimit1;
  mmp_delta_limit?: MmpDeltaLimit1;
  mmp_frozen_time: MmpFrozenTime1;
  mmp_interval: MmpInterval1;
  subaccount_id: SubaccountId1;
}
