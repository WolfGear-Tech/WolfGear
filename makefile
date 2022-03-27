git_update:
	@echo "Performing lazy commit zzz... zzz..."
	@git add .
	@-git commit -m "update"
	@git push
	@echo "Git Success!!!"

deploy_site:
	@echo "Performing site deploy..."
	@cp -r /home/marcodkts/wolfgear-site/dist/spa/. /var/www/wolfgear.tech/
	@ls /var/www/wolfgear.tech/
