# Instructions

To deploy at heroku

In your terminal type

    $ heroku login

After a successful login

    $ git init
    $ git add .
    $ git commit -m "your commit message"
    $ heroku create your-app-url
    $ git push heroku master
