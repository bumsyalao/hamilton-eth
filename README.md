# NodeJS technical test

A simple API service to return some information from Ethereum blockchain.

## Requirements
Considering there are 2 NFT tokens, Bored Ape Yacht Club (BAYC) and Cool Cats (COOL).
This service constains 2 endpoints:

1. Return a list of Ethereum accounts which owns both tokens. 
Example Response:
```
    {
        status: “ok”,
        data: [
            …,
            [address],
            ‘’’
            ]
    } 
```
2. Balance of an owner who owns both tokens. This endpoint is paginated and returns data for the page and limit set in the URL 
Example Response:
```
    {
        status: “ok”,
        balance: [balance],
    }
```
## Development

This simple app was built with NodeJS with expressJS to create API server, Redis was used to cache persisted data.

> I set Redis cache with a cacheKey containing url, contract addresses and page & limit for pagination and URL to distinguish between account/balance and nft/owner. Cached data has an expiry time of 1hour.

## Installation
This App requires:
- [Node.js](https://nodejs.org) version 8 or above.
- [Redis](https://redis.io/).

Install all dependencies:
```bash
    yarn  install
```
Start server on http://localhost:5000/
```bash
    yarn dev
```

## Endpoints

* http://localhost:5000/api/nft/owners
* http://localhost:5000/api/eth/balances