@Library('pipeline-utils')_

def staging_url = "https://documentation-staging.staging.oregon.platform-os.com"
def production_url = "https://documentation.platformos.com"

pipeline {
  agent any

  environment {
    MPKIT_TOKEN = credentials('POS_TOKEN')
    MPKIT_EMAIL = "darek+ci@near-me.com"
  }

  parameters {
    string(description: 'Instance URL. When empty then we deploy on staging and production', name: 'MP_URL', defaultValue: '')
  }

  options {
    disableConcurrentBuilds()
    timeout(time: 60, unit: 'MINUTES')
    buildDiscarder(logRotator(daysToKeepStr: '1', artifactDaysToKeepStr: '1'))
  }

  stages {
    stage('Build') {
      when { branch 'master' }

      agent { docker { image 'node:12-alpine'; args '-u root' } }

      steps {
        sh 'apk add make python g++'
        sh 'npm ci'
        sh 'npm run build'
      }
    }

    stage('Deploy to URL') {
      when { expression { return !params.MP_URL.isEmpty() } }
      environment {
        MPKIT_URL = "${params.MP_URL}"
      }
      agent { docker { image 'platformos/pos-cli' } }
      steps {
        sh 'CI=true pos-cli deploy'
      }
    }

    stage('Test on URL') {
      when { expression { return !params.MP_URL.isEmpty() } }
      agent { docker { image "platformos/testcafe" } }
      environment { MP_URL = "${params.MP_URL}" }
      steps {
        sh 'npm run test-ci'
      }
      post { failure { archiveArtifacts "screenshots/" } }
    }


    stage('Deploy staging') {
      when {
        expression { return params.MP_URL.isEmpty() }
        branch 'master'
      }

      environment {
        MPKIT_URL = "${staging_url}"
      }

      agent { docker { image 'platformos/pos-cli' } }

      steps {
        sh 'CI=true pos-cli deploy'
      }
    }

    stage('Test staging') {
      when {
        expression { return params.MP_URL.isEmpty() }
        branch 'master'
      }

      environment {
        MP_URL = "${staging_url}"
      }

      agent { docker { image "platformos/testcafe" } }

      steps {
        sh 'npm run test-ci'
      }
      post { failure { archiveArtifacts "screenshots/" } }
    }

    stage('Deploy production') {
      when {
        expression { return params.MP_URL.isEmpty() }
        branch 'master'
      }

      environment {
        MPKIT_URL = "${production_url}"
        CI = true
      }

      agent { docker { image 'platformos/pos-cli' } }

      steps {
        sh 'pos-cli deploy'
      }
    }

    // stage('Broken links checker') {
    //   when {
    //     branch 'master'
    //     expression { return params.MP_URL.isEmpty() }
    //   }
    //   agent { docker { image 'node:12-alpine'; args '-u root -v $HOME/tmp:/tmp' } }

    //   environment {
    //     MP_URL = "${production_url}"
    //     CI = true
    //   }

    //   steps {
    //     sh 'npm i broken-link-checker'
    //     sh 'time node ./scripts/check-broken-links.js'
    //   }
    // }
  }

  post {
    success {
      script {
        if (env.GIT_BRANCH == 'master') {
          // testOutput = sh(returnStdout: true, script: 'cat $HOME/tmp/test-summary.txt').trim()
          slackSend (channel: "#notifications-docs", color: '#00FF00', message: "SUCCESS: <${env.BUILD_URL}|Build #${env.BUILD_NUMBER}> - ${buildDuration()}. ${commitInfo()}")
          // slackSend (channel: "#notifications-docs", color: '#00FF00', message: "${testOutput}")
        }
      }
    }

    failure {
      script {
        if (env.GIT_BRANCH == 'master') {
          slackSend (channel: "#notifications-docs", color: '#FF0000', message: "FAILED: <${env.BUILD_URL}|Build #${env.BUILD_NUMBER}> - ${buildDuration()}. ${commitInfo()}")
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

  return "<${GITHUB_URL}/commit/${commitSha}|${commitSha}> - ${commitMsg}"
}
