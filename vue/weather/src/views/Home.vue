<template>
    <div class="container">
        <div class="nav">
            <div class="time">{{ now }}</div>
            <div class="city">切换城市</div>
        </div>

        <div class="city-info">
            <p class="city">{{ state.today.city }}</p>
            <p class="weather">{{ state.today.weather }}</p>
            <h2 class="temp">
                <em>{{ state.today.temperature }}</em>℃
            </h2>
            <div class="deteil">
                <span>风力: {{ state.today.windPower }}级</span> |
                <span>风向: {{ state.today.windDirection}}</span> |
                <span>空气湿度: {{ state.today.humidity}}%</span>
            </div>
        </div>

        <div class="future" v-if="state.future.length">
            <div class="group">
                明天：
                <span class="tm">白天:{{ state.future[1].dayTemp }}℃ {{ state.future[1].dayWeather }} {{ state.future[1].dayWindDir }}风 {{ state.future[1].dayWindPower }}</span> |
                <span class="tm">夜间:{{ state.future[1].nightTemp }}℃ {{ state.future[1].nightWeather }} {{ state.future[1].nightWindDir }}风 {{ state.future[1].nightWindPower }}</span>
            </div>
            <div class="group">
                后天：
                <span class="tm">白天:{{ state.future[2].dayTemp }}℃ {{ state.future[2].dayWeather }} {{ state.future[2].dayWindDir }}风 {{ state.future[2].dayWindPower }}</span> |
                <span class="tm">夜间:{{ state.future[2].nightTemp }}℃ {{ state.future[2].nightWeather }} {{ state.future[2].nightWindDir }}风 {{ state.future[2].nightWindPower }}</span>
            </div>
        </div>


    </div>
</template>

<script setup>
import { onBeforeMount, onMounted, reactive, ref } from 'vue';

const state = reactive({
    today: {},
    future: []
})

const now = ref('00:00:00')
setInterval(() => {
    now.value = new Date().toLocaleTimeString()
}, 1000);

// 获取定位
onMounted(() => {
    AMap.plugin('AMap.CitySearch', function () {
        var citySearch = new AMap.CitySearch()
        citySearch.getLocalCity(function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
                // 查询成功，result即为当前所在城市信息
                //   console.log(result.city);
                getWeather(result.city)
            }
        })
    })
})

const getWeather = (city) => {
    //加载天气查询插件
    AMap.plugin("AMap.Weather", function () {
        //创建天气查询实例
        var weather = new AMap.Weather();
        //执行实时天气信息查询
        weather.getLive(city, function (err, data) {
            console.log(err, data);
            //err 正确时返回 null
            //data 返回实时天气数据，返回数据见下表
            // console.log(data);
            state.today = data
        });

        //天气预报
        weather.getForecast(city, function (err, data) {
        console.log(err, data);
        //err 正确时返回 null
        //data 返回天气预报数据，返回数据见下表
        state.future = data.forecasts
  });
    });
}

</script>

<style lang="less" scoped>
.container {
    min-height: 100vh;
    background-color: #000;
    opacity: 0.5;
    color: aliceblue;

    .nav {
        padding: 10px;
        display: flex;
        justify-content: space-between;
    }

    .city-info {
        text-align: center;

        p {
            margin-top: 10px;
        }

        .temp {
            font-size: 26px;
            margin: 10px 0;

            em {
                font-size: 34px;
            }
        }
    }

    .future {
        padding: 0 10px;
        margin-top: 30px;

        .group {
            height: 44px;
            line-height: 44px;
            background-color: rgba(255, 255, 255, 0.2);
            margin-bottom: 10px;
            font-size: 13px;
            text-align: center;
            border-radius: 5px;
        }
    }
}
</style>