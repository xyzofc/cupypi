"use strict";
import { execSync } from ('child_process')
execSync('npm install @actions/core')
execSync('npm install @actions/github')
import { getInput } from '@actions/core'


async function run(){
    const pwd = getInput("password")
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