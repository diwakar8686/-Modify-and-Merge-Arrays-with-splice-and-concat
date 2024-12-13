function modifyAndMerge(arr1, arr2) {
    const arr1Copy = [...arr1];
    const arr2Copy = [...arr2];
    const bikeIndex = arr1Copy.indexOf("bike");
    if (bikeIndex !== -1) {
        arr1Copy.splice(bikeIndex, 1, "bus", "scooter");
    }
    const mergedArray = arr1Copy.concat(arr2Copy);
    return mergedArray;
}
const arr1 = ["car", "bike", "train"];
const arr2 = ["plane", "ship"];
const result = modifyAndMerge(arr1, arr2);
console.log("Merged Array:", result);
console.log("Original arr1:", arr1);
console.log("Original arr2:", arr2);
