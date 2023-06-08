# Craft airdrop transaction

## Osmosis

::: warning

TODO document

:::

## Stargaze

Prepare memo:

```bash
# properly replace <n> with the nonce of the airdrop (the nth airdrop we did)
STARGAZE_MEMO="Quirky Reward #<n> - From Astroquirks with love <3 (Stargaze)"
```

Declare tmp address:

```bash
# the Keplr wallet temporary address (important: the Osmosis one!)
TMP_ADDRESS=<tmp-osmosis-address>
```

```bash
# /!\ properly replace <token> with the chosen airdrop token
./bin/validatool craft-airdrop-tx \
  --from-csv stargaze-airdrop.csv \
  --token <token> \
  --memo "$STARGAZE_MEMO" \
  --from-address "$TMP_ADDRESS" > stargaze-airdrop-tx.json
```

Copy the `stargaze-airdrop-tx.json` file to `<airdrop-folder>`:

```bash
# /!\ properly replace folder names:
cp stargaze-airdrop-tx.json <airdrop-folder>/airdrop-<YYYY-MM>
```
