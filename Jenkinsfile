// @Library('pipeline-utils')_

// def staging_url = "https://documentation-staging.staging.oregon.platform-os.com"
// def production_url = "https://documentation.platformos.com"

// pipeline {
//   agent any

//   environment {
//     MPKIT_TOKEN = credentials('POS_TOKEN')
//     MPKIT_EMAIL = "darek+ci@near-me.com"
//   }

//   parameters {
//     string(description: 'Instance URL. When empty then we deploy on staging and production', name: 'MP_URL', defaultValue: '')
//   }

//   options {
//     disableConcurrentBuilds()
//     timeout(time: 60, unit: 'MINUTES')
//     buildDiscarder(logRotator(daysToKeepStr: '1', artifactDaysToKeepStr: '1'))
//   }

//   stages {
//     stage('Build') {
//       when { branch 'master' }

//       environment {
//         MPKIT_URL = "${staging_url}"
//         MPKIT_TOKEN = credentials('POS_TOKEN')
//       }

//       agent { docker { image 'node:14-alpine'; args '-u root' } }

//       steps {
//         sh 'apk add make python g++'
//         sh 'npm ci'
//         sh 'npm run build'
//         sh 'scripts/generate-graphql.sh'
//       }
//     }

//     stage('Deploy to URL') {
//       when { expression { return !params.MP_URL.isEmpty() } }
//       environment {
//         MPKIT_URL = "${params.MP_URL}"
//         CI = true
//       }
//       agent { docker { image 'platformos/pos-cli' } }
//       steps {
//         sh 'pos-cli deploy'
//       }
//     }

//     stage('Test on URL') {
//       when { expression { return !params.MP_URL.isEmpty() } }
//       agent { docker { image "platformos/testcafe" } }
//       environment { MP_URL = "${params.MP_URL}" }
//       steps {
//         sh 'npm run test-ci'
//       }
//       post { failure { archiveArtifacts "screenshots/" } }
//     }


//     stage('Deploy staging') {
//       when {
//         expression { return params.MP_URL.isEmpty() }
//         branch 'master'
//       }

//       environment {
//         MPKIT_URL = "${staging_url}"
//         CI = true
//       }

//       agent { docker { image 'platformos/pos-cli' } }

//       steps {
//         sh 'pos-cli deploy'
//       }
//     }

//     stage('Test staging') {
//       when {
//         expression { return params.MP_URL.isEmpty() }
//         branch 'master'
//       }

//       environment {
//         MP_URL = "${staging_url}"
//       }

//       agent { docker { image "platformos/testcafe" } }

//       steps {
//         sh 'npm run test-ci'
//       }
//       post { failure { archiveArtifacts "screenshots/" } }
//     }

//     stage('Deploy production') {
//       when {
//         expression { return params.MP_URL.isEmpty() }
//         branch 'master'
//       }

//       environment {
//         MPKIT_URL = "${production_url}"
//         CI = true
//       }

//       agent { docker { image 'platformos/pos-cli' } }

//       steps {
//         sh 'pos-cli deploy'
//       }
//     }

//     stage('Lighthouse') {
//       when {
//         expression { return params.MP_URL.isEmpty() }
//         branch 'master'
//       }

//       agent { docker { image 'kanti/lighthouse-ci' } }

//       steps {
//         sh 'curl https://documentation.platformos.com -o warmup.txt'
//         sh 'curl https://documentation.platformos.com/developer-guide/glossary -o warmup2.txt'

//         sh 'lighthouse-ci https://documentation.platformos.com > $HOME/tmp/lighthouse-home.txt'
//         sh 'lighthouse-ci https://documentation.platformos.com/developer-guide/glossary > $HOME/tmp/lighthouse-content.txt'

//         script {
//           lighthouseHome = sh(returnStdout: true, script: 'grep perf $HOME/tmp/lighthouse-home.txt').trim()
//           lighthouseContent = sh(returnStdout: true, script: 'grep perf $HOME/tmp/lighthouse-content.txt').trim()

//           slackSend (channel: "#notifications-docs", color: '#304ffe', message: "LH Home: ${lighthouseHome}   |   LH Content: ${lighthouseContent}")
//         }
//       }
//     }
//   }

//   post {
//     success {
//       script {
//         if (env.GIT_BRANCH == 'master') {
//           slackSend (channel: "#notifications-docs", color: '#00FF00', message: "OK: <${env.BUILD_URL}|#${env.BUILD_NUMBER}>. ${commitInfo()}")
//         }
//       }
//     }
//     failure {
//       script {
//         if (env.GIT_BRANCH == 'master') {
//           slackSend (channel: "#notifications-docs", color: '#FF0000', message: "BAD: <${env.BUILD_URL}|#${env.BUILD_NUMBER}>. ${commitInfo()}")
//         }
//       }
//     }
//  }
// }

// def commitInfo() {
//   GITHUB_URL = "https://github.com/mdyd-dev/platformos-documentation"

//   commitSha = sh(returnStdout: true, script: 'git rev-parse --short HEAD').trim()
//   commitAuthor = sh(returnStdout: true, script: 'git log --format="%an" -1').trim()
//   commitMsg = sh(returnStdout: true, script: 'git log --format="%B" -1 ${commitSha}').trim()

//   return "<${GITHUB_URL}/commit/${commitSha}|${commitSha}> - ${commitMsg}"
// }
