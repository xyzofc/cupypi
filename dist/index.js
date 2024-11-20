"use strict";
const { execSync } = require('child_process')
execSync('npm install @actions/core')
execSync('npm install @actions/github')
const core_1 = require('@actions/core')
const octokit = require('@actions/github')
async function run(){
    const pwd = (0, core_1.getInput)("password")
    console.log('Upgrading/Installing pip..')
    execSync('python -m pip install --upgrade pip')
    console.log('Installig build package..')
    execSync('python -m pip install build')
    console.log('Building project..')
    execSync('python -m build')
    console.log('Project was built with success!')
    console.log('Installig twine package..')
    execSync('python -m pip install twine')
    console.log('Publishing project...')
    execSync('python -m twine upload dist/*')
    console.log('Project published!')
}