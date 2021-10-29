"use strict";(self.webpackChunknvchad_site=self.webpackChunknvchad_site||[]).push([[19],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return n?i.createElement(h,l(l({ref:t},u),{},{components:n})):i.createElement(h,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},562:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),l=["components"],o={id:"features",title:"Features"},s=void 0,p={unversionedId:"features",id:"features",isDocsHomePage:!1,title:"Features",description:"NvChad comes with many comforts of a modern IDE. All lazy-loaded and built on top of NeoVim's fantastic lua integration while still looking very beautiful!",source:"@site/docs/features.md",sourceDirName:".",slug:"/features",permalink:"/features",version:"current",frontMatter:{id:"features",title:"Features"},sidebar:"docs",previous:{title:"Format & lint",permalink:"/config/Format & lint"},next:{title:"Extras",permalink:"/Extras"}},u=[{value:"Plugins",id:"plugins",children:[{value:"Core plugins",id:"core-plugins",children:[]},{value:"UI plugins",id:"ui-plugins",children:[]},{value:"Language Server Plugins",id:"language-server-plugins",children:[]},{value:"Misc plugins",id:"misc-plugins",children:[]}]}],m={toc:u};function c(e){var t=e.components,o=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"NvChad comes with many comforts of a modern IDE. All lazy-loaded and built on top of NeoVim's fantastic lua integration while still looking very beautiful!"),(0,r.kt)("h2",{id:"plugins"},"Plugins"),(0,r.kt)("h3",{id:"core-plugins"},"Core plugins"),(0,r.kt)("h4",{id:"packernvim"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/wbthomason/packer.nvim"},(0,r.kt)("inlineCode",{parentName:"a"},"packer.nvim"))),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"use-package")," inspired plugin manager for Neovim. Uses native packages, supports Luarocks dependencies, written in Lua, allows for expressive config, lazy loading etc."),(0,r.kt)("h4",{id:"better-escapenvim"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/max397574/better-escape.nvim"},(0,r.kt)("inlineCode",{parentName:"a"},"better-escape.nvim"))),(0,r.kt)("p",null,"A plugin for escaping Vim insert mode without lagging."),(0,r.kt)("h4",{id:"telescopenvim"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/nvim-telescope/telescope.nvim"},(0,r.kt)("inlineCode",{parentName:"a"},"telescope.nvim"))),(0,r.kt)("p",null,"Fuzzy finding select menu with text and image preview."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/siduck/dotfiles/all/rice%20flex/tel.png",alt:"Telescope"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/siduck/dotfiles/all/rice%20flex/telmedia.png",alt:"Telescope-media"}),"\n(telescope media works in linux only)"),(0,r.kt)("h3",{id:"ui-plugins"},"UI plugins"),(0,r.kt)("h4",{id:"bufferlinenvim"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/akinsho/bufferline.nvim"},(0,r.kt)("inlineCode",{parentName:"a"},"bufferline.nvim"))),(0,r.kt)("p",null,"Top bar bufferline for neovim (can be used for managing buffers and tabs, including close them. It also creates custom clickable buttons on the bufferline."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/siduck/dotfiles/all/rice%20flex/bufferline.png",alt:"bufferline"})),(0,r.kt)("h4",{id:"felinenvim"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/famiu/feline.nvim"},(0,r.kt)("inlineCode",{parentName:"a"},"feline.nvim"))),(0,r.kt)("p",null,"Fast NeoVim statusline plugin written in lua."),(0,r.kt)("p",null,"Separator styles: ",(0,r.kt)("inlineCode",{parentName:"p"},"slant"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"round"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"default"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"block"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"arrow"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"feline screenshot",src:n(4908).Z})),(0,r.kt)("h4",{id:"nvim-treelua"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/kyazdani42/nvim-tree.lua"},(0,r.kt)("inlineCode",{parentName:"a"},"nvim-tree.lua"))),(0,r.kt)("p",null,"A file explorer tree for NeoVim written in lua."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/siduck/dotfiles/all/rice%20flex/nvimtree.png",alt:"nvim tree"})),(0,r.kt)("h4",{id:"blankline"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/lukas-reineke/indent-blankline.nvim"},(0,r.kt)("inlineCode",{parentName:"a"},"blankline"))),(0,r.kt)("p",null,"Indentline plugin."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/siduck/dotfiles/all/rice%20flex/blanklineNvim.png",alt:"blankline screenshot"})),(0,r.kt)("h4",{id:"dashboard-nvim"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/glepnir/dashboard-nvim"},(0,r.kt)("inlineCode",{parentName:"a"},"dashboard-nvim"))),(0,r.kt)("p",null,"Dashboard plugin for NeoVim."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/siduck/dotfiles/all/rice%20flex/dashboard-nvim.png",alt:"dashboard"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"devicons screenshot",src:n(3362).Z})),(0,r.kt)("h4",{id:"nvim-base16lua"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/norcalli/nvim-base16.lua"},(0,r.kt)("inlineCode",{parentName:"a"},"nvim-base16.lua"))),(0,r.kt)("p",null,"Manages syntax colorscheme in NvChad."),(0,r.kt)("h4",{id:"nvim-colorizerlua"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/norcalli/nvim-colorizer.lua"},(0,r.kt)("inlineCode",{parentName:"a"},"nvim-colorizer.lua"))),(0,r.kt)("p",null,"Fastest NeoVim colorizer, colors hex colors, hsl codes and much more!"),(0,r.kt)("h4",{id:"nvim-web-devicons"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/kyazdani42/nvim-web-devicons"},(0,r.kt)("inlineCode",{parentName:"a"},"nvim-web-devicons"))),(0,r.kt)("p",null,"Lua fork of vim devicons which lets you change colors and edit icons of filetypes."),(0,r.kt)("h3",{id:"language-server-plugins"},"Language Server Plugins"),(0,r.kt)("h4",{id:"nvim-treesitter"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/nvim-treesitter/nvim-treesitter"},(0,r.kt)("inlineCode",{parentName:"a"},"nvim-treesitter"))),(0,r.kt)("p",null,"NeoVim Treesitter configurations and abstraction layer. We mostly use this for syntax highlighting."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"without / with treesitter:"),"\n",(0,r.kt)("img",{alt:"treesitter",src:n(3655).Z})),(0,r.kt)("h4",{id:"various-lsp-plugins"},"Various LSP plugins"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/neovim/nvim-lspconfig"},(0,r.kt)("inlineCode",{parentName:"a"},"nvim-lspconfig"))," - Used for configuring lsp servers etc"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/hrsh7th/nvim-cmp"},(0,r.kt)("inlineCode",{parentName:"a"},"nvim-cmp"))," - completion menu"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ray-x/lsp_signature.nvim"},(0,r.kt)("inlineCode",{parentName:"a"},"lsp-signature.nvim"))," - lsp signature hint when you type"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/onsails/lspkind-nvim"},(0,r.kt)("inlineCode",{parentName:"a"},"lspkind.nvim"))," - Adds pictograms to neovim built-in lsp completion items:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/siduck/dotfiles/all/rice%20flex/lspkind.png",alt:"lspkind"})),(0,r.kt)("h3",{id:"misc-plugins"},"Misc plugins"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/lewis6991/gitsigns.nvim"},(0,r.kt)("inlineCode",{parentName:"a"},"gitsigns.nvim"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/windwp/nvim-autopairs"},(0,r.kt)("inlineCode",{parentName:"a"},"nvim-autopairs"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/andymass/vim-matchup"},(0,r.kt)("inlineCode",{parentName:"a"},"vim-matchup"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/terrortylor/nvim-comment"},(0,r.kt)("inlineCode",{parentName:"a"},"nvim-comment")))))}c.isMDXComponent=!0},3362:function(e,t,n){t.Z=n.p+"assets/images/devi-bd6e4711f4dac4d21c2a6b0f925e1ebf.png"},4908:function(e,t,n){t.Z=n.p+"assets/images/galaxyline-0ffc99cd79c6d59d200559af792d6f3a.png"},3655:function(e,t,n){t.Z=n.p+"assets/images/treesitter-b5e7bb72ca9aaae2c0c9c71c1f70de02.png"}}]);