import * as React from 'react';
import { formatCurrency } from './sample-formatter';

export const App = () => <h1>My currency value: {formatCurrency(200)}</h1>;
