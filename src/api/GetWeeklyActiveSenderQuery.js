export const myQuery = `
select
  date_trunc('week', block_timestamp::timestamp)::date as day_date,
  count(distinct signers) as weekly_active_addresses
from
  solana.core.fact_transactions
group by
  1
order by
  1
`