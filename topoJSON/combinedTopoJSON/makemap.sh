topojson > us2017.topo.json \
    -q 5000 \
    -s 0.00000008 \
        states=cb_2017_us_state_500k/cb_2017_us_state_500k.shp \
            --id-property GEOID \
        districts=cb_2017_us_cd115_500k/cb_2017_us_cd115_500k.shp \
            --id-property GEOID \
        counties=cb_2017_us_county_500k/cb_2017_us_county_500k.shp \
            --id-property GEOID
