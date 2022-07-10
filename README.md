# stackexchange.readme-stats

Dynamically generated stackexchange stats for your github readmes

Please NOTE that this project is run on our server.  
This means that we placed here the route that is fired on our server.  
Our server runs on express.js

## How to use

- with profile picture:
  ```markdown
  ![alt text](http://api.squeeble.ink/se/?userId=<USERiD>&seSite=<STACKeXCHANGEsITE>)
  ```
  result:  
  ![Tessa's stackoverflow stats](http://api.squeeble.ink/se/?userId=7185314&seSite=stackoverflow)  
- without profile pictue:
  ```markdown
  ![alt text](http://api.squeeble.ink/se/?userId=<USERiD>&seSite=<STACKeXCHANGEsITE>&img=false&nameX=22)
  ```
  result:  
  ![Tessa's stackoverflow stats](http://api.squeeble.ink/se/?userId=7185314&seSite=stackoverflow&img=false&nameX=22)  
  NOTE: nameX is so you can line out your user name
  
Integrated stack exchange sites `<STACKeXCHANGEsITE>`:
- Stack Overflow
- Meta
- Ask Ubuntu


More comming soon!
