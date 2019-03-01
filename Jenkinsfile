pipeline {
  agent any

  triggers {
    cron('H H/12 * * *')
  }

  environment {
    TOKEN = credentials('POS_TOKEN')
    EMAIL = "darek+ci@near-me.com"
  }

  options {
    disableConcurrentBuilds()
    timeout(time: 10, unit: 'MINUTES')
    buildDiscarder(logRotator(daysToKeepStr: '7', artifactDaysToKeepStr: '7'))
  }
  stages {
    stage('Staging') {
      environment {
        MP_URL = "https://documentation-staging.staging.oregon.platform-os.com"
        GITHUB_URL = "https://github.com/mdyd-dev/nearme-documentation"
      }

      when {
        branch 'master'
      }

      steps {
        script {
          commitSha = sh(returnStdout: true, script: 'git rev-parse --short HEAD').trim()
          commitAuthor = sh(returnStdout: true, script: 'git log --format="%an" -1').trim()
          commitMsg = sh(returnStdout: true, script: 'git log --format="%B" -1 ${commitSha}').trim()

          commitInfo = "<${GITHUB_URL}/commit/${commitSha}|${commitSha}> - ${commitAuthor} - ${commitMsg}"
        }

        // slackSend (channel: "#notifications-docs", message: "BUILD START: <${env.BUILD_URL}|Build #${env.BUILD_NUMBER}> (<${MP_URL}|Staging>) \n ${commitInfo}")

        sh 'bash -l ./scripts/build.sh'
        sh 'bash -l ./scripts/deploy.sh'
        sh 'bash -l ./scripts/test-e2e.sh'
      }

      post {
        success {
          slackSend (channel: "#notifications-docs", color: '#00FF00', message: "SUCCESS: <${MP_URL}|Preview site> <${env.BUILD_URL}|Build #${env.BUILD_NUMBER}> \n ${commitInfo}")
        }

        failure {
          slackSend (channel: "#notifications-docs", color: '#FF0000', message: "BUILD FAIL: <${env.BUILD_URL}console|Open build details>")
        }
      }
    }
  }
}
