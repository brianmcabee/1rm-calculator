const app = Vue.createApp({
    data() {
        return {
            unit_of_measurement: ['Pounds (lbs)', 'Kilograms (kg)'],
            selectedUnit: 'lbs',
            enteredWeight: 0,
            selectedReps: 0,
            oneRepMax: 0
        }

    },
    methods: {
        setWeight(event) {
            this.enteredWeight = event.target.value;
        },

        calculateOneRepMax(weight,reps) {
            var reps = Number(reps);
            var weight = Number(weight);
            
            // multiple for 1 rep, 2 rep, 3 rep, etc...
            // source https://barbend.com/build-your-1-rep-max-calculator/
            const rm_multiplier = [1.0, 1.05, 1.08, 1.11, 1.15,
                                   1.18, 1.20, 1.25, 1.3, 1.33];

            if (weight === 0) {
                alert("Error. No weight entered");
            } else if (reps === 0) {
                alert("Error. Enter number of reps completed");
            }
            else {
                // calculate 1 rep max
                if (reps === 1) {
                    this.oneRepMax = weight;
                } else {
                    this.oneRepMax = Math.round(weight * rm_multiplier[reps - 1]);
                }
                
            }
            
                
        }

    }

    
});

app.mount('#app');