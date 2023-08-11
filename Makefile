PROJECT_NAME=eportfolio

ifeq ($(ENV), prod)
	# nothing to do we push on the server
	DEPLOY_FOLDER=$(PROJECT_NAME)
else
	# if env is not prod, push to develop folder
	DEPLOY_FOLDER=$(PROJECT_NAME)-dev
endif

DEPLOY_USER=personal
DEPLOY_HOST=fishcorp.fr
DEPLOY_PATH=/home/$(DEPLOY_USER)/$(DEPLOY_FOLDER)
SERVICE_NAME=$(DEPLOY_FOLDER).service
DEPLOY_KEY=~/.ssh/vps_fishServer

BUILD_ARCHIVE=app_build.tar
APP_FILES=.env .next i18n node_modules package.json package-lock.json public server.js

info:
	@echo 'Project: $(PROJECT_NAME)'
	@echo 'Deploy path: $(DEPLOY_PATH)'

deps: info
	@echo 'Installing dependencies'
	npm install

build: deps
	@echo 'Building project'
	npm run build # this is a standalone build to make deploy more faster

deploy: build
	# remove old files and stop services
	/usr/bin/ssh -i $(DEPLOY_KEY) $(DEPLOY_USER)@$(DEPLOY_HOST) "sudo /usr/bin/systemctl stop $(SERVICE_NAME) && cd $(DEPLOY_PATH) && rm -rf * $(APP_FILES)"
	# make archive from local build
	/bin/tar cf $(BUILD_ARCHIVE) public .next/static -C .next/standalone .
	# push archive to server (/tmp folder)
	/usr/bin/scp -i $(DEPLOY_KEY) app_build.tar $(DEPLOY_USER)@$(DEPLOY_HOST):/tmp
	# unpack archive on server
	/usr/bin/ssh -i $(DEPLOY_KEY) $(DEPLOY_USER)@$(DEPLOY_HOST) "/usr/bin/tar xf /tmp/$(BUILD_ARCHIVE) -C $(DEPLOY_PATH) && rm /tmp/$(BUILD_ARCHIVE)"
	# restart services
	/usr/bin/ssh -i $(DEPLOY_KEY) $(DEPLOY_USER)@$(DEPLOY_HOST) "sudo /usr/bin/systemctl start $(SERVICE_NAME)"


clean: info
	@echo 'Cleaning project'
	rm -rf .next

mrproper: clean
	@echo 'Cleaning project and dependencies'
	rm -rf .next node_modules