# Prepare temporary addresses

To smoothly swap tokens, we generate a temporary wallet.

## Generate seed

Go to **[Ian Coleman Mnemonic Code Converter](https://iancoleman.io/bip39/)**, choose `12 words`
then click `Generate` :

![Generate seed](/img/generate-seed.jpg)

Copy the generated seed.

### Save seed in airdrop folder

Save the seed in `<airdrop-folder>/tmp-seed` file:

```bash
# from the <airdrop-folder>
echo "fiber tell gentle certain ..." > ./tmp-seed
```

## Create Keplr wallet

1. Open Keplr extension, and click `Add wallet`

::: details See screenshot

![Create wallet on Keplr](/img/keplr-create-wallet.jpg)

:::

2. Choose `Import an existing wallet`

::: details See screenshot

![Import existing](/img/import-existing-wallet.jpg)

:::

3. Choose `Use recovery phrase or private key`

::: details See screenshot

![Import existing](/img/use-recovery.jpg)

:::

4. Enter your 12 words then click `Import`

::: details See screenshot

![Import existing](/img/input-seed.jpg)

:::

5. Choose wallet name, for consistency let's use `airdrop-<YYYY-MM>`

::: details See screenshot

![Import existing](/img/wallet-name.jpg)

:::

6. Un-check `Cosmos` and check `Osmosis` & `Stargaze` networks, then click `Save`

::: details See screenshot

![Import existing](/img/choose-networks.jpg)

:::

## Generate addresses

You can copy the addresses from there:

![Copy addresses](/img/copy-addresses.jpg)

### Save the addresses to airdrop folder

Save the Osmosis address:

```bash
# from the <airdrop-folder>
echo "osmo13sc...qp0cq" > ./osmosis-tmp-address
```

## Create local Osmosis wallet

Because we'll sign & broadcast the final airdrop txs locally (on Osmosis network),
we need to have the wallet created locally as well.

```bash
# use name `astroquirks_tmp_address_<n>` where `<n>` is the #nth airdrop
osmosisd keys add astroquirks_tmp_address_4 --interactive
```

It will ask for the seed & passphrase:

```bash
> Enter your bip39 mnemonic, or hit enter to generate one.
bracket civil mass hollow ... # << paste the seed and press Enter

> Enter your bip39 passphrase. This is combined with the mnemonic to derive the seed. Most users should just hit enter to use the default, ""
# << just press Enter
```

It should output something like this:

```txt {3}
- name: astroquirks_tmp_address_6
  type: local
  address: osmo13scqsye2dlgfdquz0ljqusppc3kluxjv9qp0cq
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"AhgERt5hjAWvsh+IqMeXSjH+xmxeLb+S6Pbjg0LIV2tI"}'
  mnemonic: ""
```

::: info

Here, verify that the `address` match the address created on Keplr

:::

## Send funds to addresses

They will be used to pay for fees, and we'll send back the remaining funds at the end.

- Send `1 OSMO` to the temporary OSMO address
- Send `1 STARS` to the temporary STARS address
