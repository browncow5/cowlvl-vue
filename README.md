# cowlvl-vue
With 

To run with Datadog:
Set the API_Key value that is used in the docker-compose.yml file.
I used a local env file.

```
#.env.local
API_KEY=<YOUR_DATADOG_API_KEY>
```

Run as docker container:

`$ docker-compose build --no-cache`

`$ docker-compose --env-file .env.local up`
