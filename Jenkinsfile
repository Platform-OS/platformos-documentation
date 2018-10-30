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
        sh 'bash -l ./scripts/build.sh'
        sh 'bash -l ./scripts/deploy.sh'
        sh 'bash -l npm run test:e2e'
      }
    }
  }
}
