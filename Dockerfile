FROM circleci/ruby:2.6.0-node

ENV PORT 4000
ENV NOKOGIRI_USE_SYSTEM_LIBRARIES true
ENV NODE_PATH /tmp/node_modules

WORKDIR /usr/src/designers.italia.it

RUN echo '--modules-folder /tmp/node_modules' >> /home/circleci/.yarnrc

COPY package.json .
COPY yarn.lock .
COPY Gemfile .
COPY Gemfile.lock .

RUN gem install bundler:2.1.4 \
  && bundle config set deployment true \
  && yarn install --frozen-lockfile \
  && bundle install

EXPOSE 4000

CMD ["yarn", "run", "dev"]
