# Cupypi - Coffe publish
A simple publish github action

# Usage
```yaml
- name Install packages (required to run action)
  run: |
   npm install @actions/core
   npm install @actions/github 
- name: Cupypi Publish Python Package
  uses: GitLabBR/cupypi@v1.0
  with:
   password: "${{ secrets.PYPI_API_TOKEN }}
```