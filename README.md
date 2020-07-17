## SETUP DE PROJETO NODE.JS COM TYPESCRIPT E ESLINT
---
> Inicializar projeto

`Npm init -y ou yarn init -y`

> Instalar TypeScript como dependência de desenvolvimento

`yarn add typescript`~~@version~~` -D` 

```typescript
const a:number = 2; // :D
```
> Gerar arquivo `tsconfig.json`

`yarn tsc --init`

> Adicionar tipagem de dependências

`yarn add @types/_dependency_ -D`

> Compilar js de produção

`yarn tsc`

> Adicionar *library* de compilação TS -> JS

```bash
 yarn add ts-node-dev -D // Aceita decorators, auto-restart, etc. 
 ```

 > Criar script de execução do compilador

 ```bash
 "dev":"ts-node-dev --respawn --transpile-only --ignore-watch --no-notify src/server.ts"
 ```
 > Arquivo _tsconfig.json:_

- Setar diretórios de arquivos-fonte e arquivos compilados:
 ```
  "outDir": "./dist",
  "rootDir": "./src",
 ```

- Ignorar pasta dos arquivos compilados:

 ```git
    dist em .gitignore
 ```

- Para projetos node, setar uma _target_ maior (p.e: __es6__ ou __es2017__):
    - `"target":"es2017"`

- Permitir arquivos js (migração ou libs sem suporte a ts):
    - `"allowJs": true`

- Lib ES6:
    - `"lib": ["ES6"]`

- Remover comentários:
    - ` "removeComments": true`

- Desabilitar _strict_:
    - `// "strict": true`

- Se for usar _decorators_:
     ```typescript   
     "experimentalDecorators": true,    
    "emitDecoratorMetadata": true,
     ```

- Sobrescrever diretórios de _libs_:
    ```json
    "typeRoots": [
      "./node_modules/@types",
      "./src/@types"
    ]
    ```

- Habilitar importação de arquivos JSON:

     `"resolveJsonModule": true,`

> Paths

- Configurar _paths_ manuais:
    ```json
    "baseUrl": ".",
    "paths": {
      "@controllers/*": ["./src/controllers/*"],
      "@models/*": ["./src/models/*"],
      "@config/*": ["./src/config/*"]
    }
    ```
- Instalar dependência para leitura dos _paths_:
    
    `yarn add tsconfig-paths -D`

> ESLint

- Instalar eslint como dependência de desenvolvimento

    `yarn add eslint -D`

- Inicializar eslint e configurações

    `yarn eslint --init`

- Se utilizar yarn, adicionar dependências manualmente como dependências de desenvolvimento

    `yarn add [...] -D`

- Para _styleGuide_ do __Airbnb__, adicionar:

    `yarn add eslint-import-resolver-typescript -D`

- E no `.eslintrc.json`:

    ```
    "settings": {
          "import/resolver": {
            "typescript": {} // this loads <rootdir>/tsconfig.json to eslint
          }
        }
    ```




