----
# tsconfig compile target fixing

## original base tsconfig

```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./lib",
    "target": "es2022",
    "lib": ["es2022"],
    "module": "commonjs",
    "moduleResolution": "node16",
    "sourceMap": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": false,
    "skipLibCheck": true,
    "declaration": true,
    "declarationMap": true
  },
  "include": ["**/*.ts", "**/*.js"],
  "exclude": ["**/*.spec.ts"],
  "files": ["src/typescript.d.ts"]
}
```

## leverage tsconfig library

```json
{
  "extends": "@elricb/tsconfig",
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./build/src",
    "target": "es2015",
    "strict": false
  },
  "include": ["src"]
}
```

## original tsconfig-esm.json

```json
//* "./node_modules/typescript/bin/tsc --project ./tsconfig-esm.json --outDir ./lib/esm --importHelpers" *//
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./build/esm",
    "target": "ES2020",
    "lib": ["ES2020", "ES2021.String"],
    "module": "node16",
    "moduleResolution": "node16",
    "moduleDetection": "force",
    "sourceMap": true,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "strict": false,
    "skipLibCheck": true,
    "declaration": false,
    "declarationMap": false
  },
  "include": ["**/*.ts", "**/*.js"],
  "exclude": ["**/*.spec.ts"]
}
```

## retrofit tsconfig-esm.json

```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./build/esm",
    "target": "ES2020",
    "lib": ["ES2020", "ES2021.String"],
    "module": "nodenext",
    "moduleResolution": "nodenext",
    "moduleDetection": "force",
    "esModuleInterop": false
  },
  "include": ["**/*.ts", "**/*.js"],
  "exclude": ["**/*.spec.ts"],
  "ts-node": {
    "transpileOnly": true,
    "files": true
  }
}
```

## original tsconfig-csj.json

```json
//* "./node_modules/typescript/bin/tsc --project ./tsconfig-cjs.json --outDir ./lib/cjs --importHelpers" *//
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./lib",
    "target": "es2022",
    "lib": ["es2022"],
    "module": "commonjs",
    "moduleResolution": "node",
    "sourceMap": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": false,
    "skipLibCheck": true,
    "declaration": true,
    "declarationMap": true
  },
  "include": ["**/*.ts", "**/*.js"],
  "exclude": ["**/*.spec.ts"]
}
```

## retrofix tsconfig-csj.json

```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./build/cjs",
    "target": "es2022",
    "lib": ["es2022"],
    "module": "commonjs",
    "moduleResolution": "node"
  },
  "include": ["**/*.ts", "**/*.js"],
  "exclude": ["**/*.spec.ts"],
  "ts-node": {
    "transpileOnly": true,
    "files": true
  }
}
```
