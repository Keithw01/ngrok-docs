<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"tls_edges": [
		{
			"backend": null,
			"created_at": "2025-04-05T10:10:35Z",
			"description": "acme tls edge",
			"hostports": ["example.com:443"],
			"id": "edgtls_2vJ0OKyxZj18VyThpaOSPnajjwW",
			"ip_restriction": null,
			"metadata": "{\"environment\": \"staging\"}",
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2vJ0OKyxZj18VyThpaOSPnajjwW"
		},
		{
			"backend": {
				"backend": {
					"id": "bkdhr_2vJ0N3qK4BwX51XY1DPl1F9r9ib",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2vJ0N3qK4BwX51XY1DPl1F9r9ib"
				},
				"enabled": true
			},
			"created_at": "2025-04-05T10:10:25Z",
			"description": "acme tls edge",
			"hostports": ["endpoint-example2.com:443"],
			"id": "edgtls_2vJ0N134K5GPU3q1PvaV8MZV74F",
			"ip_restriction": null,
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2vJ0N134K5GPU3q1PvaV8MZV74F"
		}
	],
	"uri": "https://api.ngrok.com/edges/tls"
}
```
