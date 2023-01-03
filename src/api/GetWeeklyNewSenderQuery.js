export const myQuery = `
with
  first_tx as (
    select
      min(block_timestamp::timestamp) as first_date,
      signers
    from
      solana.core.fact_transactions
    where block_timestamp > '2022-01-01'
    group by
      2
  )
select
  date_trunc('week', first_date)::date as day_date,
  count(1) as new_senders,
  sum(new_senders) over (
    order by
      day_date
  ) as num_users
from
  first_tx
group by
  1
order by
  1
`