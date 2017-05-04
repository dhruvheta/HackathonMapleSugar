URL: https://sleepy-sierra-94063.herokuapp.com/

## [GET] /polls

Response:
```json
{
  "items": [
    {
      "id": "590956ad0f3f8c354c3f58a0",
      "name": "Test Poll",
      "startTime": 0,
      "endTime": 0,
      "votesPerUser": 5
    },
    ...
  ]
}
```

## [GET] /poll/{id}

Response:
```json
{
  "id": "590b4e4ff76f87f1fc30d6a4",
  "name": "kyle test import",
  "startTime": 0,
  "endTime": 0,
  "votesPerUser": 5,
  "categories": [
    {
      "id": "590b4e5df76f87f1fc30d6a5",
      "name": "Nuts ",
      "pollId": "590b4e4ff76f87f1fc30d6a4",
      "options": [
        {
          "id": "590b4e93f76f87f1fc30d6e5",
          "name": "Mixed nuts, salted",
          "pollId": "590b4e4ff76f87f1fc30d6a4",
          "categoryId": "590b4e5df76f87f1fc30d6a5",
          "upvoteCount": 8,
          "downvoteCount": 0,
          "imageUrl": "http://i2.wp.com/www.cochaser.com/blog/wp-content/uploads/2016/08/Costco-957330-Kirkland-Signature-Snacking-Nuts-Variety.jpg?resize=350%2C200",
          "type": "Food",
          "attributes": {
            "portionSize": 1,
            "fat": 16,
            "calories": 175,
            "carbs": 6,
            "protein": 5,
            "sodium": 112,
            "sugar": 1.2,
            "fiber": 2.4
          }
        },
        ...
      ]
    },
    ...
}
```

## [POST] /poll/{id}/vote

#### Params
| Key | Value |
|-----|-------|
| optionId | the option you are voting on (id from the option) |
| upvote | (optional) true if upvoting |
| downvote | (optional) true if downvoting |

#### Response
The updated option object with updated counts

```json
{
  "id": "590b4e93f76f87f1fc30d6e5",
  "name": "Mixed nuts, salted",
  "pollId": "590b4e4ff76f87f1fc30d6a4",
  "categoryId": "590b4e5df76f87f1fc30d6a5",
  "upvoteCount": 8,
  "downvoteCount": 0,
  "imageUrl": "http://i2.wp.com/www.cochaser.com/blog/wp-content/uploads/2016/08/Costco-957330-Kirkland-Signature-Snacking-Nuts-Variety.jpg?resize=350%2C200",
  "type": "Food",
  "attributes": {
    "portionSize": 1,
    "fat": 16,
    "calories": 175,
    "carbs": 6,
    "protein": 5,
    "sodium": 112,
    "sugar": 1.2,
    "fiber": 2.4
  }
}
```
