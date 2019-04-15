Highcharts.chart('hcviol1', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Violences physiques et sexuelles subies par les femmes'
    },
    subtitle: {
        text: 'Au sein du ménage, moyenne annuelle'
    },
    xAxis: {
        categories: ['2006-2010', '2011-2017']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Part des violences physiques et sexuelles'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'normal'
        }
    },
    series: [{
         name: 'Violences physiques',
        data: [239400,	204350], color: '#08298A' 
    }, {
        name: 'Violences sexuelles',
        data: [58100, 46900], color: '#FAE392' 
    }]
});
