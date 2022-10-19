/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let distances= [] , result = [];
    for (let i=0; i<points.length; i++) {
       let point = points[i];
       let distance = Math.sqrt( Math.pow(point[0] ,2) + Math.pow(point[1] ,2) );
       distances.push({distance , index:i}); 
    }
    
   distances.sort((a,b)=> a.distance-b.distance);

   for (let i=0; i<k; i++) {
     result.push( points[ distances[i].index] );
    }
    
    return result
};
