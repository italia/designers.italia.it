#!/bin/bash

rm -rf ./bootstrap-italia
mkdir -p ./bootstrap-italia
cp -R ../../italia/bootstrap-italia/dist ./bootstrap-italia
cp -R ../../italia/bootstrap-italia/src ./bootstrap-italia
cp -R ../../italia/bootstrap-italia/package.json ./bootstrap-italia