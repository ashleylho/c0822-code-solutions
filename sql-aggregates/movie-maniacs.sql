select "firstName",
       "lastName",
       sum("amount") as "totalAmountPaid"
  from "customers"
  join "payments" using ("customerId")
  group by "customerId"
  order by "totalAmountPaid" desc
