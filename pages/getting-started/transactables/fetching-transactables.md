---
title: Fetching Transactable
permalink: /getting-started/transactables/fetching-transactables
---
Now when form pages for creating/editing transactables are done, we might want to allow user to manage his transactables. We can obviously create a separate page, but for sake of this example, let's assume that we want to display all client's transactables on the homepage.

The full example could look like this:

{% raw %}
```liquid
{% query_graph 'current_user', result_name: g %}
<h1>Welcome{% if g.current_user%}, {{ g.current_user.first_name }}{% endif %}</h1>

{% if g.current_user.client_profile %}
  <a href="/client/projects/new">Create project</a>

  {% query_graph 'client_projects', result_name: client_projects, creator_id: g.current_user.id %}

  {% if client_projects.projects.total_entries > 0 %}
    <ul>
      {% for project in client_projects.projects.results %}
        <li>{{ project.name }} ({{ project.state }})- <a href="/client/projects/edit/{{project.slug}}">edit</a></li>
      {% endfor %}
    </ul>
  {% else %}
    <p>You have not created any projects yet.</p>
  {% endif %}
{% endif %}
```
{% endraw %}


In order for this to work, we need to create two graphql queries - one for fetching currently logged in user, and the second for fetching all transactables for user with given id. Let's start with `graph_queries/current_user.graphql`:

```graphql
{
  current_user{
    id
    slug
    first_name
    email
    developer_profile: profile(profile_type: "developer") {
      id
    }
    client_profile: profile(profile_type: "client") {
      id
    }
  }
}
```

The query should be self explanatory in terms of what data we fetch. If current user doesn't have developer / client profile, then it will be `null`, this is why example {% raw %}`{% if g.current_user.client_profile %}`{%end raw%} -  the condition will be evaluted as `false`.

The next query could be defined in `graph_queries/client_projects` and look like this:

```
query client_projects(
  $page: Int,
  $creator_id: ID!
)
 {
  projects: listings(
    per_page: 20,
    page: $page,
    sort:[
      {
        key: "created_at",
        order: "desc"
      }
    ],
    listing: {
      creator_id: $creator_id,
      is_deleted: false,
   }
  ) {
    total_entries
    has_next_page
    has_previous_page

    results {
      name
      slug
      state
      description
    }
  }
}
```
The query takes two parameters - page (default 1), which is used for pagination, and creator_id - which is used later in the query to scope the list to transactables only created by certain user. It will fetch 20 projects, ordered from newest to oldest. It will ignore all deleted items (please remember that we use concept of soft deletion - we don't really remove any data, we just add a timestamp for deleted_at). Data that is fetched should be self explanatory - on a root level, we fetch information for pagination, and the results contains array of actual elements. The `creator_id` is passed to the query via `query_graph` liquid tag, and it's value is id of the current user. Then in a loop we display sample information about transactables along with the link to edit them.

You can use exactly the same concept to build more advanced concepts, like powerful and fast `search`, which is demonstrated later in the tutorial.

