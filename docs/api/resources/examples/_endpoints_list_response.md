<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"endpoints": [
		{
			"bindings": ["public"],
			"created_at": "2025-04-05T10:10:30Z",
			"description": "sample cloud endpoint",
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
		},
		{
			"bindings": ["public"],
			"created_at": "2025-04-05T10:10:27Z",
			"hostport": "e655a911f828.ngrok.paid:443",
			"id": "ep_2vJ0NEprWsL1c3vHzjGBYjx95C6",
			"name": "command_line",
			"pooling_enabled": false,
			"principal": {
				"id": "usr_2vJ0L1ohgZ2i4PplH6fI5kns2dm",
				"uri": ""
			},
			"proto": "https",
			"public_url": "https://e655a911f828.ngrok.paid",
			"tunnel": {
				"id": "tn_2vJ0NEprWsL1c3vHzjGBYjx95C6",
				"uri": "https://api.ngrok.com/tunnels/tn_2vJ0NEprWsL1c3vHzjGBYjx95C6"
			},
			"tunnel_session": {
				"id": "ts_2vJ0NDl68IYh3PHCvRrqTDT60AV",
				"uri": "https://api.ngrok.com/tunnel_sessions/ts_2vJ0NDl68IYh3PHCvRrqTDT60AV"
			},
			"type": "ephemeral",
			"updated_at": "2025-04-05T10:10:27Z",
			"upstream_url": "http://localhost:80",
			"url": "https://e655a911f828.ngrok.paid"
		},
		{
			"bindings": ["public"],
			"created_at": "2025-04-05T10:10:26Z",
			"domain": {
				"id": "rd_2vJ0N15ekAsqvX8SfrDS5wwWl0z",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2vJ0N15ekAsqvX8SfrDS5wwWl0z"
			},
			"edge": {
				"id": "edgtls_2vJ0N134K5GPU3q1PvaV8MZV74F",
				"uri": "https://api.ngrok.com/edges/tls/edgtls_2vJ0N134K5GPU3q1PvaV8MZV74F"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2vJ0N4TkU23v1y8dCrXWWSZZfp1",
			"pooling_enabled": false,
			"proto": "tls",
			"public_url": "tls://endpoint-example2.com",
			"type": "edge",
			"updated_at": "2025-04-05T10:10:26Z"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/endpoints"
}
```
