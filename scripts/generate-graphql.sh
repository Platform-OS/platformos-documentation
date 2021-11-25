npm i graphql@16.0.1 && \
cp ./scripts/astFromValue.js ./node_modules/graphql/utilities/astFromValue.js && \
npm i @platformos/graphql-docs-markdown && \
echo ${MPKIT_URL:0:10} && \
echo ${MPKIT_URL:10:30} && \
VERSION_URL=${MPKIT_URL}/_version
echo $VERSION_URL
PLATFORM_VERSION=`curl $VERSION_URL` && \
echo $PLATFORM_VERSION && \
curl https://deidcfp1yn7c2.cloudfront.net/platform_docs/${PLATFORM_VERSION}/schema.graphql > schema.graphql && \
rm -rf /tmp/@edno/ && \
node  node_modules/@platformos/graphql-docs-markdown/src/start.js graphql-to-doc \
  --root="./modules/graphql/public/views/pages" \
  --base="api-reference/graphql" \
  --groupByDirective="@doc(category|=common)" \
  --navigation="./app/views/partials/shared/nav/graphql-navigation.liquid" \
  --schema="./schema.graphql"
