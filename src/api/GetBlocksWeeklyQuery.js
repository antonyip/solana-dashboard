export const myQuery = `
select
  date_trunc('week', block_timestamp::timestamp)::date as day_date,
  count(1) as num_blocks
from
  solana.core.fact_blocks
where block_timestamp::timestamp > '2021-01-01'
group by
  1
order by
  1
`