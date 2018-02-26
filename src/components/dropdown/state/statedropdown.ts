import { $ } from '../../../utilities/domManipulation';

export default class DropDownState {
    constructor() {
        $((<any>this).constructor.name.toLowerCase()).item(0).innerHTML = require("./statedropdown.html");
    }
}
