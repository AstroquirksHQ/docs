# Snapshot delegators

## Prerequisites

Clone validatool:

```bash
git clone git@github.com:AstroquirksHQ/validatool.git
```

Go to a specific branch :rage::

```bash
git checkout feature/build-delegation-history
```

Enter virtual env:

```bash
cd validatool
pipenv shell
export PYTHONPATH=$PYTHONPATH:$(pwd)
```

## Osmosis

TODO document

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
