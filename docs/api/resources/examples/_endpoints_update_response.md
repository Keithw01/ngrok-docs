<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"bindings": ["public"],
	"created_at": "2025-04-05T10:10:30Z",
	"description": "Sample Cloud Endpoint",
	"domain": {
		"id": "rd_2vJ0N15ekAsqvX8SfrDS5wwWl0z",
		"uri": "https://api.ngrok.com/reserved_domains/rd_2vJ0N15ekAsqvX8SfrDS5wwWl0z"
	},
	"hostport": "endpoint-example2.com:443",
	"id": "ep_2vJ0Nb3V27ydeq1M9gsmeBxKHNJ",
	"metadata": "{\"environment\": \"staging\"}",
	"pooling_enabled": false,
	"proto": "https",
	"public_url": "https://endpoint-example2.com",
	"traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
	"type": "cloud",
	"updated_at": "2025-04-05T10:10:30Z",
	"uri": "https://api.ngrok.com/endpoints/ep_2vJ0Nb3V27ydeq1M9gsmeBxKHNJ",
	"url": "https://endpoint-example2.com"
}
```
