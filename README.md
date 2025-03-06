# Cupypi - Coffe publish
A simple publish github action
<br><br>
# Usage (Click use latest version if glitch)
```yaml
- name Install packages (required to run action)
- name: Cupypi Publish Python Package
  uses: GitLabBR/cupypi@v4.2
  with:
    username: your_username_here
    password: your_password_here
  env: 
    TWINE_PASSWORD: your_password_here
    TWINE_USERNAME: your_username_here
```

