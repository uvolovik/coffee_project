import Drawer from '@material-ui/core/Drawer';
import Navigation from './Navigation';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DRAWER_WIDTH } from './constents';

type TemporaryDrawerProps = {
	handleDrawerPin: () => void;
	handleDrawerToggle: () => void;
	mobileOpen: boolean;
};
const useStyles = makeStyles(theme => ({
	drawerPaper: {
		width: DRAWER_WIDTH
	}
}));
export default function TemporaryDrawer(props: TemporaryDrawerProps) {
	const classes = useStyles();
	return (
		<Drawer
			variant="temporary"
			anchor="left"
			open={props.mobileOpen}
			onClose={props.handleDrawerToggle}
			classes={{
				paper: classes.drawerPaper
			}}
			ModalProps={{
				keepMounted: true // Better open performance on mobile.
			}}
		>
			<Navigation handleDrawerPin={props.handleDrawerPin} />
		</Drawer>
	);
}
