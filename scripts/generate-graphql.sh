npx graphdoc --force \
  --endpoint ${MPKIT_URL}/api/graph \
  --template "modules/graphql/template" \
  --extension html \
  --header "Authorization: Token ${MPKIT_TOKEN}"
