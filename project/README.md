# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command


### Erro encontrado no server

```
https://bobbyhadz.com/blog/typescript-module-can-only-be-default-imported-esmoduleinterop
```

```
    {
    "compilerOptions": {
        "esModuleInterop": true,
        "lib": [
            "es5",
            "es6"
        ],
        "target": "es5",
        "module": "commonjs",
        "moduleResolution": "node",
        "outDir": "./build",
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "sourceMap": true
    }
    }
```