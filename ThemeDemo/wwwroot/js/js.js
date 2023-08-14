var ctx = document.getElementById('horizontalBarChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2023', '2022', '2021', '2020', '2019'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        },
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        },
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y',
        scales: {
            x: {
                beginAtZero: true
            }
        }
    }
});


var ctx1 = document.getElementById('barChart3D').getContext('2d');
new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4'], // Các nhãn cho cột
        datasets: [{
            label: '# of Votes',
            data: [1, 4, 3, 5], // Dữ liệu cho cột

            borderWidth: 1
        }]
    },
    options: {
        scales: {
            x: {
                beginAtZero: true
            }
        }
    }
});

