pipeline {
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
        try {
          sh 'bash -l ./scripts/build.sh'
          sh 'bash -l ./scripts/deploy.sh'
          sh 'bash -l ./scripts/test-e2e.sh'

          notifySuccessful()
        } catch (e) {
          notifyFailed()
          throw e
        }
      }


      def notifySuccessful() {
        slackSend (channel: "#javascript-errors", color: '#00FF00', message: "SUCCESS: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
      }

      def notifyFailed() {
        slackSend (channel: "#javascript-errors", color: '#FF0000', message: "FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
      }

    }
  }
}
