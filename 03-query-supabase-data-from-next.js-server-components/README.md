[🏡 Home](../README.md)

[![Start a new Supabase project](https://placehold.co/15x15/00ff00/00ff00.png)](../01-start-a-new-supabase-project/README.md)
[![Create a Next.js app with the create-next-app CLI](https://placehold.co/15x15/00ff00/00ff00.png)](../02-create-a-next.js-app-with-the-create-next-app-cli/README.md)
[![Query Supabase data from Next.js Server Components](https://placehold.co/15x15/00ff00/00ff00.png)](../03-query-supabase-data-from-next.js-server-components/README.md)
[![Create an OAuth app with GitHub](https://placehold.co/15x15/555555/555555.png)](../04-create-an-oauth-app-with-github/README.md)
[![Authenticate users with GitHub OAuth using Supabase and Next.js Client Components](https://placehold.co/15x15/555555/555555.png)](../05-authenticate-users-with-github-oauth-using-supabase-and-next.js-client-components/README.md)
[![Refresh session cookie for Next.js Server Components with Middleware](https://placehold.co/15x15/555555/555555.png)](../06-refresh-session-cookie-for-next.js-server-components-with-middleware/README.md)
[![Restrict access to authenticated users with RLS policies](https://placehold.co/15x15/555555/555555.png)](../07-restrict-access-to-authenticated-users-with-rls-policies/README.md)
[![Dynamically render UI based on user session with SSR in Next.js Client Components](https://placehold.co/15x15/555555/555555.png)](../08-dynamically-render-ui-based-on-user-session-with-ssr-in-next.js-client-components/README.md)
[![Implement Protected Routes for authenticated users with Supabase Auth](https://placehold.co/15x15/555555/555555.png)](../09-implement-protected-routes-for-authenticated-users-with-supabase-auth/README.md)
[![Generate TypeScript definitions from PostgreSQL schema with Supabase CLI](https://placehold.co/15x15/555555/555555.png)](../10-generate-typescript-definitions-from-postgresql-schema-with-supabase-cli/README.md)
[![Setup a Foreign Key relationship between PostgreSQL tables](https://placehold.co/15x15/555555/555555.png)](../11-setup-a-foreign-key-relationship-between-postgresql-tables/README.md)
[![Automatically generate a profile for every user with PostgreSQL Function Triggers](https://placehold.co/15x15/555555/555555.png)](../12-automatically-generate-a-profile-for-every-user-with-postgresql-function-triggers/README.md)
[![Run authenticated Server-side mutations with Next.js Server Actions](https://placehold.co/15x15/555555/555555.png)](../13-run-authenticated-server-side-mutations-with-next.js-server-actions/README.md)
[![Create a PostgreSQL join table in Supabase Studio](https://placehold.co/15x15/555555/555555.png)](../14-create-a-postgresql-join-table-in-supabase-studio/README.md)
[![Implement dynamic buttons with Next.js Client Components](https://placehold.co/15x15/555555/555555.png)](../15-implement-dynamic-buttons-with-next.js-client-components/README.md)
[![Declare global union types with Typescript](https://placehold.co/15x15/555555/555555.png)](../16-declare-global-union-types-with-typescript/README.md)
[![Implement Optimistic UI with the Next.js useTransition hook](https://placehold.co/15x15/555555/555555.png)](../17-implement-optimistic-ui-with-the-next.js-usetransition-hook/README.md)
[![Dynamically update UI with Database changes using Supabase Realtime](https://placehold.co/15x15/555555/555555.png)](../18-dynamically-update-ui-with-database-changes-using-supabase-realtime/README.md)
[![Style a Twitter clone with Tailwind CSS](https://placehold.co/15x15/555555/555555.png)](../19-style-a-twitter-clone-with-tailwind-css/README.md)
[![Deploy Next.js App Router project to production with Vercel](https://placehold.co/15x15/555555/555555.png)](../20-deploy-next.js-app-router-project-to-production-with-vercel/README.md)

# Query Supabase data from Next.js Server Components

**[📹 Video](https://egghead.io/lessons/next-js-query-supabase-data-from-next-js-server-components)**

Our [Supabase](https://supabase.com) project is a hosted PostgreSQL database. In this lesson, we install the [Supabase Auth Helpers](https://www.npmjs.com/package/@supabase/auth-helpers-nextjs) and [Supabase.js](https://www.npmjs.com/package/@supabase/supabase-js) npm packages, and configure environment variables to query data from Supabase:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

These values can be found in [your Supabase project's API Settings](https://app.supabase.com/project/_/settings/api).

Additionally, we create a new Supabase instance using the `createServerComponentClient` function, then make our Server Component Async and suspend its rendering until our request for Supabase data resolves.

Lastly, we implement a Row Level Security (RLS) policy to enable read access for the `tweets` table.

## Code Snippets

**Install Supabase packages**

```bash
npm i @supabase/auth-helpers-nextjs @supabase/supabase-js
```

**Import createServerComponentClient function**

```tsx
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
```

**Create Supabase client in Server Component**

```tsx
const supabase = createServerComponentClient({ cookies });
```

**Fetch data from Supabase**

```tsx
const { data: tweets } = await supabase.from("tweets").select();
```

**Pretty print data with JSON.stringify**

```tsx
<pre>{JSON.stringify(tweets, null, 2)}</pre>
```

**Enable read access with RLS policy**

```sql
create policy "anyone can select tweets" ON "public"."tweets"
as permissive for select
to public
using (true);
```

## Resources

- [Supabase Auth Helpers for Next.js](https://supabase.com/docs/guides/auth/auth-helpers/nextjs)
- [Supabase.js docs](https://supabase.com/docs/reference/javascript/installing)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)

---

[👉 Next lesson](/04-create-an-oauth-app-with-github/README.md)

---

Enjoying the course? Follow Jon Meyers on [Twitter](https://twitter.com/jonmeyers_io) and subscribe to the [YouTube channel](https://www.youtube.com/c/jonmeyers).
