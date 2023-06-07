# Withdraw commission

Withdraw the OSMO commission to the temporary OSMO address, and STARS commission to the STARS address.

## Osmosis

TODO: document

## Stargaze

1. Go to [Astroquirks multisig address on notional](https://multisig.notional.ventures/multisig/stars1kekv8xqg7aj628l8av4d95cm79y8lw3c5lr28x)
2. Click on `Import Transaction`

![import transaction](/img/import-tx.jpg)

3. On the JSON field, enter this value:

```json
{"body":{"messages":[{"@type":"/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward","delegator_address":"stars1kekv8xqg7aj628l8av4d95cm79y8lw3c5lr28x","validator_address":"starsvaloper1kekv8xqg7aj628l8av4d95cm79y8lw3clph7u7"},{"@type":"/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission","validator_address":"starsvaloper1kekv8xqg7aj628l8av4d95cm79y8lw3clph7u7"}],"memo":"","timeout_height":"0","extension_options":[],"non_critical_extension_options":[]},"auth_info":{"signer_infos":[],"fee":{"amount":[],"gas_limit":"200000","payer":"","granter":""}},"signatures":[]}
```

4. Then click `Create Transaction`
5. Sign the tx, and ask someone else from Astroquirks sign (quorum of 2)
6. Broadcast the tx
7. You should now see the new balance in the multisig address:

![multisig balance](/img/multisig-balance.jpg)
