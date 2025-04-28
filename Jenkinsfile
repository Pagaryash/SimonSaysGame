pipeline {
    agent any
    tools {
        nodejs 'NodeJS'
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
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t simonsaysgame .'
            }
        }
        stage('Deploy') {
            steps {
                sh '''
                docker stop simonsaysgame || true
                docker rm simonsaysgame || true
                docker run -d --name simonsaysgame -p 3000:3000 simonsaysgame
                '''
            }
        }
    }
}