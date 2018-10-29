# nodejs-rest-api
Build node js rest api from scratch, without npm or package.json

## Development
```
git clone https://github.com/andrideng/node-js-rest-api.git
```
Create store .data folder
```
mkdir .data/checks
mkdir .data/test
mkdir .data/tokens
mkdir .data/users
```
Create store .logs folder
```
mkdir .logs
```

# API
## >> USERS
### METHOD: GET
### URL: /api/users?phone=[phone_number]
```
Headers: 
token:[token]
Content-Type:application/json
```

### METHOD: POST
### URL: /api/users
```
Headers: 
Content-Type:application/json

Payload:
{
	"firstName": "John",
	"lastName": "Doe",
	"phone": "5555555555",
	"password": "thisIsAPassword",
	"tosAgreement": true
}
```

### METHOD: PUT
### URL: /api/users
```
Headers: 
token: [token]
Content-Type:application/json

Payload:
{
	"firstName": "Ken",
	"lastName": "Hong",
	"password": "thisIsAPassword"
}
```

### METHOD: DELETE
### URL: /api/users?phone=[phone_number]
```
Headers: 
token: [token]
Content-Type:application/json
```

## >> TOKENS
### METHOD: GET
### URL: /api/tokens?id=[token_id]
```
Headers: 
Content-Type:application/json
```

### METHOD: POST
### URL: /api/tokens
```
Headers: 
Content-Type:application/json

Payload:
{
	"phone": "5555555551",
	"password": "thisIsAPassword"
}
```

### METHOD: PUT
### URL: /api/tokens
```
Headers: 
Content-Type:application/json

Payload:
{
	"id": "f35klobdhhjpg139xgtk",
	"extend": true
}
```

### METHOD: DELETE
### URL: /api/tokens?id=[token_id]
```
Headers: 
Content-Type:application/json
```

## >> CHECKS
### METHOD: GET
### URL: /api/checks?id=[checks_id]
```
Headers:
token:[token]
Content-Type:application/json
```

### METHOD: POST
### URL: /api/checks
```
Headers:
token:[token] 
Content-Type:application/json

Payload:
{
	"protocol": "https",
	"url": "google.com",
	"method": "get",
	"successCodes": [200, 201],
	"timeoutSeconds": 3
}
```

### METHOD: PUT
### URL: /api/checks
```
Headers: 
token:[token]
Content-Type:application/json

Payload:
{
	"id": "5oxroeg91f425g4j0rmt",
	"protocol": "https",
	"url": "yahoo.com",
	"method": "put",
	"successCodes": [200, 201, 403],
	"timeoutSeconds": 2
}
```

### METHOD: DELETE
### URL: /api/checks?id=[checks_id]
```
Headers: 
Content-Type:application/json
```

## Generat SSL for HTTPS
```
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -outcert.pem
```

## Contributor
```
Andri Deng
```