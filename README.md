# Instruction/command to run the app-
npm start

# Hosted the app on vercel-
link - https://hybr1d-task.vercel.app/

# hybr1d-task
1. Home Page of the app. It has a simple logo and a search bar to help users search the hacker news. The search results/initial results are displayed in the cards. In the card, we are showing the title of the news, link to the full story and in the footer of the card, information regarding the author, points given and number of comments count is displayed. 
Debouncing has been applied to enable smooth searching experience by delaying the execution of the search API by 1 second until the user has finished typing. 
Infinite Scroll has been applied to load data when required. Initially only 10 results are displayed, when a user scrolls and hits the bottom then 10 more results are loaded.
![image](https://github.com/ILAroy-611/hybr1d-task/assets/63605660/76ceaafa-588d-4923-9127-597e077710be)

2. Details Page of the app. Here we are displaying the nested comments posted so far for the selected news card.
![image](https://github.com/ILAroy-611/hybr1d-task/assets/63605660/1e262d9f-fd78-4f1f-8cf2-5ad50c919be3)
