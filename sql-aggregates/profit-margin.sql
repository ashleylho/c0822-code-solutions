with "cost" as (
  select "filmId",
     sum("replacementCost") as "replacement"
    from "films"
    join "inventory" using ("filmId")
  group by "filmId"
),
"revenue" as (
  select sum("amount") as "totalRevenue",
       "filmId"
  from "payments"
  join "rentals" using ("rentalId")
  join "inventory" using ("inventoryId")
  join "films" using ("filmId")
  group by "filmId"
)
select "title",
      "description",
      "rating",
      "revenue"."totalRevenue" - "cost"."replacement" as "profit"
  from "films"
  join "cost" using ("filmId")
  join "revenue" using ("filmId")
  order by "profit" desc
  limit 5
