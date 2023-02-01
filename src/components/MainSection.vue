<template>
    <section>
        <div class="header-wrapper">
            <div class="header-wrapper_task">
                Задача 3
            </div>
            <div class="svg">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px"
                    viewBox="0 0 431.972 431.972" style="enable-background:new 0 0 431.972 431.972;"
                    xml:space="preserve" @click="fillBookmark">

                    <path d="M393.146,14.279c-3.713-5.333-8.713-9.233-14.989-11.707c-3.997-1.711-8.186-2.568-12.565-2.568V0H66.378
		c-4.377,0-8.562,0.857-12.56,2.568c-6.28,2.472-11.278,6.377-14.989,11.707c-3.71,5.33-5.568,11.228-5.568,17.701v368.019
		c0,6.475,1.858,12.371,5.568,17.706c3.711,5.329,8.709,9.233,14.989,11.704c3.994,1.711,8.183,2.566,12.56,2.566
		c8.949,0,16.844-3.142,23.698-9.418l125.91-121.062l125.91,121.065c6.663,6.081,14.562,9.127,23.695,9.127
		c4.76,0,8.948-0.756,12.565-2.279c6.276-2.471,11.276-6.375,14.989-11.711c3.71-5.328,5.564-11.225,5.564-17.699V31.98
		C398.71,25.507,396.852,19.609,393.146,14.279z" :class="{ filled: filled }" fill="#272E49" stroke="#715570"
                        stroke-width="50" />
                </svg>
            </div>

            <div class="header-wrapper_name">
                Олимпиада Физтех <br>11 класс, 2019 год
            </div>
        </div>
    </section>

    <section>
        <div class="middle-wrapper">
            <div class="middle-wrapper_task">
                В электрической цепи (ref) все эелменты идеальные, их параметры указаны.
                Ключ К замыкают.
                <ol>
                    <li>
                        Найти напряжение на катушке индуктивности сразу после замыкая ключа.
                    </li>
                    <li>
                        Найти максимальную скорость изменения энергии Nₘ в катушке индуктивности.
                    </li>
                    <li>
                        Найти скорость изменения тока в цепив момент, когда скорость изменения энергии в катушке равна
                        24/49 от максимальной скорости Nₘ.
                    </li>
                </ol>
            </div>
            <div :class="[isActive ? 'middle-wrapper_img' : 'middle-wrapper_img_toogle']">
                <img class="task-img" src="../assets/img/task.png" alt="">
                <button @click="dialogState = true" class="middle-wrapper_button"><img src="../assets/img/lupa.svg"
                        alt=""></button>
                <GDialog v-model="dialogState" max-width="900">
                    <img class="task-img_modal" src="../assets/img/task.png" alt="" style="background-color: white;">
                    <button @click="dialogState = false"
                        class="button close bottom-wrapper_input_btnClose_mobile">X</button>
                </GDialog>
                <button @click="toggleClass" class="middle-wrapper_button"><img src="../assets/img/none.svg"
                        alt=""></button>
            </div>
        </div>
    </section>

    <section>
        <div class="bottom-wrapper columns">
            <div class="bottom-wrapper_solving column is-6">

                <div class="columns is-mobile solving-mobile">
                    <div class="column is-1">
                        1.
                    </div>
                    <div class="column is-1 symbol">
                        U₀
                    </div>
                    <div class="column is-2">
                        =
                    </div>
                    <div class="column is-2">
                        <input class="bottom-wrapper_input" placeholder="0" type="text" name="" id="" v-model="form1"
                            ref="form1">
                    </div>
                    <div class="column is-2">
                        <img class="keyboard" src="../assets/img/keyboard.svg" alt="">
                    </div>
                    <div class="column is-2">
                        <button @click="checkForm(1)" class="bottom-wrapper_button button is-dark is-small">✓
                            Проверить</button>
                    </div>
                </div>
                <div class="bottom-wrapper_line"></div>

                <div class="columns is-mobile solving-margin solving-mobile">
                    <div class="column is-1">
                        2.
                    </div>
                    <div class="column is-1 symbol">
                        Nₘ
                    </div>
                    <div class="column is-2">
                        =
                    </div>
                    <div class="column is-2">
                        <input class="bottom-wrapper_input" placeholder="0" type="text" name="" id="" v-model="form2"
                            ref="form2">
                    </div>
                    <div class="column is-2">
                        <img class="keyboard" src="../assets/img/keyboard.svg" alt="">
                    </div>
                    <div class="column is-2">
                        <button @click="checkForm(2)" class="bottom-wrapper_button button is-dark is-small">✓
                            Проверить</button>
                    </div>
                </div>
                <div class="bottom-wrapper_line"></div>
                <div class="columns is-mobile solving-margin solving-mobile">
                    <div class="column is-1">
                        3.
                    </div>
                    <div class="column is-1 symbol">
                        I¹
                    </div>
                    <div class="column is-2">
                        =
                    </div>
                    <div class="column is-2">
                        <input class="bottom-wrapper_input" placeholder="0" type="text" name="" id="" v-model="form3"
                            ref="form3">
                    </div>
                    <div class="column is-2">
                        <img class="keyboard" src="../assets/img/keyboard.svg" alt="">
                    </div>
                    <div class="column is-2">
                        <button @click="checkForm(3)" class="bottom-wrapper_button button is-dark is-small">✓
                            Проверить</button>
                    </div>
                </div>
                <div class="bottom-wrapper_line"></div>
                <GDialog v-model="dialogForm" max-width="500">
                    <div class="wrapper">
                        <div class="content">
                            <p>
                                Все верно!
                            </p>
                            <p>
                                Молодец, ты лучший!
                            </p>
                        </div>
                        <button class="button is-success bottom-wrapper_button-next">Дальше</button>
                        <button @click="dialogForm = false"
                            class="button close bottom-wrapper_input_btnClose bottom-wrapper_input_btnClose_mobile_succes">X</button>
                    </div>
                </GDialog>

            </div>
            <div class="bottom-wrapper_file column is-6">
                <button class="button" @click="upload">
                    Выбрать файл
                </button>
                <img :src="imageSrc" class="imgSrc" min-height="50px" alt="" v-if="imageSrc" />
                <input ref="fileInput" type="file" style="display: none" accept="image/*" @change="onFileChange" />
            </div>
        </div>
    </section>

    <section>
        <div class="button-wrapper">
            <button class="button-wrapper_btn button-wrapper_button-DN">я хз что делать</button>
            <button @click="answerForm = true" class="button-wrapper_btn button-wrapper_button-answer"> <span
                    class="button-answer_x">x = </span>Посмотреть ответ</button>
            <GDialog v-model="answerForm" max-width="700">
                <div class="wrapper">
                    <div class="content">
                        <img class="task-img_modal" src="../assets/img/answer.svg" alt="">
                        <button @click="solvingForm = true" class="button-wrapper_btn button-wrapper_button-answer">
                            <span class="button-answer_x">x = </span>Посмотреть решение</button>
                        <button @click="answerForm = false"
                            class="button close bottom-wrapper_input_btnClose">X</button>
                    </div>
                </div>
                <GDialog v-model="solvingForm" max-width="700">
                    <div class="wrapper">
                        <div class="content">
                            <img class="task-img_modal" src="../assets/img/solving.png" alt=""
                                style="background-color: white;">
                            <button @click="solvingForm = false" class="button close ">X</button>
                        </div>
                    </div>
                </GDialog>
            </GDialog>
            <button class="button-wrapper_btn button-wrapper_button-next">Дальше</button>
        </div>
    </section>

</template>

<script>
import { GDialog } from 'gitart-vue-dialog'
export default {
    components: {
        GDialog
    },
    data() {
        return {
            filled: false,
            dialogState: false,
            dialogForm: false,
            answerForm: false,
            solvingForm: false,
            isActive: true,
            image: null,
            imageSrc: "",
            form1: '',
            form2: '',
            form3: ''
        }
    },
    methods: {
        fillBookmark() {
            this.filled = !this.filled;
        },
        toggleClass() {
            this.isActive = !this.isActive;
        },
        upload() {
            this.$refs.fileInput.click();
        },
        onFileChange(event) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                this.imageSrc = reader.result;
            };
            reader.readAsDataURL(file);
            this.image = file;
        },
        checkForm(formNum) {
            if (this[`form${formNum}`] === '10') {
                this.$refs[`form${formNum}`].style.border = '2px solid lightgreen';
            } else {
                this.$refs[`form${formNum}`].style.border = '2px solid red';
            }

            if (this.form1 === '10' && this.form2 === '10' && this.form3 === '10') {
                this.dialogForm = true
            }
        }
    }

}

</script>

<style>
.filled {
    transition: all .2s ease;
    fill: #715570;
}

.wrapper {
    text-align: center;
    font-size: 25px;
    color: lightgreen;
    padding: 30px;
    font-weight: 900;
}

.g-dialog-content {
    --content-bg: var(--g-dialog-content-bg, rgba(123, 123, 123, 0.63)) !important;

}

.bottom-wrapper_input_btnClose {
    margin-left: 270px !important;
    margin-top: -180px !important;
}
</style>