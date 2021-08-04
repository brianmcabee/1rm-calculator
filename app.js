const app = Vue.createApp({
    data() {
        return {
            unit_of_measurement: ['Pounds (lbs)', 'Kilograms (kg)'],
            selectedUnit: 'lbs',
            selectedReps: 0
        }

    }
});

app.mount('#app');