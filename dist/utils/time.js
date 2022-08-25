"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addHours = void 0;
const addHours = (hours, date = new Date()) => {
    const newDate = date;
    newDate.setHours(date.getHours() + hours);
    return newDate;
};
exports.addHours = addHours;
//# sourceMappingURL=time.js.map