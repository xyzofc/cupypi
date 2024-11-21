"use strict";
import { execSync } from "child_process";

async function run() {
  try {
    // GitHub Actions define inputs como variáveis de ambiente com prefixo "INPUT_"
    const pwd = process.env.INPUT_PASSWORD;
    if (!pwd) {
      throw new Error("Input 'password' was not provided or is empty.");
    }

    console.log("Password input received:", pwd);

    execSync("python -m pip install --upgrade pip", { stdio: "inherit" });
    execSync("python -m pip install build", { stdio: "inherit" });
    execSync("python -m build", { stdio: "inherit" });
    execSync("python -m pip install twine", { stdio: "inherit" });
    execSync(`python -m twine upload -u __token__ -p ${pwd} dist/*`, {
      stdio: "inherit",
    });
  } catch (error) {
    console.error("Error during execution:", error.message);
    process.exit(1);
  }
}

run();
