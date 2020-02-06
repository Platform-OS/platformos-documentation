set -e

time npx graphdoc --force \
  --endpoint ${MPKIT_URL}/api/graph \
  --template "modules/graphql/template" \
  --extension html.liquid \
  --header "Authorization: Token ${MPKIT_TOKEN}"
