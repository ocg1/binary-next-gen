import { noOfDecimals } from 'binary-utils';
import safeMerge from './safeMerge';

export default (newAmount, oldTrade) => {
    const inputDecimalPlaces = noOfDecimals(newAmount);
    const decimalPlaces = inputDecimalPlaces > 8 ? 8 : inputDecimalPlaces;
    return safeMerge(oldTrade, { amount: (+newAmount).toFixed(decimalPlaces) });
};
