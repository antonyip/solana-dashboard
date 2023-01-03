export const myQuery = `
select
  date_trunc('week', block_timestamp::timestamp)::date as day_date,
  count(distinct signers) as weekly_active_addresses
from
  solana.core.fact_transactions
where block_timestamp > '2022-01-01'
group by
  1
order by
  1
`