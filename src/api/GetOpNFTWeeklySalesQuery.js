export const myQuery = `
select
  date_trunc('week', block_timestamp::timestamp)::date as day_date,
  sum(sales_amount) as weekly_sales_volume,
  avg(weekly_sales_volume) over (order by day_date) as avg_sales_volume
from
  solana.core.fact_nft_sales
where block_timestamp > '2022-01-01'
group by
  1
order by
  1
`