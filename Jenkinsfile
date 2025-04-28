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
                sh '/usr/local/bin/docker build -t simonsaysgame . || /Applications/Docker.app/Contents/Resources/bin/docker build -t simonsaysgame .'
            }
        }
        stage('Deploy') {
            steps {
                sh '''
                /usr/local/bin/docker stop simonsaysgame || /Applications/Docker.app/Contents/Resources/bin/docker stop simonsaysgame || true
                /usr/local/bin/docker rm simonsaysgame || /Applications/Docker.app/Contents/Resources/bin/docker rm simonsaysgame || true
                /usr/local/bin/docker run -d --name simonsaysgame -p 3000:3000 simonsaysgame || /Applications/Docker.app/Contents/Resources/bin/docker run -d --name simonsaysgame -p 3000:3000 simonsaysgame
                '''
            }
        }
    }
}