import { $ } from '../../../utilities/domManipulation';

export default class DropDownCountry {
    constructor() {
        $((<any>this).constructor.name.toLowerCase()).item(0).innerHTML = require("./countrydropdown.html");
    }
}


