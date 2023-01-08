import {random, uniq} from "lodash";
import axios from "axios";

const numbers = [1,2,3,4,4,5,6,7,8,9,9];
console.log(uniq(numbers));

const name = 'vasily';
for (const letter of name) {
    console.log('letter > ', letter);
}
