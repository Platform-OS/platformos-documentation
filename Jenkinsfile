pipeline {
  agent any

  environment {
    TOKEN = credentials('POS_TOKEN')
    EMAIL = "darek+ci@near-me.com"
  }

  options {
    disableConcurrentBuilds()
    timeout(time: 10, unit: 'MINUTES')
    buildDiscarder(logRotator(daysToKeepStr: '365', artifactDaysToKeepStr: '30'))
  }
  stages {
    stage('Staging') {
      environment {
        MP_URL = "https://documentation.staging-oregon.near-me.com"
      }

      when {
        branch 'master'
      }

      steps {
        slackSend (channel: "#javascript-errors", message: "STARTED: Deploying to <${MP_URL}|staging> (<${env.BUILD_URL}|Build #${env.BUILD_NUMBER}>)")

        sh 'bash -l ./scripts/build.sh'
        sh 'bash -l ./scripts/deploy.sh'
        sh 'bash -l ./scripts/test-e2e.sh'
      }

      post {
        success {
          slackSend (channel: "#javascript-errors", color: '#00FF00', message: "SUCCESS: Deployed new code to staging, tests passed. (<${MP_URL}|Preview>)")
        }

        failure {
          slackSend (channel: "#javascript-errors", color: '#FF0000', message: "FAILED: Build failed. Deploy or tests failed. (<${env.BUILD_URL}|Build details>)")
        }
      }
    }
  }
}
