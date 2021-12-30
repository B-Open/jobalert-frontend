FROM node:lts

# Install dependencies
COPY ./package.json ./package.json
RUN yarn install

# Copy remaining files
COPY . .

# Run build
RUN yarn run build

CMD ["npm", "start"]
