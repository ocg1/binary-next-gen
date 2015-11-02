import React from 'react';
import { Panel } from '../_common';
import TickTradeContainer from './TickTradeContainer';

export default (props) => (
	<Panel title="Tick Trade" position={props.position}>
		<TickTradeContainer {...props} />
	</Panel>
);