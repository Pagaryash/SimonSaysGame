pipeline {
    agent any
    tools {
        nodejs 'NodeJS' // Assumes 'NodeJS' is configured in Jenkins Global Tool Configuration
    }
    stages {
        stage('Checkout') {
            steps {
               git url: 'https://github.com/Pagaryash/SimonSaysGame.git', credentialsId: 'github-pat', branch: 'main'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                echo 'Building Simon Says Game...'
                // Placeholder for build steps (e.g., linting, bundling if needed)
            }
        }
    }
}