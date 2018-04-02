var findMedianSortedArrays = function(nums1, nums2) {
    const all = nums1.length + nums2.length;
    const middleNum = all / 2;
    let middleArr = [];
    if(!(all%2)) {
        middleArr = [middleNum - 1, middleNum];
    }
    else {
        middleArr = [Math.floor(middleNum), Math.floor(middleNum)];
    }

    let p1=0, p2=0,result=[];
    while(nums1[p1] || nums2[p2]) {
        if(nums1[p1] === undefined && nums2[p2] !== undefined) {
            result.push(nums2[p2]);
            p2++;
        }
        else if(nums2[p2] === undefined && nums1[p1] !== undefined) {
            result.push(nums1[p1]);
            p1++;
        }
        else if(nums2[p2] > nums1[p1]) {
            result.push(nums1[p1]);
            p1++;
        }
        else {
            result.push(nums2[p2]);
            p2++;
        }
        if(result.length >= middleArr[1] + 1) {
            break;
        }
    }
    
    console.log(((result[middleArr[0]] + result[middleArr[1]]) / 2).toFixed(1));
};

findMedianSortedArrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22], [0, 6]);