npm i pos-graphdocs && \
node node_modules/pos-graphdocs/bin/graphdoc.js --force \
  --endpoint ${MPKIT_URL}/api/graph \
  --template "modules/graphql/template" \
  --extension html \
  --header "Authorization: Token ${MPKIT_TOKEN}"
