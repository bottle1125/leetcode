/*
给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

说明：你不能倾斜容器，且 n 的值至少为 2。
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var len = height.length;
    var i = 0;
    var j = len - 1;
    var left = height[i];
    var right = height[j];
    var area = (j - i) * Math.min(left, right);

    while(j >= i) {
        if(left > right) {
            j--;
            right = height[j];
        } else {
            i++;
            left = height[i];
        }
        var tempArea = (j - i) * Math.min(height[i], height[j]);

        if(tempArea > area) {
            area = tempArea;
        }
    }

    // return area;
    console.log(area);
};

maxArea([1,8,6,2,5,4,8,3,7]);