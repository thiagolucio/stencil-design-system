# ![Logo](./src/assets/img/logo-svg.svg)

# Design System Web Sem Parar

Design System Web Version v1.0  - Sem Parar

Este projeto foi desenvolvido com o objetivo de ser uma Lib agnóstica de forma a poder ser implementada tando em projetos ReactJS como Angular ou outro Framework ou Biblioteca. A necessidade primordial é que fosse Web Component e também feito em TypeScript. 

Como resultado das análises em um primeiro momento esta solução está sendo feita em "StencilJS" que possui a condição de atender ambas as exigências. 

Também foi utilizado Storybook para o projeto mas o mesmo já possui um Showcase que poderá ser utilizado, rodando o projeto e acessando o mesmo pelo navegador.

---

## Acknowledgements

- [Stencil - A Compiler for Web Components - Stencil](https://stenciljs.com/docs/introduction)

- [StoryBook](https://storybook.js.org/)

- [Localhost do Projeto](http://localhost:3333/)

---

## Running:

### Inside root folder of the project, run:
- npm install
- npx stencil build --watch OR npm run build --watch
- npm start
- npm run storybook
- Project running in ...  [http://localhost:3333/](http://localhost:3333/)

You can see how it's the old packages typing:
- npm outdated

You can update Stencil typing:
- npm install @stencil/core@latest --save-exact

## Relevant Tech informations

- Global Styles configuration in "'src/global/global.css""

#### Iniciando projeto Stencil:
``` npm init stencil ```
#### Update StencilJS:
```npm install @stencil/core@latest --save-exact ```
#### Create component:
```npm run generate```
#### Create component using npx stencil native:
```stencil generate```

- Ex:
``` npx stencil generate pages/page-home ```

#### Storybook in project:

1) Install:
``` npx sb init --type html ```

2) Running:
``` npm run storybook ```

- Running in port [http://localhost:6006/](http://localhost:6006/)

##### Global Configuration:
- In "stencil.config.ts" have the following configuration:
  ``` globalStyle: 'src/global/global.css' ``` 

##### Global Style com SaSS:
-   ``` npm i @stencil/sass ```

- "stencil.config.ts" adicione a importação do SaSS no projeto:
 ``` import { sass } from '@stencil/sass'; ```

- "stencil.config.ts" add:  
  ``` plugins: [sass({injectGlobalPaths: ['src/globals/variables.scss', 'src/globals/mixins.scss']})] ```

- More info in : [https://stenciljs.com/docs/plugins](https://stenciljs.com/docs/plugins)



#### Integracao Angular:

- [https://stenciljs.com/docs/angular](https://stenciljs.com/docs/angular)

- [https://stenciljs.com/docs/react#add-the-react-wrapper-function-to-your-stencil-component-library](https://stenciljs.com/docs/react#add-the-react-wrapper-function-to-your-stencil-component-library)


#### Manipulando o estilo de um componente:

- ``` this.el.shadowRoot.querySelector() ``` para selecionar uma classe e manipular um componente criado na nossa biblioteca.
- Mais informações: [https://stenciljs.com/docs/styling#global-styles}](https://stenciljs.com/docs/styling#global-styles)# stencil-design-system
