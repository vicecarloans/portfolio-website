<template>
    <section id="banner">
        <div
        id="particle-js"
        />
        <div class="container">
            <div class="row align-items-center height-100">
                
                <div class="col-md-12 text-center">
                    <h1 class="text-white text-white text-uppercase mb-1 font-weight-bold display-4">Huy Dam</h1>
                    <h3 class="text-white text-white text-uppercase mb-4 font-weight-bold">Front End/Full Stack Developer</h3>
                    <a href="https://github.com/vicecarloans/" target="_blank" class="bx--btn bx--btn--secondary text-uppercase p-2 intro-size"><i class="fab fa-github mr-2"></i>github</a>

                    <a href="https://www.linkedin.com/in/vicecarloans/" target="_blank" class="bx--btn bx--btn--secondary text-uppercase p-2 ml-2 intro-size"><i class="fab fa-linkedin mr-2"></i>linkedin</a>
                    
                    <a href="https://drive.google.com/file/d/1QkI7lhxS06bk9cu9mcCp31hT8dPufBnR/view?usp=sharing" target="_blank" class="bx--btn bx--btn--secondary text-uppercase p-2 ml-2 intro-size"><i class="far fa-file mr-2"></i>resume</a>

                </div>
            </div>
        </div>
    </section>
</template>

<script>
    require("particles.js/particles");
    window.particlesJS.load("particle-js", "particles-config.json");
</script>

<style lang="scss">
    #particle-js {
        position: absolute;
        zIndex: 0;
        height: 100%;
        width: 100%;
    }
</style>