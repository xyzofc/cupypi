# Cupypi - Coffe publish
A simple publish github action

# Usage (Click use latest version if glitch)
```yaml
- name Install packages (required to run action)
- name: Cupypi Publish Python Package
  uses: GitLabBR/cupypi@2.2
  with:
    token: "${{ secrets.PYPI_API_TOKEN }}"
    password: "${{ secrets.PYPI_API_PASSWORD }}
```
