export const myQuery = `
select
  date_trunc('week', block_timestamp::timestamp)::date as day_date,
  count(1) as num_txs
from
  solana.core.fact_transactions
where block_timestamp > '2022-01-01'
group by
  1
order by
  1
`