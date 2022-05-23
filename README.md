# Supabase Fuzzy Bunny Organizer

## Learning Objectives

-   In response to a user event, make a fetch call to delete an item in the array and display the new state to the user (i.e., delete a todo).
-   Create foreign key relationships in Supabase and fetch related data using a single query

## Demo

[Fuzzy Bunny Organizer](https://alchemycodelab.github.io/web-01-fuzzy-bunny-organizer/)

## Getting Started

1. Use [this](https://github.com/alchemycodelab/half-baked-web-01-fuzzy-bunny-j) template to get started.
1. Create your own Fuzzy Bunnies database in Supabase using the seed data in `seeds.sql`. Copy / paste this file into the SQL Editor in Supabase. You should end up with the following schema:

![](https://github.com/alchemycodelab/half-baked-web-01-fuzzy-bunny-organizer/raw/main/bunnies-model.png)

Here is the schema for the `loving_families` table

![](https://github.com/alchemycodelab/half-baked-web-01-fuzzy-bunny-organizer/raw/main/families-model.png)

You should also have several families in the loving_families table. There is no seed data for the bunnies.
Enable row level security and add policies that only allow authenticated users to perform CRUD actions on the tables.

## Acceptance Criteria

-   Users should be able to see the list of families on the `/families` page with their fuzzy bunnies
-   Clicking a bunny should delete it from supabase
-   On `/create` users should see a dropdown that allows users to attach bunnies to families
-   On `/create`, submitting the form should create a new bunny attached to the selected family and redirect to the main family page

| Task                                                                             | Points |
| -------------------------------------------------------------------------------- | ------ |
| Impure: `displayFamilies()` function to display the families and bunnies            | 4      |
| ASYNC: `getFamilies()`: returns all families with their bunnies                  | 2      |
| ASYNC: `createBunny(bunny)` : create bunny in supabase and attach it to a family | 2      |
| ASYNC: `deleteBunny(id)` : delete a bunny in supabase                            | 2      |

### Stretch Goals Ideas

1. Add a page that lets you create a new loving family
2. On click, don't delete the bunny--go to the bunny's "detail page". The detail page will have an interface that lets the user update the bunny. This includes allowing the user to change which loving family the bunny belongs to.
3. Automatically generate the bunny form using a bunny fetched from the database. That way if new properties end up added to the bunny table, the front end dev doesn't need to update the front end later.
4. Add filter/sort functionality to the families page? Only show bunnies who are larger than 7 lbs, for example? Only show families with more than 2 bunnies?
5. _Mega ambitious_: I want to able to drag and drop bunnies to different families.
