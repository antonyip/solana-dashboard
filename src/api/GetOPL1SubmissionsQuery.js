export const myQuery = `
select
  date_trunc('week', l1_block_timestamp)::date as day_date,
  count(1) as num_submissions
from
  optimism.core.fact_l1_submissions
group by
  1
order by
  1
`