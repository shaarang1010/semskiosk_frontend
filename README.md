# Demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Storing app keys

Store your username and password in a `environment-keys.ts` file. I have added that file to `.gitignore`.
Content in the file - 

```
export const appKeys = {
    'username': 'semskiosk',
    'passkey': '<add_password>'
}
```

## Importing keys in service file

Import your appKeys in your service file and add that to your **HTTP Request** header.
