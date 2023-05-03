# Introduce

This is Nextjs version 13 template.
Since this uses prisma it does not use the GET API.
I thought it was more powerful to use React Server Components in Nextjs 13 version.
I would like to use it as a full-stack app that can be developed quickly.

### Before installation

- env.example

```
DATABASE_URL=    // Database URL
SITE_DOMAIN=     // My Site Domain
SITE_NAME=       // My Site Title
```

- database setting

In backend/prisma/schema.prisma.

```
datasource db {
  provider = "mysql"  // DB setting
  url      = env("DATABASE_URL")
}
```

### Installation

```sh
yarn install
```

### Build

prisma generate --schema=[my schema.prisma root] prisma migrate deploy --schema=[my schema.prisma root] && next build

```sh
yarn run build
```

### Develop

```sh
yarn run dev
```

### Project Structure

├─.vscode
├─app
│ ├─api - server apis
│ │ └─example
│ └─ pages - client pages
├─backend
│ └─prisma - DB settings
│ └─mutations - mutation functions
├─frontend
│ ├─assets
│ ├─components
│ ├─hooks
│ ├─lib
│ ├─prisma
│ │ ├─fragments
│ │ ├─mutations
│ │ └─queries
│ └─utils
├─public
└─types
