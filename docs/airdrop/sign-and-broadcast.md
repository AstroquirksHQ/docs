# Sign & broadcast airdrop

Final step! :heart_eyes: This is it, we are going to sign & broadcast the airdrop!

## Osmosis

::: warning

TODO document

:::

## Stargaze

::: info

Properly replace `astroquirks_tmp_address_4` by the local wallet name created on
[Create local Osmosis wallet](/airdrop/prepare-addresses#create-local-osmosis-wallet) step.

:::

Sign the transaction:

```bash
osmosisd tx sign stargaze-airdrop-tx.json \
  --chain-id osmosis-1 \
  --from astroquirks_tmp_address_4 \
  --node https://rpc.osmosis.zone:443 \
  --sign-mode amino-json 2> stargaze-airdrop-tx-signed.json
```

Broadcast the transaction:

```bash
osmosisd tx broadcast stargaze-airdrop-tx-signed.json \
  --node https://rpc.osmosis.zone:443
```
