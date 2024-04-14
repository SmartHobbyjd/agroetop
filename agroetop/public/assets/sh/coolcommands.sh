file find and extention change in a directory:
find dirnamehere/ -type f -name "*.jsx" -exec bash -c 'mv "$0" "${0%.jsx}.tsx"' {} \;

Show All directory and it files:
ls -R dirnamehere/

ls -R dirnamehere/ | grep -v -E 'node_modules|.next'

Install Next.js Project:
npx create-next-app@latest --typescript

npm install react-redux @reduxjs/toolkit tailwindcss postcss autoprefixer axios

npm install -g npm-check-updates 
ncu -u  
yarn update   