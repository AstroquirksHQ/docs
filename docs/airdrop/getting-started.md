# Getting started

Welcome, this tutorial will guide you in all the required steps to do a clean & nice Astroquirks
airdrop.

## Clone repo

Before starting anything, let's clone airdrop repository, and jump into it:

```bash
git clone git@github.com:AstroquirksHQ/airdrops.git
cd airdrop
```

## Create airdrop folder

Create a new folder, named `airdrop-YYYY-MM`, it will contain every useful file created during the airdrop.
That's cool to keep track of them for the future.

```bash
mkdir airdrop-2023-08 # replace by the airdrop year-month
```

Jump into the newly created folder:

```bash
cd airdrop-2023-08 # replace by the airdrop year-month
```

::: info

For the rest of the tutorial, we'll refer this folder as `<airdrop-folder>`.

:::

<!-- ## Old tutorial (TODO: write this cleanly) -->
<!---->
<!-- - ---- OSMO ----- -->
<!---->
<!-- PREPARE TMP ADDRESS -- create tmp address on kplr -- send fund for airdrop tx fees to tmp address -->
<!---->
<!-- WITHDRAW COMMISSION (MULTISIG) -- craft withdraw tx -- sign & broadcast withdraw tx -- send airdrop tokens to tmp address -->
<!---->
<!-- SWAP TO AIRDROP TOKEN -- swap commission to airdrop token -->
<!---->
<!-- AIRDROP -- snapshot delegators -->
<!---->
<!-- ```bash -->
<!-- # from validatool -->
<!-- pipenv shell -->
<!-- export PYTHONPATH=$PYTHONPATH:$(pwd) -->
<!-- ./bin/validatool delegators --to-csv delegators.csv --osmosis-node <https://osmosis-mainnet-rpc.allthatnode.com:1317> -->
<!-- ``` -->
<!---->
<!-- -- compute airdrop distribution -->
<!---->
<!-- ```bash -->
<!-- ./bin/validatool airdrop \\ -->
<!--   --from-csv <snapshot.csv> \\ -->
<!--   --amount <total-amount-to-airdrop> \\ -->
<!--   --min <min-amount-to-be-in-the-airdrop> \\ -->
<!--   --remove-superfluid \\ -->
<!--   --osmosis-node <https://osmosis-mainnet-rpc.allthatnode.com:1317> \\ -->
<!--   --to-csv <output.csv> -->
<!-- ``` -->
<!---->
<!-- -- craft tx airdrop -->
<!---->
<!-- ********************IMPORTANT******************** register denomination for your token in src/token.py -->
<!---->
<!-- - - sign & broadcast airdrop tx -->
<!---->
<!-- ```bash -->
<!-- ./bin/validatool craft-airdrop-tx \\ -->
<!--   --from-csv <distribution.csv> \\ -->
<!--   --token <token> \\ -->
<!--   --memo "Quirky Reward #<n> - From Astroquirks with love <3" \\ -->
<!--   --from-address <sender-address> \\ -->
<!--   > airdrop-tx.json -->
<!-- ``` -->
<!---->
<!-- ```bash -->
<!-- osmosisd tx sign airdrop-tx.json --chain-id osmosis-1 --from AstroquirksTmpAddress2 --node <https://rpc.osmosis.zone:443> --sign-mode amino-json -->
<!-- ``` -->
<!---->
<!-- ```bash -->
<!-- osmosisd tx broadcast airdrop-tx-signed.json --node <https://rpc.osmosis.zone:443> -->
<!-- ``` -->
<!---->
<!-- - send back what’s left yodo yodo -->
<!---->
<!-- on **************quirky_rewards************** now: -->
<!---->
<!-- - go to src/token -->
<!-- - edit the script to put proper tx hash in script + ensure proper node -->
<!---->
<!-- ```bash -->
<!-- python gen_data.py -->
<!-- ``` -->
<!---->
<!-- then update manually the data.json file and struggle with JSON indenting -->
<!---->
<!-- - ---- STARGAZE ----- PREPARE TMP ADDRESS -- create tmp address (stars1emfa3gzm0u3yclcsmkc0assmakwv5nlyj9jqk2) -- send fund for airdrop tx fees to tmp address -->
<!---->
<!-- WITHDRAW COMMISSION (MULTISIG) -- craft withdraw tx -- sign & broadcast withdraw tx -- send airdrop tokens to tmp address -->
<!---->
<!-- SWAP TO AIRDROP TOKEN -- swap commission to airdrop token -->
<!---->
<!-- AIRDROP -- snapshot delagators (done) -- Tranform STARS address to OSMO address <--- NEW -- compute airdrop distribution -- craft tx airdrop -->
<!---->
<!-- - - sign & broadcast airdrop tx -->
