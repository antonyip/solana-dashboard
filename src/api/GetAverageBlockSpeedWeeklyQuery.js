export const myQuery = `
with
  raw_data as (
    select
      block_timestamp::timestamp as tz_timestamp,
      LAG(block_timestamp::timestamp) ignore nulls over (
        order by
          block_id
      ) as prev_timestamp,
      datediff('seconds', prev_timestamp, block_timestamp::timestamp) as seconds_diff
    from
      solana.core.fact_blocks
    where tz_timestamp > '2020-11-01'
    order by
      block_id asc
  )
select
  date_trunc('week', tz_timestamp)::date,
  avg(seconds_diff) as avg_blocktime,
  count(1) as num_blocks
from
  raw_data
group by
  1
order by
  1
`