pipeline {
    agent any

    environment {
        DOCKERHUB = credentials('dockerhub-creds')
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Janakiraman0207/jenkins-docker-fullstack.git'
            }
        }

        stage('Build Backend Docker Image') {
            steps {
                sh '''
                    cd backend
                    docker build -t janakiraman0207/backend-app:latest .
                '''
            }
        }

        stage('Build Frontend Docker Image') {
            steps {
                sh '''
                    cd frontend
                    docker build -t janakiraman0207/frontend-app:latest .
                '''
            }
        }

        stage('Login to DockerHub') {
            steps {
                sh '''
                    echo "$DOCKERHUB_PSW" | docker login -u "$DOCKERHUB_USR" --password-stdin
                '''
            }
        }

        stage('Push Docker Images') {
            steps {
                sh '''
                    docker push janakiraman0207/backend-app:latest
                    docker push janakiraman0207/frontend-app:latest
                '''
            }
        }

        stage('Run Containers on EC2') {
            steps {
                sh '''
                    docker stop backend || true
                    docker rm backend || true
                    docker stop frontend || true
                    docker rm frontend || true

                    docker run -d -p 5000:5000 --name backend janakiraman0207/backend-app:latest
                    docker run -d -p 80:80 --name frontend janakiraman0207/frontend-app:latest
                '''
            }
        }
    }
}
