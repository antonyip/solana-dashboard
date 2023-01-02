export const myQuery = `
  select
  date_trunc('week', block_timestamp::timestamp)::date as day_date,
  sum(tx_fee) as sum_fee,
  avg(tx_fee) as avg_fee
from
  optimism.core.fact_transactions
group by
  1
order by
  1
`