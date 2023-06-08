# Snapshot delegators

## Prerequisites

Clone validatool:

```bash
git clone git@github.com:AstroquirksHQ/validatool.git
```

Go to a specific branch :rage:

```bash
git checkout feature/build-delegation-history
```

Enter virtual env :rage:

```bash
cd validatool
pipenv shell
```

From the virtualenv, export some Python path :rage:

```bash
export PYTHONPATH=$PYTHONPATH:$(pwd)
```

## Osmosis

Create snapshot:

```bash
./bin/validatool delegators \
  --to-csv osmosis-delegators.csv \
  --osmosis-node https://osmosis-api.polkachu.com
```

Copy the `osmosis-delegators.csv` file to `<airdrop-folder>`:

```bash
# /!\ properly replace folder names:
cp osmosis-delegators.csv <airdrop-folder>/airdrop-<YYYY-MM>
```

## Stargaze

Create snapshot:

<!-- ```bash -->
<!-- ./bin/validatool delegators \ -->
<!--   --to-csv delegators.csv \ -->
<!--   --osmosis-node <https://osmosis-mainnet-rpc.allthatnode.com:1317> -->
<!-- ``` -->

```bash
./bin/validatool delegators \
  --to-csv stargaze-delegators.csv \
  --osmosis-node https://stargaze-api.polkachu.com \
  --validator-address starsvaloper1kekv8xqg7aj628l8av4d95cm79y8lw3clph7u7
```

Copy the `stargaze-delegators.csv` file to `<airdrop-folder>`:

```bash
# /!\ properly replace folder names:
cp stargaze-delegators.csv <airdrop-folder>/airdrop-<YYYY-MM>
```
