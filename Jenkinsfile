@Library('pipeline-utils')_

def staging_url = "https://documentation-staging.staging.oregon.platform-os.com"
def production_url = "https://documentation.platform-os.com"

pipeline {
  agent any

  environment {
    MPKIT_TOKEN = credentials('POS_TOKEN')
    MPKIT_EMAIL = "darek+ci@near-me.com"
  }

  options {
    disableConcurrentBuilds()
    timeout(time: 10, unit: 'MINUTES')
    buildDiscarder(logRotator(daysToKeepStr: '1', artifactDaysToKeepStr: '1'))
  }

  stages {
    stage('Build') {
      when { branch 'master' }

      agent { docker { image 'node:10-alpine'; args '-u root' } }

      steps {
        sh 'npm ci'
        sh 'npm run build'
      }
    }

    stage('Deploy staging') {
      when { branch 'master' }

      environment {
        MPKIT_URL = "${staging_url}"
      }

      agent { docker { image 'platformos/marketplace-kit:2.0' } }

      steps {
        sh 'marketplace-kit deploy'
      }
    }

    stage('Test staging') {
      when { branch 'master' }

      environment {
        MP_URL = "${staging_url}"
      }

      agent { docker { image "platformos/testcafe" } }

      steps {
        sh 'npm run test-ci'
      }
    }

    stage('Deploy production') {
      when { branch 'master' }

      environment {
        MPKIT_URL = "${production_url}"
      }

      agent { docker { image 'platformos/marketplace-kit:2.0' } }

      steps {
        sh 'marketplace-kit deploy'
      }
    }
  }

  post {
    success {
      script {
        if (env.GIT_BRANCH == 'master') {
          slackSend (channel: "#notifications-docs", color: '#00FF00', message: "SUCCESS: <${env.BUILD_URL}|Build #${env.BUILD_NUMBER}> \n ${commitInfo()}")
        }
      }
    }

    failure {
      script {
        if (env.GIT_BRANCH == 'master') {
          slackSend (channel: "#notifications-docs", color: '#FF0000', message: "BUILD FAIL: <${env.BUILD_URL}console|Open build details>")
        }
      }
    }
  }
}

def commitInfo() {
  GITHUB_URL = "https://github.com/mdyd-dev/nearme-documentation"

  commitSha = sh(returnStdout: true, script: 'git rev-parse --short HEAD').trim()
  commitAuthor = sh(returnStdout: true, script: 'git log --format="%an" -1').trim()
  commitMsg = sh(returnStdout: true, script: 'git log --format="%B" -1 ${commitSha}').trim()

  return "<${GITHUB_URL}/commit/${commitSha}|${commitSha}> - ${commitAuthor} - ${commitMsg}"
}
