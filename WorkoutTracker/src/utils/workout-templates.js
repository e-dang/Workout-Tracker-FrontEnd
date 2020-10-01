export const getExerciseString = (exercise) => {
    let str = `${exercise.name} `;
    let workload;
    for (workload of exercise.workloads) {
        str = str.concat(`${workload.sets.length} sets`);
    }
    return str;
};
