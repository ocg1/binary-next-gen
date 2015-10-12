import React from 'react';
import { InputGroup, MarketSelector } from '../common';
import TradingTimesTable from './TradingTimesTable';
import { todayStr, oneYearAgoStr } from '../common/DateUtils';

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

const TradingTimesPane = ({assets, params}) => {
	const { tree, times, list } = assets.toJS();
	const marketName = (params.market && capitalize(params.market)) || 'Forex';
	const submarkets = Object.keys(tree[marketName] || []);
	const submarketForAsset = symbol => list.find(x => x.symbol === symbol).submarket_display_name;

	return (
		<div>
		<InputGroup type="date" value={todayStr()} min={oneYearAgoStr()} max={todayStr()} />
			<MarketSelector markets={Object.keys(tree)} selected={params.market} prefixRoute="/trading-times/" />
			{submarkets.map(submarket =>
				<TradingTimesTable
					key={submarket}
					submarket={submarket}
					times={times.filter(a => submarketForAsset(a.symbol) === submarket)} />
			)}
		</div>
	);
};

TradingTimesPane.propTypes = {
	assets: React.PropTypes.object.isRequired,
	params: React.PropTypes.object.isRequired,
};

// TradingTimesPane.shouldComponentUpdate(nextProps, nextState) => nextProps.assets !== this.props.assets;

export default TradingTimesPane;
