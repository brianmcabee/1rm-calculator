const app = Vue.createApp({
    data() {
        return {
            unit_of_measurement: ['Pounds (lbs)', 'Kilograms (kg)'],
            selectedUnit: 'lbs',
            enteredWeight: 0,
            selectedReps: 0,
        }

    },
    computed: {
        calculatedOneRepMax() {
            var reps = Number(this.selectedReps);
            var weight = Number(this.enteredWeight);

            // multiple for 1 rep, 2 rep, 3 rep, etc...
            // source https://barbend.com/build-your-1-rep-max-calculator/
            const rm_multiplier = [1.0, 1.05, 1.08, 1.11, 1.15,
                1.18, 1.20, 1.25, 1.3, 1.33
            ];

            if (reps === 0 || weight === 0) {
                return ''
            } else {
                return Math.round(weight * rm_multiplier[reps - 1]) + this.selectedUnit;
            }
        }
    },
    methods: {
        setWeight(event) {
            this.enteredWeight = event.target.value;
        }
    }


});

app.mount('#app');