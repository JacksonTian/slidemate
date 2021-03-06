EDP lib - EDP基础库建设与维护
==========
## EDP基础库建设与维护
### 不四
## Why ?  
---
* 提升工作效率   
* 减少劣质模块引入的bug   

## How ?
---
* 内部模块质量保证
* 新版内部npm支持
* 各个项目组推动落地
* 基础库维护

## 内部模块质量保证   
---
* 完备的测试
* 注释与文档
* 持续优化

## 完备的测试  
---
* 覆盖率保证   
 * 95%+的覆盖率  
* 异常情况测试  
 * 内部异常的测试覆盖     
 * 外部依赖异常测试覆盖  
 * 网络情况异常测试覆盖   
 * ...
* 底层模块benchmark    
 * 如果是底层服务模块，最好附带性能测试报告   

## 注释与文档     
---
 * 完备的注释  
   * 降低模块接手人的维护成本       
   * 通过`dox` or `doxmate`进行文档的生成   
 * 健全的文档   
   * 方便使用者使用，提升使用效率  

## 持续优化     
---
 * 每个模块都有人负责   
 * 及时进行bug fix  

## 新版内部npm支持  
---
* 模块发布与审核机制   
* 模块更新检查  
        

## 发布与审核机制  
---
* 三方包同步需要提交申请  
 * 保证只有高质量三方包能够进入生产环境 
 * 减少有隐藏bug的*定时炸弹*  
* 二方包发布审核   
 * 内部开发模块必须通过npm-web平台发布   
 * 保证内部模块高质量  

## npm-web  
---
![npm-web](/images/edp_lib/npm_web.png)    
        
        
## 模块更新检查  
---
* 通过npm-web与Makefile管理模块更新通知
 * `npm-web`上设置模块是否必须更新    
 * `Makefile`中写入检查更新的项  


## 更新检查  
---
![notify](/images/edp_lib/notify.png)    
![check](/images/edp_lib/check.png)  

## 落地   
---
* 内部模块介绍推广  
* 用基础库里面的模块替换应用方实现  
* 应用方反哺基础库  


## 内部模块推广介绍  
---
* 内部分享形式  
 * show me the code   
 * ohter ...
* 项目技术负责人推广     


## 模块落地   
---
* 将应用内可以用模块替换的部分用内部模块替换  
 * redis => mredis  
 * itier => itierskin  
 * ... 


## 反哺基础库  
---
* 应用提取基础模块，供其他项目重用  
 * itierskin  
 * taobaosession  
 * lastdate  
 * ...   
* 解决项目碰到的难题，作为技术积累  
 * mredis  
 * node-hsf   
 * ...  

## 基础库维护  
---
* 每个模块有自己的负责人  
* 应用内模块使用者反馈    
* 基础库维护者保证响应速度  


## 模块维护者  
---
* 模块后续功能性开发与维护性开发  
* 迅速响应  


## 应用方使用者  
---
* 保证模块使用方式的正确性  
* 对使用到的模块进行反馈  
* 反哺基础库  

## 基础库维护者  
---
* 新版内部npm与npm-web功能开发完善  
* 推动基础库落地与反馈  
* 维护内部npm稳定运行  

## Target ?  
---
* 新版内部npm替换旧版   
 * 摒弃旧版npm，通过新版npm控制内部模块质量  
* 基础库内部各个应用完全落地  
 * 各应用全面通过基础库内模块提升效率  
* 基础库维护与质量保证  
 * 完善已有库的质量： 测试、文档   
 * 完善基础库发布标准   

## Resource ? 
---
* dev x 2 （兼职）
 * 最好是对现有项目或者基础模块有一定了解  

## Thanks
## Q & A