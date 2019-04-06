// 基于准备好的dom，初始化echarts实例
var eChart_1 = echarts.init(document.querySelector('.echarts-1'))

// 指定图表的配置项和数据
var option1 = {
    title: {
        text: '2018.11-2019.4注册人数'
    },
    //提示框组件
    tooltip: {},
    //图例
    legend: {
        data:['人数']
    },
    //X轴
    xAxis: {
        data: ["11月","12月","1月","2月","3月","4月"]
    },
    //Y轴,根据数据自动生成比较合适
    yAxis: {},
    //数据
    series: [{
        name: '人数',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};

// 使用刚指定的配置项和数据显示图表。
eChart_1.setOption(option1);



// 基于准备好的dom，初始化echarts实例
var eChart_2 = echarts.init(document.querySelector('.echarts-2'))

// 指定图表的配置项和数据
var option2 = {
    title : {
        text: '热门网游',
        subtext: '2019.4',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['英雄联盟','dota2','梦幻西游','我的世界','逆水寒','魔兽世界','穿越火线']
    },
    series : [
        {
            name: '网游',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:19466, name:'英雄联盟'},
                {value:16522, name:'dota2'},
                {value:12526, name:'梦幻西游'},
                {value:9925, name:'我的世界'},
                {value:8956, name:'逆水寒'},
                {value:8625, name:'魔兽世界'},
                {value:8125, name:'穿越火线'},

            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};


// 使用刚指定的配置项和数据显示图表。
eChart_2.setOption(option2);