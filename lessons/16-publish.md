# Publish

Because we've built the app on Expo, you can distribute the app via Expo's `exp` CLI. Let's install that globally on your machine and sign up:
```sh
npm install -g exp
exp register
```

After filling in your name and email address, you should now have an Expo account. Before we go ahead and publish the app, open your `package.json` and make sure the "name" field is set to something sensible - this will be the display name of your app in the Expo catalogue. Note that it needs to be alphanumeric, and should not contain any spaces.

If you don't want your app to be publically visible to other Expo users, you can also set a `"privacy": "unlisted",` field in `package.json`.

Now, all is left to publish the app:
```sh
exp publish
```

If all went well, you should now have a link you can open on your phone and share with anyone (although given that we haven't implemented username selection, all users will appear as you! 😜)
