export const myQuery = `
select
  count(1) as num_txs
from
  solana.core.fact_transactions
`