pipeline {
  agent any

  environment {
    TOKEN = credentials('POS_TOKEN')
    EMAIL = "darek+ci@near-me.com"
    STAGING_URL = "https://documentation-staging.staging.oregon.platform-os.com"
  }

  options {
    disableConcurrentBuilds()
    timeout(time: 10, unit: 'MINUTES')
    buildDiscarder(logRotator(daysToKeepStr: '365', artifactDaysToKeepStr: '30'))
  }

  stages {
    stage('Build') {
      when {
        branch 'master'
      }
      steps {
        sh 'bash -l ./scripts/deploy.sh'
        sh 'docker run -v $PWD/tests/e2e:/tests -it testcafe/testcafe "chromium --no-sandbox" /tests/index.js'
      }
    }
  }
}
