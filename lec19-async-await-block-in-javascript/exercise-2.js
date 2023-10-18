const fetchFast = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Fast Done");
        }, 2000)
    })
}
const fetchSlow = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Slow Done");
        }, 6000)
    })
};

console.log("Program started");//1

// const useFastSlow = async () => {
//     const result1 = await fetchFast();
//     console.log(result1);//3
//      const result2 = await fetchSlow();
//      console.log(result2);///4

// }


const useFastSlow = async () => {
  const result1 =  fetchFast();
  //3
  const result2 =  fetchSlow();
  ///4

  Promise.all([result1, result2]).then((value) => {
    console.log(value[0], value[1]);
  })
};
useFastSlow();

console.log("Program completed");////2