"use strict";
/**
 * Created by yross on 02/10/16.
 */
exports.PI = 3.14;
function calculateCircumference(diameter) {
    return diameter * exports.PI;
}
exports.calculateCircumference = calculateCircumference;
