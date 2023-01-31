<template>
    <div class="text-wrapper">
        <div class="text-wrapper_olymp">
            Олимпиада Физтех
        </div>
        <div class="text-wrapper_level">
            Олимпиада первого уровня, к которой просто подготовиться
        </div>
    </div>
    <div class="pick-wrapper">
        <div class="pick-task">Выбрать задачу</div>
        <div class="pick-wrapper_class">
            <input type="radio" name="program" value="9" id="9-value" class="radio-hidden" checked>
            <label for="9-value" class="radio-label">9</label>
            <input type="radio" name="program" value="10" id="10-value" class="radio-hidden">
            <label for="10-value" class="radio-label">10</label>
            <input type="radio" name="program" value="11" id="11-value" class="radio-hidden">
            <label for="11-value" class="radio-label">11</label>
            <div class="animation start-home"></div>

        </div>
        
        <div class="pick-wrapper_year">
            <span class="arrow swiper-button-disabled">❮</span>

            <swiper
                :initialSlide = 4
                :modules="modules"
                class="mySwiper"
                :navigation="{
                    nextEl: '.arrow-last',
                 prevEl: '.arrow'
                 }"
                :slidesPerView = 1
                :disabledClass = swiper-button-disabled
            >
            

            <swiper-slide>
                    <div class="year year-last">
                <input type="radio" name="year" value="2010" id="2010-value" class="radio-hidden2">
                <label for="2010-value" class="radio-label2">2010</label>
                <input type="radio" name="year" value="2011" id="2011-value" class="radio-hidden2">
                <label for="2011-value" class="radio-label2">2011</label>
            </div>
        </swiper-slide>
        <swiper-slide> 
                    <div class="year">
                <input type="radio" name="year" value="2012" id="2012-value" class="radio-hidden2">
                <label for="2012-value" class="radio-label2">2012</label>
                <input type="radio" name="year" value="2013" id="2013-value" class="radio-hidden2">
                <label for="2013-value" class="radio-label2">2013</label>
            </div>
        </swiper-slide>
                <swiper-slide>
                    <div class="year">
                <input type="radio" name="year" value="2014" id="2014-value" class="radio-hidden2">
                <label for="2014-value" class="radio-label2">2014</label>
                <input type="radio" name="year" value="2015" id="2015-value" class="radio-hidden2">
                <label for="2015-value" class="radio-label2">2015</label>
            </div>
            </swiper-slide>
            <swiper-slide>
                    <div class="year">
                <input type="radio" name="year" value="2016" id="2016-value" class="radio-hidden2">
                <label for="2016-value" class="radio-label2">2016</label>
                <input type="radio" name="year" value="2019" id="2019-value" class="radio-hidden2">
                <label for="2019-value" class="radio-label2">2019</label>
            </div>
        </swiper-slide>
                
    </swiper>
    <span class="arrow-last swiper-button-disabled">❯</span>


        </div>
        <div class="pick-wrapper_task">
            <input type="radio" name="program3" value="1" id="1-value" class="radio-hidden3">
            <label for="1-value" class="radio-label3">1</label>
            <input type="radio" name="program3" value="2" id="2-value" class="radio-hidden3">
            <label for="2-value" class="radio-label3">2</label>
            <input type="radio" name="program3" value="3" id="3-value" class="radio-hidden3">
            <label for="3-value" class="radio-label3">3</label>
            <input type="radio" name="program3" value="4" id="4-value" class="radio-hidden3">
            <label for="4-value" class="radio-label3">4</label>
            <input type="radio" name="program3" value="5" id="5-value" class="radio-hidden3">
            <label for="5-value" class="radio-label3">5</label>
            
        </div>
    </div>

</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from "swiper";
import 'swiper/css';

export default {
    components: {
      Swiper,
      SwiperSlide,
    },

    data(){
        return {
            modules: [ Navigation]
        }
    }
}

</script>

<style>

</style>