IMAGE_NAME = todo-app-frontend-react
DEV_IMAGE_NAME = ${IMAGE_NAME}:dev
PROD_IMAGE_NAME = ${IMAGE_NAME}:prod
PORT?=3001

build-dev: 
	docker build -t ${DEV_IMAGE_NAME} .

run-dev: 
	docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p ${PORT}:3000 -e CHOKIDAR_USEPOLLING=true ${DEV_IMAGE_NAME}

build-prod:
	docker build -f Dockerfile.prod -t ${PROD_IMAGE_NAME} .

run-prod:
	docker run -it --rm -p ${PORT}:80 ${PROD_IMAGE_NAME}