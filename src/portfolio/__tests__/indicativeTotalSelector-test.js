import { fromJS } from 'immutable';
import expect from 'expect';
import { indicativeTotalSelector } from '../PortfolioSelectors';

describe('indicativeTotal', () => {
     it('should equal 0 for emtpy proposal list', () => {
         const actual = indicativeTotalSelector({
             openContracts: fromJS({}),
         });
         expect(actual).toEqual(0);
     });

     it('should equal the sell price of a single proposal', () => {
         const actual = indicativeTotalSelector({
             openContracts: fromJS({
                 1: { bid_price: 10 },
             }),
         });
         expect(actual).toEqual(10);
     });

     it('should equal the sum of proposal bid prices', () => {
         const actual = indicativeTotalSelector({
             openContracts: fromJS({
                 1: { bid_price: 1 },
                 2: { bid_price: 2 },
                 3: { bid_price: 3 },
             }),
         });
         expect(actual).toEqual(6);
     });
 });
