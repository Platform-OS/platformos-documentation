npm i graphql@16.0.1 && \
cp ./scripts/astFromValue.js ./node_modules/graphql/utilities/astFromValue.js
npm i @platformos/graphql-docs-markdown && \
curl ${MPKIT_URL}/api/graph/schema.graphql \
node  node_modules/@platformos/graphql-docs-markdown/src/start.js graphql-to-doc \
  --root="./modules/graphql/public/views/pages" \
  --base="api-reference/graphql" \
  --groupByDirective="@doc(category|=common)" \
  --navigation="./app/views/partials/shared/nav/graphql-navigation.liquid" \
  --schema="./schema.graphql"
