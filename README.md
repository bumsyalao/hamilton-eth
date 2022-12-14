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
2. Balance of an owner who owns both tokens.
Example Response:
```
    {
        status: “ok”,
        balance: [balance],
    }
```

## Installation
This App requires:
- [Node.js](https://nodejs.org) version 8 or above.

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