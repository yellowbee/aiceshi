<template>
    <div class="root">
        <img class="logo" alt="Vue logo" src="../assets/logo.svg">
        <div>
            <img class="hero" src="../assets/hero-1.png"/>
            <div>
                <div class="h1">让创业者第一时间收获用户的反馈</div>
                <mt-button class="blue-btn" type="primary">我想收获反馈</mt-button>
            </div>
        </div>
        <div>
            <img class="hero" src="../assets/hero-2.png"/>
            <div class="testee-hero">
                <div class="h1">让测试志愿者体验最新，最酷的产品，并赚取佣金</div>
                <mt-button class="yellow-btn" type="primary">我想参与测试</mt-button>
            </div>
        </div>
        <div class="owner">
            <div class="flex-container">
                <div style="width: 30%"><img class="sm-hero" src="../assets/hero-1.png"/></div>
                <div style="width: 70%; padding: 0.5em 2em">
                    <p style="margin: 0.5em 0" class="bold">产品所有者</p>
                    <div class="h4">
                        作为产品所有者，您可以利用如下功能优化产品战略，提高用户体验，或优化您的MVP(最小化可行性产品)。
                    </div>
                </div>
            </div>
            <div class="feature-desc">
                <div style="margin: 1em 0" class="bold">在线匹配用户</div>
                <div class="h5">我们拥有分类齐全，档案精确，且不断拓展的用户库供您联系目标用户并展开测试。</div>
                <mt-button class="red-btn" type="primary">了解更多 </mt-button>
            </div>
            <img class="hero-content" src="../assets/zai-xian-pi-pei-01.png"/>
            <div class="feature-desc">
                <div style="margin: 1em 0" class="bold">在线访谈工具</div>
                <div class="h5">在线访谈工具能够让您
                和测试者匹配最合适的时间进行线上交流，打破空间限制。</div>
                <mt-button class="red-btn" type="primary">了解更多 </mt-button>
            </div>
            <img class="hero-content" src="../assets/zai-xian-pi-pei-02.png"/>
            <div class="feature-desc">
                <div style="margin: 1em 0" class="bold">智能测试工具</div>
                <div class="h5">智能测试工具让您随时发布测试任务, 随时查看测试者的录屏反馈,最大程度节约您的时间和精力。</div>
                <mt-button class="red-btn" type="primary">了解更多 </mt-button>
            </div>
            <img class="hero-content" src="../assets/zhineng_ceshi_tool.png"/>
        </div>
        <div class="testee">
            <div class="flex-container">
                <div style="width: 30%"><img class="sm-hero" src="../assets/hero-2.png"/></div>
                <div style="width: 70%; padding: 1em 1em">
                    <p style="margin: 1em 0" class="bold">测试志愿者</p>
                    <div class="h4">
                        作为测试志愿者可以获得如下体验:
                    </div>
                </div>
            </div>
            <div class="feature-desc">
                <div style="margin: 1em 0" class="bold">获取佣金</div>
                <div class="h5">您的贡献可以直接转化为现金奖励,每半个小时的测试您将获得至少50元酬劳。</div>
                <mt-button class="red-btn" type="primary">了解更多 </mt-button>
            </div>
            <img class="hero-content" src="../assets/huoqu-yongjin.png"/>
            <div class="feature-desc">
                <div style="margin: 1em 0" class="bold">分享获得奖金提成</div>
                <div class="h5">分享爱测试app给您的朋友，
                朋友赚取佣金的同时，
                您也可以获取奖金提成。</div>
                <mt-button class="red-btn" type="primary">了解更多 </mt-button>
            </div>
            <img class="hero-content" src="../assets/fenxiang_ticheng.png"/>
        </div>
        <img class="workflow" src="../assets/workflow.png"/>
        <img class="hero-content" style="padding-bottom: 0px;" src="../assets/qr-code-qiye.png"/>
        <img class="split" src="../assets/split.png"/>
        <img class="hero-content" style="padding-top: 0px;" src="../assets/qr-code-geren.png"/>
         <div class="footer">
         Copyright © 2019 Aiceshi Inc. All rights reserved. 
        </div>
    </div>
</template>

<script>
    export default {
        name: "LandingPage"
    }
</script>

<style scoped>
    .root {
        width: 100%;
    }

    img.logo {
        display: block;
        width: 90%;
        margin: 1em auto 2em auto;
    }

    img.hero {
        display: block;
        width: 50%;
        margin: 20px auto;
    }
    img.sm-hero {
        width: 100%;
        margin: 0 10%;
    }

    img.hero-content {
    width: 100%
    }
    
    div.desc {
        width: 90%;
        margin: 0 auto;
        text-align: center;
    }

    button {
        display: block;
        font-size: 14px;
        line-height: 20px;
        border: none;
        width: 10em;
        padding: 1em 0;
        margin: 1em auto;
        border-radius:25px;
    }

    .blue-btn {
        background-color: #44cbbf;
        color: white;
        
    }
    .yellow-btn {
        background-color: #fff100;
        color: black;
    }
    .red-btn {
        background-color: red;
        color: white;
        margin-right:10px;
    }

    .flex-container {
        display: flex;
    }

    .owner {
        background-color: #e8f4f3;
        margin-bottom: -1em;
        padding: 2em 0;
    }

    .feature-desc {
        text-align: right;
        padding: 1em 1em;
    }

    .bold {
        font-weight: 500;
        color:#0E0B4B;
    }

    .testee {
        background-color: #f3f1ea;
        margin: 0;
        padding: 2em 0;
    }
    
    .h1{
    color:#0E0B4B;
    font-size: 16px;
    line-height: 24px;
    margin: 20px 10%;
    font-weight: 500;
    text-align:center;
    }

    .h4{
        font-size: 14px;
        line-height: 20px;
         color:#0E0B4B;
    }

    .h5{
        font-size: 14px;
        line-height: 20px;
        width:100%;
        text-align:right;
        padding: 0 0 0 60px;
        color:#0E0B4B;
    }
    
   .testee-hero{
    margin-bottom: 2em;
   
    }
    .workflow{
    margin-top:2em;
    width: 100%
    }
    
    .split{
    margin-top:-1em;
    margin-bottom:-1em;
    width:100%;
    }
    
    .footer{
    font-size: 12px;
        line-height: 20px;
        width:100%;
        text-align:center;
        margin:20px auto;
        padding: 10px auto;
        color:#0E0B4B;
    }

</style>