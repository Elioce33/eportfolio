PROJECT_NAME=fish_on_web

DEPLOY_USER=personal
DEPLOY_HOST=fishcorp.fr
DEPLOY_PATH=/home/${DEPLOY_USER}/${PROJECT_NAME}
DEPLOY_KEY=~/.ssh/vps_fishServer

info:
	@echo 'Project: ${PROJECT_NAME}'

deploy:
	/usr/bin/ssh -i ${DEPLOY_KEY} ${DEPLOY_USER}@${DEPLOY_HOST} "rm -rf ${DEPLOY_PATH}"
	/usr/bin/ssh -i ${DEPLOY_KEY} ${DEPLOY_USER}@${DEPLOY_HOST} "mkdir -p ${DEPLOY_PATH}"
	/usr/bin/scp -i ${DEPLOY_KEY} -r index.html public assets ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}
