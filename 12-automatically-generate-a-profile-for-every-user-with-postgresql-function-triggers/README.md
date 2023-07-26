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
[![Run authenticated Server-side mutations with Next.js Server Actions](https://placehold.co/15x15/555555/555555.png)](../13-run-authenticated-server-side-mutations-with-next.js-server-actions/README.md)
[![Create a PostgreSQL join table in Supabase Studio](https://placehold.co/15x15/555555/555555.png)](../14-create-a-postgresql-join-table-in-supabase-studio/README.md)
[![Implement dynamic buttons with Next.js Client Components](https://placehold.co/15x15/555555/555555.png)](../15-implement-dynamic-buttons-with-next.js-client-components/README.md)
[![Declare global union types with Typescript](https://placehold.co/15x15/555555/555555.png)](../16-declare-global-union-types-with-typescript/README.md)
[![Implement Optimistic UI with the Next.js useTransition hook](https://placehold.co/15x15/555555/555555.png)](../17-implement-optimistic-ui-with-the-next.js-usetransition-hook/README.md)
[![Dynamically update UI with Database changes using Supabase Realtime](https://placehold.co/15x15/555555/555555.png)](../18-dynamically-update-ui-with-database-changes-using-supabase-realtime/README.md)
[![Style a Twitter clone with Tailwind CSS](https://placehold.co/15x15/555555/555555.png)](../19-style-a-twitter-clone-with-tailwind-css/README.md)
[![Deploy Next.js App Router project to production with Vercel](https://placehold.co/15x15/555555/555555.png)](../20-deploy-next.js-app-router-project-to-production-with-vercel/README.md)

# Automatically generate a profile for every user with PostgreSQL Function Triggers

**[📹 Video](https://egghead.io/lessons/postgresql-automatically-generate-a-profile-for-every-user-with-postgresql-function-triggers)**

[Supabase](https://supabase.com/) has an `auth.users` table that contains information about our user and their session. We want to display the user's name, username and avatar alongside their tweets, but the `auth.users` table cannot be publicly accessible, as it contains sensitive information.

In this lesson, we create a new table called `profiles` and populate it with the data we want to display from the `auth.users` table. Additionally, we set up a PostgreSQL Function and Trigger to create a new profile for any user added to the `auth.users` table.

Lastly, we create an RLS policy for the `profiles` table to enable read access, and re-generate our TypeScript definitions file to contain our new table.

## Code Snippets

**Create profiles table**

```sql
create table public.profiles (
  id uuid not null references auth.users on delete cascade primary key,
  name text not null,
  username text not null,
  avatar_url text not null
);
```

**Enable Row Level Security**

```sql
alter table public.profiles enable row level security;
```

**Enable read access with RLS policy**

```sql
create policy "anyone can select profiles" ON "public"."profiles"
as permissive for select
to public
using (true);
```

**Create PostgreSQL Function to create profile**

```sql
create function public.create_profile_for_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, name, username, avatar_url)
  values (
    new.id,
    new.raw_user_meta_data->'name',
    new.raw_user_meta_data->'user_name',
    new.raw_user_meta_data->'avatar_url'
  );
  return new;
end;
$$;
```

**Create PostgreSQL Trigger to create profile**

```sql
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.create_profile_for_user();
```

## Resources

- [Managing user data docs](https://supabase.com/docs/guides/auth/managing-user-data)
- [Row Level Security docs](https://supabase.com/docs/guides/auth/row-level-security)

---

[👉 Next lesson](/13-run-authenticated-server-side-mutations-with-next.js-server-actions/README.md)

---

Enjoying the course? Follow Jon Meyers on [Twitter](https://twitter.com/jonmeyers_io) and subscribe to the [YouTube channel](https://www.youtube.com/c/jonmeyers).
