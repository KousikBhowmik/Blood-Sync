## user route

1. user register api
```
localhost:4000/user/register-user
body: {
  "email": "john.doe@example.com", // required
  "phone": "9123456780", // min & max length 10
  "fullName": "John Doe", // max length 50
  "address": { // required
    "state": "Tamil Nadu", 
    "district": "Chennai",
    "city": "Chennai",
    "place": "T. Nagar",
    "pin": 600017
  },
  "bloodType": "A-" 
  // required 
  // valid blood types: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]
}

```

2. get user api
```
 http://localhost:4000/user/get-user
 query: email
```