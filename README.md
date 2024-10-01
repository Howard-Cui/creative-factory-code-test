# Creative Factory Code Test

## Getting Started ✨ :sparkles:

### Install dependencies

```bash
$ npm i
```

### Start the server

```bash
$ npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/pages/index.tsx`. The page auto-updates as you edit the file.

### Environment Variables

Add a file named `.env` at the root directory. Ask Repository Owner for the .env file for our application

### Build for Deploy

```shell
$ npm run build
```

### [Static HTML Export](https://nextjs.org/docs/advanced-features/static-html-export)

```shell
$ npm run export
```

### Run the Production

```shell
$ npm run start
```

### Run All Test

```shell
$ npm run test
```

### Run Single Test With Watching And Display Coverage

```shell
$ npm run test filename --watch --coverage
```

## Project structure

```
$PROJECT_ROOT
│   # run some command when you commit
├── husky
│   #icon
├── public
│
├── src
│   │   # all unit tests
│   ├── tests
│   │   # all images
│   ├── assets
│   │   # react component files
│   ├── components
│   │   # Page layout
│   ├── layouts
│   │   # Page files
│   ├── pages
│   │   # styles
│   ├── styles
│   │   # All further encapsulation of libraries
│   ├── libs
```

## Project Tech Stack

<table align="center" border=0>
   <tr>
      <td width="500"><b>Front-end</b></td>
   </tr>
   <tr>
      <td>
         • Node Version: v20.14<br>
         • Framework: Next.js 14 Page Route (The React version we are using is 18)<br>
         • Scripting Language: Typescript<br>
         • Styling: TailwindCSS<br>
         • ApiClient: Axios<br>
         • Testing: Jest, React-testing-library<br>
         • Code Control: Eslint, Prettier<br>
         • Git Hook: Husky，commitlint, lint-staged<br>
      </td>
   </tr>
</table>

## Code of Conduct :clipboard:

<table align="center" border=0>
   <tr>
      <td width="500"><b>1. Commit Message</b></td>
   </tr>
   <tr>
      <td>
         # Semantic Commit Messages

See how a minor change to your commit message style can make you a better programmer.

Format: `<type>(<scope>): <subject>`

`<scope>` is optional

## Example

```
feat: add hat wobble
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

More Examples:

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)

References:

- https://www.conventionalcommits.org/
- https://seesparkbox.com/foundry/semantic_commit_messages
- http://karma-runner.github.io/1.0/dev/git-commit-msg.html
  </td>
   </tr>

</table>

<i><b>Enjoy the journey!</b></i>:clap:
