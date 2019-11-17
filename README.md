# RuleOfThumb
Technical front end test for Zemoga

This project is built with Angular 8, Bootstrap 4.

I decided to make this project with Angular because I find reactive forms (two way data binding) very usefull in this situation where votes change and we need to see the user interface change at the same time. Bootstrap is used to make the layout responsive without that much effort.

The home component includes a featured-character component that shows Pope Francis profile with the voting options.
There is another component named votes where there is the individual html for every character, with the ngFor directive it iterates over a characters object and renders the corresponding elements. Every data element is binded to a reactive form, voting options are radio buttons binded to this form. 

When an upvote/downvote is sent we update the localStorage object that has the same structure of the form, that way we persist the data.
There are some banners I did not do, but I would make them in the same way I did the other components

To run the project Node,npm,angular CLI is needed:

https://nodejs.org/es/

In the CMD:
npm install -g @angular/cli
then we go to the project folder and type ng-serve
And now you can see it runing at localhost:4200

