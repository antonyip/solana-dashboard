export const myQuery = `
select
date_trunc('week', block_timestamp::timestamp)::date as day_date,
count_if(SUCCEEDED = true) / count(1) * 100 as success_rate,
avg(success_rate) over (
  order by
    day_date
) as avg_success_rate
from
  solana.core.fact_transactions
group by
1
order by
1
`