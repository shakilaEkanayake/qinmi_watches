<template>
    <div class="">
        <!-- Navigation -->
        <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div class="container">
                <a class="navbar-brand" href="#">Qinmi Smartwatches</a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item nav-link">
                            <a :class="{ active: index == 0 }" @click="moveTo(0)" class="nav-link" href="#">first page</a>
                        </li>
                        <li class="nav-item nav-link">
                            <a :class="{ active: index == 1 }" @click="moveTo(1)" class="nav-link" href="#">second page</a>
                        </li>
                        <li class="nav-item nav-link">
                            <a :class="{ active: index == 2 }" @click="moveTo(2)" class="nav-link" href="#">third page</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <!-- <div class="button-group"> -->
        <!-- <button type="button" class="disabled-btn" @click="setDisabled()">Disabled move</button> -->
        <!-- <button type="button" :class="{ active: index == 0 }" @click="moveTo(0)">first page</button> -->
        <!-- <button type="button" :class="{ active: index == 1 }" @click="moveTo(1)">Second page</button> -->
        <!-- <button type="button" :class="{ active: index == 2 }" @click="moveTo(2)">Third page</button> -->
        <!-- <button type="button" v-for="btn in pageNum" :class="{active:index == btn + 2}" @click="moveTo(btn+2)">page {{btn+2}}</button>
      <button type="button" @click="showPage()">add page</button> -->
        <!-- </div> -->

        <div class="fullpage-vertical">
            <div class="" v-fullpage="opts" ref="fullpage">
                <div class="page-1 page">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6 order-lg-2">
                                <div class="p-5">
                                    <div class="smartwatch smartwatch-1">
                                        <SmartWatch />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 order-lg-1">
                                <div class="p-5">
                                    <h2 class="display-4 title">The new normal...</h2>
                                    <a href="#" class="btn btn-primary btn-xl rounded-pill mt-5">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- <div>
                        <h1 class="part-1" v-animate="{ value: 'bounceInLeft' }">vue-fullpage.js</h1>
                        <h3 class="" v-animate="{ value: 'bounceInLeft' }">A sigle-page scroll plugin based on vue@2.x,support for mobile and PC .</h3>
                        <div>
                            <p class="part-1" v-animate="{ value: 'bounceInRight' }">vue-fullpage</p>
                        </div>
                    </div> -->

                    <!-- <div class="smartwatch smartwatch-1">
                        <SmartWatch />
                    </div> -->
                </div>
                <div class="page-2 page">
                    <div class="fullpage-horizontal">
                        <div v-fullpage="horizontalOpts" ref="fullpageHorizontal">
                            <div class="page-4 page">
                                <div class="container">
                                    <div class="col-lg-12 order-lg-12">
                                        <div class="p-5">
                                            <h2 class="display-4 title part-2" v-animate="{ value: 'bounceInRight' }">The new normal...</h2>
                                            <p class="part-2" v-animate="{ value: 'bounceInDown', delay: 600 }">Easy to use</p>

                                            <!-- <h1 class="masthead-heading mb-0">One Page Wonder</h1>
                                    <h2 class="masthead-subheading mb-0">Will Rock Your Socks Off</h2> -->
                                        </div>
                                    </div>
                                </div>

                                <!-- <div class="container">
                                    <div class="row align-items-center">
                                        <div class="col-lg-12 order-lg-12">
                                            <div class="p-5">
                                                <h2 class="display-4 title part-2" v-animate="{ value: 'bounceInRight' }">The new normal...</h2>
                                                <p class="part-2" v-animate="{ value: 'bounceInDown', delay: 600 }">Easy to use</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> -->

                                <!-- <h2 class="part-2" v-animate="{ value: 'bounceInRight' }">Easy to use plugin</h2>
                                <p v-animate="{ value: 'bounceInRight' }">nesting</p>
                                <p v-animate="{ value: 'bounceInRight' }">
                                    horizontal 1
                                </p> -->
                            </div>
                            <!-- <div class="page-5 page">
                                <p v-animate="{ value: 'bounceInDown' }">horizontal 2</p>
                            </div> -->
                        </div>
                        <!-- <div class="fullpage-pagination">
                            <div
                                class="fullpage-pagination-bullet"
                                v-for="(i, index) in [0, 1]"
                                :class="{ 'fullpage-pagination-bullet__active': active2 == index }"
                                :key="index"
                            ></div>
                        </div> -->
                    </div>
                </div>
                <div class="page-3 page">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-12 order-lg-12">
                                <div class="p-5">
                                    <h2 class="display-4 title part-3" v-animate="{ value: 'bounceInLeft' }">The new normal...</h2>
                                    <h3 class="" v-animate="{ value: 'bounceIn', delay: 300 }">
                                        Designed to fit different screen sizes as well as tablet and mobile devices.
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- <h2 class="part-3" v-animate="{ value: 'bounceInLeft' }">Working On Tablets</h2> -->
                    <!-- <h3 class="" v-animate="{ value: 'bounceIn', delay: 300 }">Designed to fit different screen sizes as well as tablet and mobile devices.</h3> -->
                    <!-- <p class="part-3" v-animate="{ value: 'bounceInLeft' }">vue-fullpage</p>
                    <p class="part-3" v-animate="{ value: 'bounceInRight', delay: 300 }">vue-fullpage</p>
                    <p class="part-3" v-animate="{ value: 'bounceInDown', delay: 600 }">vue-fullpage</p>
                    <p class="part-3" v-animate="{ value: 'zoomInDown', delay: 900 }">vue-fullpage</p> -->
                </div>
                <!-- <div class="page-2 page" v-for="page in pageNum" :key="page">
                    <h2 class="part-2" v-animate="{ value: 'bounceInRight' }">page {{ page }}</h2>
                </div> -->
            </div>
            <div class="fullpage-pagination">
                <div
                    class="fullpage-pagination-bullet"
                    v-for="(i, indx) in [0, 1, 2]"
                    :class="{ 'fullpage-pagination-bullet__active': index == indx }"
                    :key="indx"
                ></div>
            </div>
        </div>
    </div>
</template>

<script>
import SmartWatch from "./SmartWatch.vue";

export default {
    name: "FullPage",
    props: {
        msg: String,
    },
    components: {
        SmartWatch,
    },
    data: function() {
        var that = this;
        return {
            index: 0,
            pageNum: 0,
            disabled: false,
            opts: {
                start: 0,
                dir: "v",
                loop: false,
                duration: 300,
                beforeChange: function(ele, current, next) {
                    console.log("before", current, next);
                    that.index = next;
                },
                afterChange: function(ele, current) {
                    that.index = current;
                    console.log("after", current);
                },
            },
            horizontalOpts: {
                start: 0,
                dir: "h",
                loop: false,
                afterChange: function(ele, current) {
                    that.active2 = current;
                },
            },
            active2: 0,
        };
    },
    methods: {
        moveTo: function(index) {
            this.$refs.fullpage.$fullpage.moveTo(index, true, true);
        },
        showPage: function() {
            this.pageNum++;
            this.$refs.fullpage.$fullpage.$update();
        },
        setDisabled() {
            this.disabled = !this.disabled;
            this.$refs.fullpage.$fullpage.setDisabled(this.disabled);
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style media="screen" scoped>
@import "../animate.css";
@import "../fullpage.css";

body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #f15946;
    transition: 0.4s ease-in-out;
}

.nav-brand {
    font-weight: 900;
    letter-spacing: 2px;
    color: #fff;
}

.page {
    display: block;
    text-align: center;
    font-size: 26px;
    color: #eee;
}

.page .title {
    font-size: 5rem;
    text-align: center;
    width: 100%;
    margin: 0 auto;
    color: #fff;
    font-weight: bold;
}
.page-1 {
    padding-top: 100px;
    width: 100%;
    height: 100%;
    background: #1bbc9b;
    background-image: url("~@/assets/1.jpg");
}

.page-2 {
    width: 100%;
    height: 100%;
    background-color: rgb(75, 191, 195);
    background-image: url("~@/assets/2.jpg");
}

.page-3 {
    width: 100%;
    height: 100%;
    padding-top: 100px;
    background: #aabbcc;
    background-image: url("~@/assets/3.jpg");
}

h3,
p {
    font-size: 16px;
}

.button-group {
    position: absolute;
    top: 30px;
    left: 30px;
    z-index: 9;
}

.button-group button {
    display: inline-block;
    margin: 10px;
    color: #000;
    background: #fff;
    background: rgba(255, 255, 255, 0.5);
    -webkit-border-radius: 10px;
    border-radius: 10px;
    padding: 9px 18px;
    border: none;
    outline: none;
}
.fullpage-horizontal,
.fullpage-vertical {
    position: absolute;
    width: 100%;
    height: 100%;
}

.fullpage-pagination-bullet {
    margin: 0 6px;
    display: block;
    cursor: pointer;
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background: #000;
    opacity: 0.2;
}

.fullpage-pagination-bullet__active {
    background: #1bbc9b;
    opacity: 1;
}

.fullpage-horizontal > .fullpage-pagination {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%, 0);
}

.fullpage-vertical > .fullpage-pagination {
    position: fixed;
    right: 20px;
    top: 50%;
    transform: translate(0, -50%);
    display: flex;
    flex-flow: column;
}

.fullpage-vertical > .fullpage-pagination > .fullpage-pagination-bullet {
    margin: 6px 0;
}

.fullpage-vertical > .fullpage-pagination > .fullpage-pagination-bullet__active {
    background: #4d7cfe;
}

.button-group button.active {
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
}
button.disabled-btn {
    background: red;
    color: #fff;
}
</style>
