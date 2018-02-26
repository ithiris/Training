import { $ } from './utilities/domManipulation';
import DropDownState from './components/dropdown/state/statedropdown'
import DropDownCity from './components/dropdown/city/citydropdown'
import  DropDownCountry from './components/dropdown/country/countrydropdown'


export default class App {
    public name = 'Rem';
    public index: number = 1;
    private component: Element;
    private dropdowncountry:DropDownCountry;
    private dropdownstate:DropDownState;
    private dropdowncity:DropDownCity;


    constructor() {
        $("#" + (<any>this).constructor.name.toLowerCase()).innerHTML = require("./app.html");
        this.dropdowncountry =new DropDownCountry ();
        this.dropdownstate =new DropDownState ();
        this.dropdowncity =new DropDownCity ();

        $("#add").addEventListener('click', () => {
            this.add();
        });
        $("#sub").addEventListener('click', () => {
            this.sub();
        });
        $("#name").innerHTML = this.name;
        $("#count").innerHTML = this.index.toString();

    }
    public add() {
        this.index = this.index + 1;
        $("#count").innerHTML = this.index.toString();
    }
    public sub() {
        this.index--;
        $("#count").innerHTML = this.index.toString();
    }
}
