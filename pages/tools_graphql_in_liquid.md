## GraphQl in Liquid

[GraphQl](http://graphql.org/learn/) can be executed on liquid with `query_graph` tag.

    {% query_graph users_query, result_name: g, current_user: current_user %}
    {{ g }}
