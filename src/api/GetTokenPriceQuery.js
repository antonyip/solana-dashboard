export const myQuery = `
select
  date_trunc('week', recorded_hour)::date as day_date,
  avg(close) as weekly_price,
  avg(weekly_price) over (order by day_date) as avg_price
from
  solana.core.ez_token_prices_hourly
where
  TOKEN_ADDRESS = 'So11111111111111111111111111111111111111112'
group by
  1
order by
  1

`