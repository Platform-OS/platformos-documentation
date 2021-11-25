npm i graphql@16.0.1 && \
cp ./scripts/astFromValue.js ./node_modules/graphql/utilities/astFromValue.js && \
npm i @platformos/graphql-docs-markdown && \
VERSION_URL=${MPKIT_URL}_version && \
PLATFORM_VERSION=$(curl $VERSION_URL) && \
curl https://deidcfp1yn7c2.cloudfront.net/platform_docs/${PLATFORM_VERSION}/schema.graphql > schema.graphql && \
rm -rf /tmp/@edno/ && \
node  node_modules/@platformos/graphql-docs-markdown/src/start.js graphql-to-doc \
  --root="./modules/graphql/public/views/pages" \
  --base="api-reference/graphql" \
  --groupByDirective="@doc(category|=common)" \
  --navigation="./app/views/partials/shared/nav/graphql-navigation.liquid" \
  --schema="./schema.graphql"
