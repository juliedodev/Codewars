function warnTheSheep(queue) {
    //   console.log(queue)
        // queue.length - 1 is last element of array
        let lastElement = queue.length - 1
        if (queue[lastElement] === 'wolf') { 
          return 'Pls go away and stop eating my sheep';
        } 
        else {
        // finding index of the 'wolf'
          let wolfIndex = queue.findIndex(x => x == 'wolf' );
        // subracting total array size by 1 index position behind wolf
          return `Oi! Sheep number ${queue.length - wolfIndex - 1}! You are about to be eaten by a wolf!`;
        }
    }