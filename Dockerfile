FROM keymetrics/pm2:latest
RUN mkdir -p /home/Service
WORKDIR /home/Service
COPY . /home/Service
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --production
# Show current folder structure in logs
RUN ls -al -R
EXPOSE 40877
CMD [ "pm2", "start", "pm2.json","--no-daemon"]