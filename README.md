# orderbook-stubs
Repo for Derive Orderbook API stubs

# Typescript Usage

Meant to be used as helpers when creating typescript client like so:
```typescript
import { PrivateDepositJSONRPCSchema } from '../orderbook-stubs/typescript/stubs/private.deposit';

const response = await tryRPC<PrivateDepositJSONRPCSchema>(
      `private/deposit`,
      {
        subaccount_id: subaccount.subaccountId,
        signer: ctx.wallet.address,
        nonce: deposit_order.nonce,
        amount: `100`,
        signature: deposit_order.signature,
        signature_expiry_sec: deposit_order.expiry,
        asset_name: 'USDC',
      },
      ctx.wallet,
    );
    if (!isRPCError(response)) {
      expect.fail('Expected a response error from depositing');
    }
```

Where the tryRPC method looks something like
```typescript

export type ResponseDigest<R = any> = {
  response: AxiosResponse<R>;
  stringified: string;
};

interface LyraAuthHeader {
  [key: string]: string;
  'X-LyraWallet': string;
  'X-LyraTimestamp': string;
  'X-LyraSignature': string;
}

export async function tryRequest<T = any, R = any>(
  method: Method,
  subroute: string,
  data: T,
  authHeaders?: LyraAuthHeader,
  base_url: string = process.env.HTTP_ADDRESS || 'https://api-demo.lyra.finance',
): Promise<ResponseDigest<R>> {
  const url = base_url + subroute;

  const headers = authHeaders ? (authHeaders as Record<string, string>) : ({} as Record<string, string>);

  try {
    const response = await axios.request<R>({
      method,
      url,
      data,
      headers,
    });
    const stringified = JSON.stringify(response.data);
    return {
      response: response,
      stringified: stringified,
    };
  } catch (error) {
    let errorMessage;
    if (error instanceof AxiosError) {
      errorMessage =
        getCurrentUTCTime() +
        `:: Caught Axios error while ${method}:${url} with message ${error.message} and code ${error.code}`;
      errorMessage += `\nRPC error message: ${JSON.stringify(error.response?.data, null, '\t')}`;
    } else if (error instanceof Error) {
      errorMessage = getCurrentUTCTime() + `:: Caught error while ${method}:${url} with message ${error.message}`;
    } else {
      errorMessage = getCurrentUTCTime() + `:: Caught unknown error while ${method}:${url} with message ${error}`;
    }
    throw new Error(errorMessage);
  }
}

```