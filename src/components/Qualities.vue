<template>
    <section id="qualities" class="text-light pt-5">
        <h1 class="text-center text-white display-4 text-uppercase mb-5">About</h1>
        
        <div class="container mb-5">
            <div class="row">
                <div class="col-sm-6 align-items-center justify-content-center">
                    <div class="row align-items-center justify-content-center">
                        <div class="profile-pic"></div>
                    </div>
                    <blockquote class="blockquote text-right mt-4">
                        
                        <p class="mb-0">1.01<sup>365</sup> = 37.8</p>
                        <p class="mb-0">0.99<sup>365</sup> = 0.03</p>
                        <footer class="blockquote-footer" style="color:#25282b;">A simple calculation</footer>
                    </blockquote>
                    <div class="row align-items-center justify-content-center">
                        <p class="text-center font-weight-bold h3 mt-2">Who's this guy?</p>
                        <p class="text-center font-weight-normal h5 mt-2">
                            I'm the Full Stack Developer from Toronto, ON.
                            I have serious passion for technology and innovation.
                            My experience ranges from Front End (utilizing React) to Back End (.NET and Node.js)
                            Currently, I am interested in Microservices and want to learn more about Docker and Kubernetes.
                            My goal is to become a DevOps engineer in the next five years.
                        </p>
                    </div>
                </div>
                <div class="col-md-6 align-items-center justify-content-center">
                    <highcharts :options="skills"></highcharts>
                </div>
            </div>
            
        </div>
       <div id="projects" class="container pb-5">
            <h3 class="text-center display-4 mb-5 text-uppercase text-white">Showcases</h3>
            <div class="row">
                <div v-for="(item, index) in items" :key="index" class="col-sm-6 mb-5">
                    <a :href="item.link">
                        <div v-bind:class="[item.image, 'project-logo']"></div>
                    </a>
                    <h2 class="text-white my-3 text-capitalize font-weight-bold">{{item.name}}</h2>
                    <p class="text-white">{{item.description}} <a v-if="item.projectLink" :href="item.projectLink" target="_blank" style="color:#12243a;">Show me more <i class="fas fa-arrow-right ml-2"></i></a> </p>
                    
                </div>
            </div>
        </div>
        <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" class="svgcolor-light">
            <path d="M0 0 L50 100 L100 0 Z" fill="#a2790d" stroke="#a2790d"></path>
        </svg>
    </section>
</template>
<script>
export default {
    data () {
        return {
            items: [
                {
                    image: "treasured", 
                    name: 'Treasure Card', 
                    description: 'Treasure Card is the result of my internship at Treasured Inc. located at Markham, ON. The product allows you to customize your own gift card for your loved ones',
                    link: 'https://treasured.ca/card/'
                },
                {
                    image: "stock-analyzer",
                    name: 'Stock Analyzer',
                    description: 'Stock Analyzer provides tools to predict stock in real-time using Deep Learning. It helps investors make better decisions in terms of investment.',
                    link: 'https://stock-analyzer-huydam.herokuapp.com/',
                    projectLink: 'https://drive.google.com/file/d/1uvlONIKypph9vTLHE6ltgEiFFXjIskQO/view'
                },
                {
                    image: "wknd",
                    name: 'WKND (upcoming in 2020)',
                    description: 'WKND User is one of the mobile application products of WKND Inc. which is an Australian startup that does event planning, ticket booking, and booth reservation.',
                    link: 'https://github.com/wkndcrw',
                },
            ],
            skills: {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie',
                    backgroundColor: null
                },
                title: {
                    text: null
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: false
                        },
                        showInLegend: true
                    }
                },
                credits: {
                    enabled: false
                },
                series: [{
                    name: 'Skills',
                    colorByPoint: true,
                    data: [{
                        name: 'React',
                        y: 20,
                        sliced: true,
                        selected: true
                    }, {
                        name: '.NET',
                        y: 15
                    }, {
                        name: 'Node.js',
                        y: 15
                    }, {
                        name: 'CSS/SASS/SCSS',
                        y: 10
                    }, {
                        name: 'NoSQL (MongoDB)',
                        y: 10
                    }, {
                        name: 'SQL Server',
                        y: 10
                    }, {
                        name: 'Docker',
                        y: 10
                    }, {
                        name: 'UI/UX',
                        y: 10
                    }]
                }]   
            }
        }
    }
}
</script>

<style lang="scss">
    .svgcolor-light{
        position: absolute;
       
    }
    .profile-pic {
        background-image: url("../assets/linkedin.png");
        width: 200px;
        height: 200px;
        border-radius: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
    }
    .project-logo {
        width: 100%;
        height: 300px;
        border-radius: 5px;
    }
    .treasured {
        background-image: url("../assets/treasurecard.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
    }
    .stock-analyzer {
        @extend .treasured;
        background-image: url("../assets/stockanalyzer.png");
        
    }
    .wknd{
        @extend .treasured;
        background-image: url("../assets/WKND.png");
    }
</style>