Highcharts.chart('jouets', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Répartition des types de jouets par sexe'
    },
    xAxis: {
        categories: ['Beauté', 'Educatif et scientifique', 'Figurines et aventures', 'Jeux de construction', 'Jeux/jouets d\'imitation', 'Jeux pour la récré', 'Jouets collector', 'Jouets en bois', 'Musique', 'Peluches', 'Poupées', 'Puzzles', 'Véhicules et circuits'],
        
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Répartition (\%)'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'percent'
        }
    },
series: [{
        name: 'Filles',
        data: [333,46,871,191,208,204,4,19,51,243,1156,57,26], color:'#f748ea'

    }, {
        name: 'Garçons',
        data: [28,45,1010,706,24,205,0,73,1,75,6,17,1217], color:'#2eaaff'

    }, {
        name: 'Mixte',
        data: [63,465,1092,512,262,268,1,276,107,933,90,756,569], 
        color: '#FAE392'

    }]
});
