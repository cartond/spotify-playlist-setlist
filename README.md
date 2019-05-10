```
npm install
```

```
npm run dev
```

0. Go to your project root in your host machine  ( e.g. your Mac )
1. Run `npm run dev` in your terminal ( wait until the dashboard show complete status )
2. Go to your browser and go to `localhost:8080`
3. Make code changes
4. If there are compilation errors, you will see it in the terminal dashboard
5. Watch your code changes reflect on browser without refreshing
6. Repeat your development steps


## Folder Structure

The entry point of your application is `src/js/routes`, it's basically a mapping between your `views` to a `route`.

All your javascript code lives in folder `src/js`

```
  -- src/
    -- js/
      -- common/
        -- api/          --> all api requests
        -- components/   --> all share components
        -- types/        --> all flow types
      -- redux/
        -- modules/      --> all redux code
        -- saga/         --> all redux-saga code
        -- selectors/    --> all reselect code
      -- utility/        --> all non JSX utility
      -- views/          --> all JSX code hook up with Route ( HoC ) or page specific components
    -- style/            --> all global styles, layout, config
    -- assets/           --> all static assets ( image, fonts ... etc )
      -- template/       --> you probably won't touch this unless you want to create new template

```

Thanks @iroy2000 for the template
