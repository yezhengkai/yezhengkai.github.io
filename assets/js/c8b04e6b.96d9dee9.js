"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[313],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=i.createContext({}),p=function(e){var t=i.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=p(e.components);return i.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=p(a),d=n,c=k["".concat(u,".").concat(d)]||k[d]||s[d]||l;return a?i.createElement(c,r(r({ref:t},m),{},{components:a})):i.createElement(c,r({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=k;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var p=2;p<l;p++)r[p]=a[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}k.displayName="MDXCreateElement"},5780:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var i=a(3117),n=a(102),l=(a(7294),a(3905)),r=["components"],o={},u="Infrastructure & Tooling for Julialang Ecosystem",p={unversionedId:"data-science/julia-infra-and-tool",id:"data-science/julia-infra-and-tool",title:"Infrastructure & Tooling for Julialang Ecosystem",description:"The Big Picture",source:"@site/docs/data-science/julia-infra-and-tool.md",sourceDirName:"data-science",slug:"/data-science/julia-infra-and-tool",permalink:"/docs/data-science/julia-infra-and-tool",draft:!1,editUrl:"https://github.com/yezhengkai/yezhengkai.github.io/edit/main/website/docs/data-science/julia-infra-and-tool.md",tags:[],version:"current",lastUpdatedAt:1734425625,formattedLastUpdatedAt:"12/17/2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LLM",permalink:"/docs/data-science/LLM"},next:{title:"Windows Subsystem for Linux",permalink:"/docs/dev-env/wsl"}},m={},s=[{value:"The Big Picture",id:"the-big-picture",level:2},{value:"Data",id:"data",level:2},{value:"Sources",id:"sources",level:3},{value:"Filesystem",id:"filesystem",level:4},{value:"Database",id:"database",level:4},{value:"Versioning",id:"versioning",level:3},{value:"Exploration",id:"exploration",level:3},{value:"Training/Evaluation",id:"trainingevaluation",level:2},{value:"Computing",id:"computing",level:3},{value:"Resource Management",id:"resource-management",level:3},{value:"Software Engineering",id:"software-engineering",level:3},{value:"Frameworks &amp; Distributed Training",id:"frameworks--distributed-training",level:3},{value:"Experiment Management",id:"experiment-management",level:3},{value:"Hyperparameter Tuning",id:"hyperparameter-tuning",level:3},{value:"Deployment",id:"deployment",level:2},{value:"CI/Testing",id:"citesting",level:3},{value:"Edge",id:"edge",level:3},{value:"Appendix",id:"appendix",level:2},{value:"Julia Package",id:"julia-package",level:3},{value:"Useful Utility",id:"useful-utility",level:4},{value:"Database",id:"database-1",level:4},{value:"ML",id:"ml",level:4},{value:"ML Preprocessing",id:"ml-preprocessing",level:4},{value:"Multi-threading/Multi-processing/Distributed",id:"multi-threadingmulti-processingdistributed",level:4},{value:"Math/Statistic",id:"mathstatistic",level:4},{value:"Data table and manipulation",id:"data-table-and-manipulation",level:4},{value:"Data IO",id:"data-io",level:4},{value:"Notebook",id:"notebook",level:4},{value:"Visualization",id:"visualization",level:4},{value:"Text processing",id:"text-processing",level:4},{value:"Build in packages (standard library)",id:"build-in-packages-standard-library",level:4}],k={toc:s};function d(e){var t=e.components,o=(0,n.Z)(e,r);return(0,l.kt)("wrapper",(0,i.Z)({},k,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"infrastructure--tooling-for-julialang-ecosystem"},"Infrastructure & Tooling for Julialang Ecosystem"),(0,l.kt)("h2",{id:"the-big-picture"},"The Big Picture"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"infra&amp;tool",src:a(7451).Z,width:"1186",height:"689"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Taken from ",(0,l.kt)("strong",{parentName:"p"},"Full Stack Deep Learning Spring 2021"))),(0,l.kt)("p",null,"The figure mainly shows the infrastructure and tools used in the Python ecosystem, I will follow the same concept to collect the infrastructure and tools in the julia ecosystem."),(0,l.kt)("h2",{id:"data"},"Data"),(0,l.kt)("h3",{id:"sources"},"Sources"),(0,l.kt)("h4",{id:"filesystem"},"Filesystem"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"locally mounted disk"),(0,l.kt)("li",{parentName:"ul"},"networked (e.g. NFS)")),(0,l.kt)("h4",{id:"database"},"Database"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"PostgresQL"),(0,l.kt)("li",{parentName:"ul"},"SQLite"),(0,l.kt)("li",{parentName:"ul"},"InfluxDB: for time series"),(0,l.kt)("li",{parentName:"ul"},"QuestDB: for time series")),(0,l.kt)("h3",{id:"versioning"},"Versioning"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"DVC")),(0,l.kt)("p",null,"For more information on data version control in Julia, please refer to this discussion ",(0,l.kt)("a",{parentName:"p",href:"https://discourse.julialang.org/t/data-storage-loading-for-data-produced-by-algorithms-and-metadata/27029"},"thread")),(0,l.kt)("h3",{id:"exploration"},"Exploration"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"DataFrames.jl")),(0,l.kt)("h2",{id:"trainingevaluation"},"Training/Evaluation"),(0,l.kt)("h3",{id:"computing"},"Computing"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"desktop"),(0,l.kt)("li",{parentName:"ul"},"workstation")),(0,l.kt)("h3",{id:"resource-management"},"Resource Management"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Docker")),(0,l.kt)("h3",{id:"software-engineering"},"Software Engineering"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Julia v1.6.5, LTS release"),(0,l.kt)("li",{parentName:"ul"},"VSCode"),(0,l.kt)("li",{parentName:"ul"},"Jupyter Notebook"),(0,l.kt)("li",{parentName:"ul"},"Pluto Notebook"),(0,l.kt)("li",{parentName:"ul"},"git")),(0,l.kt)("h3",{id:"frameworks--distributed-training"},"Frameworks & Distributed Training"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/FluxML/Flux.jl"},"Flux.jl")," ecosystem"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/alan-turing-institute/MLJ.jl"},"MLJ.jl"))),(0,l.kt)("h3",{id:"experiment-management"},"Experiment Management"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/mkschleg/Reproduce.jl"},"Reproduce.jl")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/JuliaLogging/TensorBoardLogger.jl"},"TensorBoardLogger.jl"))),(0,l.kt)("h3",{id:"hyperparameter-tuning"},"Hyperparameter Tuning"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/baggepinnen/Hyperopt.jl"},"Hyperopt.jl")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/DrChainsaw/NaiveGAflux.jl"},"NaiveGAflux.jl"))),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://medium.com/analytics-vidhya/parallel-hyperparameter-tuning-in-julia-2eb17e756043"},"use case")," for using Hyperopt.jl"),(0,l.kt)("h2",{id:"deployment"},"Deployment"),(0,l.kt)("h3",{id:"citesting"},"CI/Testing"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GitHub Action")),(0,l.kt)("h3",{id:"edge"},"Edge"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ONNX.jl")),(0,l.kt)("h2",{id:"appendix"},"Appendix"),(0,l.kt)("h3",{id:"julia-package"},"Julia Package"),(0,l.kt)("h4",{id:"useful-utility"},"Useful Utility"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Revise")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Test")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ReTest")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PkgTemplates")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BenchmarkTools")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Chain"),": piping"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LoggingExtras"),": Composable Loggers for the Julia Logging StdLib"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Memento"),": A flexible logging library for Julia"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"JuliaFormatter")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DotEnv")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"ConfigEnv"),": loads environment variables from a .env file into ENV"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"WandbMacros")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"WeightsAndBiasLogger")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"Wandb"),": logging to weights and biases (Wandb) dashboard.")),(0,l.kt)("h4",{id:"database-1"},"Database"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LibPQ"),": LibPQ.jl is a Julia wrapper for the PostgreSQL libpq C library.")),(0,l.kt)("h4",{id:"ml"},"ML"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Flux"),": framework"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GeometricFlux"),": Geometric Deep Learning for Flux"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GraphNeuralNetworks")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"FluxArchitectures"),": Complex neural network examples for Flux.jl. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Transformer"),": Julia Implementation of Transformer models"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Metalhead"),": Computer vision models for Flux"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"MLJ"),": ML framework")),(0,l.kt)("h4",{id:"ml-preprocessing"},"ML Preprocessing"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Augmentor"),": A fast image augmentation library in Julia for machine learning."),(0,l.kt)("li",{parentName:"ul"},"MLDataUtils.jl"),(0,l.kt)("li",{parentName:"ul"},"MLUtils.jl")),(0,l.kt)("h4",{id:"multi-threadingmulti-processingdistributed"},"Multi-threading/Multi-processing/Distributed"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Dagger"),": A framework for out-of-core and parallel execution"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Polyester"))),(0,l.kt)("h4",{id:"mathstatistic"},"Math/Statistic"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GeoStats"),": An extensible framework for high-performance geostatistics in Julia."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"QuadGK")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Random")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Distributions")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LinearAlgebra")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"StatsBase")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Statistics")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DSP"))),(0,l.kt)("h4",{id:"data-table-and-manipulation"},"Data table and manipulation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DataFrames"),": In-memory tabular data in Julia"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Tables"),": An interface for tables in Julia"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"FeatureTransforms"),": Transformations for performing feature engineering in machine learning applications"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TableTransforms"),": Transforms and pipelines with tabular data"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Impute"),": Imputation methods for missing data in julia"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DataConvenience"),": Convenience functions missing in Julia"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Cleaner"),": A toolbox of simple solutions for common data cleaning problems.")),(0,l.kt)("h4",{id:"data-io"},"Data IO"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Arrow")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Parquet")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CSV")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"JSON3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BSON"))),(0,l.kt)("h4",{id:"notebook"},"Notebook"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"IJulia")),(0,l.kt)("li",{parentName:"ul"},"Pluto")),(0,l.kt)("h4",{id:"visualization"},"Visualization"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Plots"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Backends",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GR")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PlotlyJS"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"PlotlyBase")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PyPlot")))),(0,l.kt)("li",{parentName:"ul"},"Extensions",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"StatsPlots")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GraphRecipes")))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Makie"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Backends",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CairoMakie")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GLMakie"),"(need GPU)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"WGLMakie")))),(0,l.kt)("li",{parentName:"ul"},"Extensions",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"AlgebraOfGraphics")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GraphMakie")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GeoMakie")))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"VegaLite")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Gadfly")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Compose")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Colors")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ColorSchemes"))),(0,l.kt)("h4",{id:"text-processing"},"Text processing"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LaTeXStrings"))),(0,l.kt)("h4",{id:"build-in-packages-standard-library"},"Build in packages (standard library)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LinearAlgebra")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Statistics")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Markdown")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Printf"))))}d.isMDXComponent=!0},7451:function(e,t,a){t.Z=a.p+"assets/images/FSDL_infra&tool-3b6a428343e3e0007473eb8bdf627046.png"}}]);