# stackexchange.readme-stats

Dynamically generated stackexchange stats for your github readmes

## How to use

- with profile picture:
  ```markdown
  ![alt text](https://api.squeeble.ink/se/?userId=<USERiD>&seSite=<STACKeXCHANGEsITE>)
  ```
  result:  
  ![Tessa's stackoverflow stats](https://api.squeeble.ink/se/?userId=7185314&seSite=stackoverflow)
- without profile pictue:
  ```markdown
  ![alt text](https://api.squeeble.ink/se/?userId=<USERiD>&seSite=<STACKeXCHANGEsITE>&img=false)
  ```
  result:  
  ![Tessa's stackoverflow stats](https://api.squeeble.ink/se/?userId=7185314&seSite=stackoverflow&img=false)  
  NOTE: nameX is so you can line out your user name

Integrated stack exchange sites `<STACKeXCHANGEsITE>`: Should be all of them.

## Queries

- `userId` (required)
- `seSite` (required)
- `img` (disable user profile & show user name)
- `nameSize` (set fontSize for username 25px default)
- `nameX` (backwards compatible for lining out user name now centered by default)
