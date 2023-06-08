# Compute airdrop distribution

## Osmosis

::: warning

TODO document

:::

## Stargaze

Generate the airdrop distribution file:

```bash
# /!\ properly replace <amount-to-airdrop>
#     hint: STARS has a magnitude of 6
#           so 3000 STARS === 3000000000 for --amount option
./bin/validatool airdrop \
  --from-csv stargaze-delegators.csv \
  --amount <amount-to-airdrop> \
  --min 2000000000 \
  --remove-superfluid \
  --osmosis-node https://lcd.osmosis.zone:443 \
  --to-csv stargaze-airdrop.csv
```

::: warning IMPORTANT

Open the file `stargaze-delegators.csv` and :bomb: nuke all the weird addresses (the long
interchain ones)

:::

Declare path to `Astroquirks/my-cosmos-tool` repo that we assume you have already cloned & built:

```bash
# replace with the location on your computer
MY_COSMOS_TOOLS_PATH="$HOME/astroquirks/my-cosmos-tools"
```

Convert the addresses to OSMO addresses:

```bash
node $MY_COSMOS_TOOLS_PATH/dist/addrMatcher.js \
  -f stargaze-airdrop.csv \
  -r https://rpc-stargaze-ia.cosmosia.notional.ventures \
  --to osmo
```

Copy the `stargaze-airdrop.csv` file to `<airdrop-folder>`:

```bash
# /!\ properly replace folder names:
cp stargaze-airdrop.csv <airdrop-folder>/airdrop-<YYYY-MM>
```
