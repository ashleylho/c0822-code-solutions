select count("cities") as "citiesPerCountry",
         "countries"."name" as "country"
    from "cities"
    join "countries" using ("countryId")
group by "countries"."name"
