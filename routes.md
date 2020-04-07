# MySponsport

## Routes

### User

```sh
GET /user
POST /user
PATCH /user
DELETE /user
```

```sh
GET /user/:userId
POST /user/:userId
PATCH /user/:userId
DELETE /user/:userId
```

### Social Networks

```sh
GET /user/:userId/social
POST /user/:userId/social
PATCH /user/:userId/social
DELETE /user/:userId/social
```

### Offer

```sh
GET /offer
POST /offer
PATCH /offer
DELETE /offer
```

```sh
GET /offer/:offerId
POST /offer/:offerId
PATCH /offer/:offerId
DELETE /offer/:offerId
```

### User Offer

```sh
GET /user/:userId/offer
POST /user/:userId/offer
PATCH /user/:userId/offer
DELETE /user/:userId/offer
```

### User Application

```sh
GET /user/:userId/application
POST /user/:userId/application
PATCH /user/:userId/application
DELETE /user/:userId/application
```

### Message

```sh
GET /user/:userId/message
POST /user/:userId/message
PATCH /user/:userId/message
DELETE /user/:userId/message
```

### User Brand

```sh
GET /user/:userId/brand
POST /user/:userId/brand
PATCH /user/:userId/brand
DELETE /user/:userId/brand
```

### Brands

```sh
GET /brand
POST /brand
PATCH /brand
DELETE /brand
```

```sh
GET /brand/:brandId
POST /brand/:brandId
PATCH /brand/:brandId
DELETE /brand/:brandId
```

### Athlète

```sh
GET /athlete
POST /athlete
PATCH /athlete
DELETE /athlete
```

```sh
GET /athlete/:athleteId
POST /athlete/:athleteId
PATCH /athlete/:athleteId
DELETE /athlete/:athleteId
```

### Sponsor

```sh
GET /athlete/:athleteId/sponsor
POST /athlete/:athleteId/sponsor
PATCH /athlete/:athleteId/sponsor
DELETE /athlete/:athleteId/sponsor
```

### Award

```sh
GET /athlete/:athleteId/award
POST /athlete/:athleteId/award
PATCH /athlete/:athleteId/award/:awardId
DELETE /athlete/:athleteId/award/:awardId
```

### Practice

```sh
GET /athlete/:athleteId/practice
POST /athlete/:athleteId/practice
PATCH /athlete/:athleteId/practice
DELETE /athlete/:athleteId/practice
```

### Sport

```sh
GET /sport
POST /sport
PATCH /sport
DELETE /sport
```
