FROM node:10

# Khác với Angular app, ở đây ta ko có nginx, vì vầy ta nên quy định 1 directory là nơi sẽ chứa code trong docker này
WORKDIR /usr/src/app

# Install app dependencies, dấu * ở đây là để copy cả package.json và package-lock.json
COPY package*.json ./

RUN npm install

COPY . .

# Lại khác với ở trên nữa, mặc định thì nginx sẽ public cổng 80 ra ngoài, còn ở đây ta phải set bằng tay - đó là bắn cổng 8080 của nodeJS ra ngoài.
EXPOSE 3344
# chạy server với lệnh npm start
CMD [ "npm", "start" ]
