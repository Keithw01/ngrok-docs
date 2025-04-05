<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"reserved_domains": [
		{
			"acme_challenge_cname_target": null,
			"certificate": null,
			"certificate_management_policy": {
				"authority": "letsencrypt",
				"private_key_type": "ecdsa"
			},
			"certificate_management_status": {
				"provisioning_job": {
					"error_code": null,
					"msg": "Managed certificate provisioning in progress.",
					"retries_at": null,
					"started_at": "2025-04-05T10:10:09Z"
				},
				"renews_at": null
			},
			"cname_target": "4knqktdwka2umyjjc.32eboenpbmrtplel1.local-ngrok-cname.com",
			"created_at": "2025-04-05T10:10:09Z",
			"description": "Device 0001 Dashboard",
			"domain": "manage-0002.app.example.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2vJ0L4TbkSmxlrsffN7LvCQ3nMG",
			"metadata": "{\"service\": \"dashboard\"}",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2vJ0L4TbkSmxlrsffN7LvCQ3nMG"
		},
		{
			"acme_challenge_cname_target": null,
			"certificate": {
				"id": "cert_2vJ0L1Jy0NRdt5UZhISj9xapPPp",
				"uri": "https://api.ngrok.com/tls_certificates/cert_2vJ0L1Jy0NRdt5UZhISj9xapPPp"
			},
			"certificate_management_policy": null,
			"certificate_management_status": null,
			"cname_target": "2udamkamcl8pjmrff.32eboenpbmrtplel1.local-ngrok-cname.com",
			"created_at": "2025-04-05T10:10:09Z",
			"domain": "myapp.mydomain.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2vJ0KzJ2zAQrfqJGVJQuXdxzSFn",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2vJ0KzJ2zAQrfqJGVJQuXdxzSFn"
		}
	],
	"uri": "https://api.ngrok.com/reserved_domains"
}
```
