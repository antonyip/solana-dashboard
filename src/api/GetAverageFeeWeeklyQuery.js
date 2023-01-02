export const myQuery = `
select
  date_trunc('week', block_timestamp::timestamp)::date as day_date,
  sum(fee) as sum_fee,
  avg(fee) as avg_fee
from
  solana.core.fact_transactions
where day_date > '2020-11-01'
group by
  1
order by
  1
`