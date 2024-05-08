var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Inglês', 'Illustrator', 'Photoshop', 'InDesign', 'CorelDraw', 'Dreamweaver', '3D Studio', 'SaaS', 'HTML/CSS', 'JavaScript', 'PHP', 'WordPress'],
        datasets: [{
            label: 'HABILITAÇÕES TÉCNICAS',
            data: [12, 19, 3, 5, 2, 3, 8, 15, 20, 10, 18, 16],
            backgroundColor: [
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(104, 132, 245, 0.6)',
                'rgba(154, 162, 235, 0.6)',
                'rgba(204, 192, 255, 0.6)',
                'rgba(255, 162, 235, 0.6)',
                'rgba(205, 92, 192, 0.6)',
                'rgba(255, 102, 255, 0.6)'
            ],
            borderColor: [
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(104, 132, 245, 1)',
                'rgba(154, 162, 235, 1)',
                'rgba(204, 192, 255, 1)',
                'rgba(255, 162, 235, 1)',
                'rgba(205, 92, 192, 1)',
                'rgba(255, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        animation: {
            duration: 2000 // general animation time
        },
        hover: {
            animationDuration: 400 // duration of animations when hovering an item
        },
        responsiveAnimationDuration: 500 // animation duration after a resize
    }
});
