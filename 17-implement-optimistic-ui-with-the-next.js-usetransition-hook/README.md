[🏡 Home](../README.md)

[![Start a new Supabase project](https://placehold.co/15x15/00ff00/00ff00.png)](../01-start-a-new-supabase-project/README.md)
[![Create a Next.js app with the create-next-app CLI](https://placehold.co/15x15/00ff00/00ff00.png)](../02-create-a-next.js-app-with-the-create-next-app-cli/README.md)
[![Query Supabase data from Next.js Server Components](https://placehold.co/15x15/00ff00/00ff00.png)](../03-query-supabase-data-from-next.js-server-components/README.md)
[![Create an OAuth app with GitHub](https://placehold.co/15x15/00ff00/00ff00.png)](../04-create-an-oauth-app-with-github/README.md)
[![Authenticate users with GitHub OAuth using Supabase and Next.js Client Components](https://placehold.co/15x15/00ff00/00ff00.png)](../05-authenticate-users-with-github-oauth-using-supabase-and-next.js-client-components/README.md)
[![Refresh session cookie for Next.js Server Components with Middleware](https://placehold.co/15x15/00ff00/00ff00.png)](../06-refresh-session-cookie-for-next.js-server-components-with-middleware/README.md)
[![Restrict access to authenticated users with RLS policies](https://placehold.co/15x15/00ff00/00ff00.png)](../07-restrict-access-to-authenticated-users-with-rls-policies/README.md)
[![Dynamically render UI based on user session with SSR in Next.js Client Components](https://placehold.co/15x15/00ff00/00ff00.png)](../08-dynamically-render-ui-based-on-user-session-with-ssr-in-next.js-client-components/README.md)
[![Implement Protected Routes for authenticated users with Supabase Auth](https://placehold.co/15x15/00ff00/00ff00.png)](../09-implement-protected-routes-for-authenticated-users-with-supabase-auth/README.md)
[![Generate TypeScript definitions from PostgreSQL schema with Supabase CLI](https://placehold.co/15x15/00ff00/00ff00.png)](../10-generate-typescript-definitions-from-postgresql-schema-with-supabase-cli/README.md)
[![Setup a Foreign Key relationship between PostgreSQL tables](https://placehold.co/15x15/00ff00/00ff00.png)](../11-setup-a-foreign-key-relationship-between-postgresql-tables/README.md)
[![Automatically generate a profile for every user with PostgreSQL Function Triggers](https://placehold.co/15x15/00ff00/00ff00.png)](../12-automatically-generate-a-profile-for-every-user-with-postgresql-function-triggers/README.md)
[![Run authenticated Server-side mutations with Next.js Server Actions](https://placehold.co/15x15/00ff00/00ff00.png)](../13-run-authenticated-server-side-mutations-with-next.js-server-actions/README.md)
[![Create a PostgreSQL join table in Supabase Studio](https://placehold.co/15x15/00ff00/00ff00.png)](../14-create-a-postgresql-join-table-in-supabase-studio/README.md)
[![Implement dynamic buttons with Next.js Client Components](https://placehold.co/15x15/00ff00/00ff00.png)](../15-implement-dynamic-buttons-with-next.js-client-components/README.md)
[![Declare global union types with Typescript](https://placehold.co/15x15/00ff00/00ff00.png)](../16-declare-global-union-types-with-typescript/README.md)
[![Implement Optimistic UI with the Next.js useTransition hook](https://placehold.co/15x15/00ff00/00ff00.png)](../17-implement-optimistic-ui-with-the-next.js-usetransition-hook/README.md)
[![Dynamically update UI with Database changes using Supabase Realtime](https://placehold.co/15x15/555555/555555.png)](../18-dynamically-update-ui-with-database-changes-using-supabase-realtime/README.md)
[![Style a Twitter clone with Tailwind CSS](https://placehold.co/15x15/555555/555555.png)](../19-style-a-twitter-clone-with-tailwind-css/README.md)
[![Deploy Next.js App Router project to production with Vercel](https://placehold.co/15x15/555555/555555.png)](../20-deploy-next.js-app-router-project-to-production-with-vercel/README.md)

# Implement Optimistic UI with the Next.js useTransition hook

**[📹 Video](https://egghead.io/lessons/next-js-implement-optimistic-ui-with-the-react-useoptimistic-hook-in-next-js)**

"Optimistic UI" is a pattern for updating the page immediately with the data you have available, rather than waiting for the database query to resolve. In this lesson, we use React's `useOptimistic` hook to create an array of tweets that we can instantly update with our new state, when the user clicks the like button.

## Code Snippets

**Call useOptimistic hook**

```tsx
const [optimisticState, addOptimisticState] = useOptimistic(
  initialState,
  (currentState, newState) => {
    // merge state
    // return new state
  }
);
```

**Add optimistic tweet**

```tsx
addOptimisticTweet({
  ...tweet,
  likes: tweet.likes - 1,
  user_has_liked_tweet: !tweet.user_has_liked_tweet,
});
```

## Resources

- [useOptimistic hook](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#enhancements)

---

[👉 Next lesson](/18-dynamically-update-ui-with-database-changes-using-supabase-realtime/README.md)

---

Enjoying the course? Follow Jon Meyers on [Twitter](https://twitter.com/jonmeyers_io) and subscribe to the [YouTube channel](https://www.youtube.com/c/jonmeyers).
