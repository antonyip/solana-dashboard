export const myQuery = `
select
  date_trunc('week', block_timestamp::timestamp)::date as day_date,
  sum(PLATFORM_FEE_USD) as weekly_platform_fees,
  avg(weekly_platform_fees) over (order by day_date) as avg_platform_fees
from
  optimism.core.ez_nft_sales
group by
  1
order by
  1
`