# waitingListbackend

a small waiting list API

## Usage

- Clone repository using command

```git
git clone https://github.com/innextinit/waitingListbackend.git
```

- Then change into the cloned folder with

```
cd waitingListbackend
```

- Now install the project with

```
npm i
```

or

```
npm install
```

- Rename the `.env.example` file to `.env` and input the values e.g mongodb url, port etc.

```
mv .env.example .env
```

- Start the development server with

```
npm run dev
```

- Go to `http://localhost:[post]/docs` to access the API endpoints e.g

```
http://localhost:5000/docs
```

- To control access to your waiting list, I set up a whitelist in `index.js` file, add your origin to the whitelist

## How To Contribute

- Create a new branch with `git checkout -b [branch-name]`. Your branch name should describe the feature you are implementing. e.g

```bash
git checkout -b login-with-email
```

- After making changes, run `git add .` to stage all of them or `git add [filename]` to add only specific files.

```
git add .
```

or

```
git add index.js
```

- Commit your changes by running `git commit` providing a descriptive commit message e.g

```bash
git commit -m "added login with email"
```

- Finally push update to remote branch with `git push origin [your-branch-name]` e.g

```bash
git push -u origin login-with-email
```

or

```bash
git push -u origin HEAD
```
