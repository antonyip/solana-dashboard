export const myQuery = `
select
  date_trunc('week', block_timestamp::timestamp)::date as day_date,
  sum(RAW_NEW_BALANCE - RAW_PREVIOUS_BALANCE) / pow(10, 18) as delegate_amount
from
  optimism.core.fact_delegations
group by
  1
order by
  1
`