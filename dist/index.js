"use strict";
import { execSync } from "child_process";

async function run() {
  try {
    // Verifique se o script está rodando no GitHub Actions
    const isGithubActions = process.env.GITHUB_ACTIONS === "true";
    if (!isGithubActions) {
      console.warn("Warning: This script is not running inside GitHub Actions.");
    }

    // Obtenha o input do workflow
    const pwd = process.env.INPUT_PASSWORD;
    if (!pwd) {
      throw new Error("Input 'password' was not provided or is empty.");
    }

    console.log("Password input received:", pwd);

    // Executar os comandos necessários
    execSync("python -m pip install --upgrade pip", { stdio: "inherit" });
    execSync("python -m pip install build", { stdio: "inherit" });
    execSync("python -m build", { stdio: "inherit" });
    execSync("python -m pip install twine", { 
