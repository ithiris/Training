import { $ } from '../../../utilities/domManipulation';

export default class DropDownCity {
    constructor() {
        $((<any>this).constructor.name.toLowerCase()).item(0).innerHTML = require("./citydropdown.html");
    }
}
