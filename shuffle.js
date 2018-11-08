module.exports = {
    students : ["Addison", "Bijaya","Christina", "Brandon", "Harry", "Jay", "Clarence", "Kenny", "Langdon", "Rachele", "Ujwal"],

    shuffle : (array, groupAmount) => {
        //bates shuffle the initial students array
        let m = array.length, t, i;
        while (m) {
          i = Math.floor(Math.random() * m--);
          t = array[m];
          array[m] = array[i];
          array[i] = t;
        }
        // define array of student groups
        let groups = [];
        let groupObj = {};
      
        // find the group sizes based on students amount and group amounts
        let groupsize = Math.round(array.length / groupAmount);
      
        //for each student group create an array and push into groups array
        array.forEach((item)=>{
          if(!groups.length || groups[groups.length-1].length == groupsize)
          groups.push([]);
          groups[groups.length-1].push(item);
        });
      // if there is an uneven amount of students there will be an array of one element at the end. Take that element and combine it with the previous index.
        if(groups[groups.length-1].length <= 1){
          groups[groups.length-2].push(groups[groups.length-1][0]);
          groups.pop(groups[groups.length-1])
        }
      
        let total = groups.length
      // turns the array into an object with group names as keys
        groups.forEach((i) => {
          let currentIndex = total ;
          total = currentIndex - 1
          groupObj[`Group:${currentIndex}`] = i
        })
        
        return groupObj;
      }
      
}




